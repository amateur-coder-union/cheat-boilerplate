const Logger = require('@flasco/logger').time;
const {
  drag,
  tap,
  wait
} = require('@flasco/cheat-core/src/utils/chainOperation');

const BaseGame = require('../base-game');
const {
  fight1,
  fightBtn,
  chapter21,
  fixedLineup,
  fightMonster,
  fightPrepare,
  unlockFlag,
  fightBoss,
  fightWin,
  fightReward
} = require('../../assets');

class Fight extends BaseGame {
  async start() {
    Logger.info('cheat gamer.');

    await this.tryClickREP(1, 3, fight1);
    await this.delay(4200);
    await this.tryClickREP(1, 3, chapter21);
    await this.delay(1800);
    await this.tryClickREP(1, 3, fightBtn);
    await this.delay(1800);
    await this.waitUntil(fixedLineup);
    await this.fightScan();
    await this.delay(3000);
    await this.getFightReward();
    Logger.success('结束一次副本...!');
  }

  async fightScan() {
    Logger.info('fight.');
    let isUnLock;
    let failedCnt = 0;
    let fightCnt = 0;
    let isSwiped = false;
    for (;;) {
      const image = await this.screenshot();
      const { resId, result: point } = this.judge(image)
        .match(this.getPicture(fightBoss))
        .match(this.getPicture(fightMonster));

      if (resId !== -1) {
        if (resId === 1) Logger.info('发现Boss，fight...');
        else Logger.info('发现战斗，fight...');

        await this.tap(point.x + 19, point.y + 14, false);

        if (isUnLock == null) isUnLock = this.isSimple(image, unlockFlag);

        await this.delay(1700);
        const img = await this.screenshot();
        if (this.isSimple(fixedLineup, img)) {
          if (failedCnt++ > 8) {
            Logger.info('滑动一哈...');
            failedCnt = 0;
            await this.dragMap(isSwiped);
            isSwiped = true;
            await this.delay(1700);
          } else {
            Logger.info('尝试点击累计失败了', failedCnt, '次');
          }
          continue; // 打怪点击失败了，重新点
        }
        fightCnt++;
        Logger.info('当前在打第', fightCnt, '只');
        failedCnt > 0 && (failedCnt = 0);
        if (isUnLock) {
          Logger.info('未锁定阵容...');
          await this.delay(3000);
          await this.tryClickREP(1, 3, fightPrepare);
        }
        await this.delay(15000);
        await this.checkFightEnd();
        if (resId === 1) break;
        await this.delay(4000);
        continue;
      }
      Logger.info('一片打完了，滑动一哈...');
      await this.dragMap(isSwiped);
      isSwiped = true;
    }
  }

  async dragMap(isSwiped) {
    if (isSwiped) return;
    const dragArr = drag([580, 76], [138, 76], 1200, 3);
    await this.chainOperation(dragArr);
  }

  async checkFightEnd() {
    for (let i = 0; ; await this.delay(3000)) {
      const img = await this.screenshot();
      if (this.isSimple(fightWin, img)) {
        await this.chainOperation([
          tap(this.width / 2, this.height / 2, 5),
          wait(500),
          tap(this.width / 2, this.height / 2, 5),
          wait(500),
          tap(this.width / 2, this.height / 2, 5)
        ]);
        break;
      }
      if (i++ > 50) throw new Error('未知错误...');
    }
  }

  async getFightReward() {
    await this.delay(3600);
    for (; ; await this.delay(1800)) {
      const image = await this.screenshot();
      const { simple, point } = this.judgeMatching(fightReward, image);

      if (simple > 0.75) {
        await this.chainOperation([
          tap(point.x, point.y, 5),
          wait(1200),
          tap(this.width - 20, this.height - 10, 5)
        ]);
        continue;
      }
      await this.delay(3000);
      const img2 = await this.screenshot();
      const { resId } = this.judge(img2)
        .match(fightBtn)
        .match(chapter21);
      if (resId === -1) throw new Error('副本退出异常');
    }
  }
}

module.exports = Fight;
