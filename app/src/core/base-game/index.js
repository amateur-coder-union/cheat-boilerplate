const { Judge, delay } = require('@flasco/cheat-core');
const BaseGame = require('@flasco/cheat-core/dist/core/base-game');

class GameBase extends BaseGame {
  constructor(props) {
    super(props);
    // 开启心跳流
    this.hbInterval = setInterval(() => this.heartbeat(), 5 * 60 * 1000);
  }

  async heartbeat() {
    try {
      await this.client.ping();
    } catch (error) {
      clearInterval(this.hbInterval);
      throw new Error('link break...');
    }
  }

  judge(img) {
    return new Judge(img);
  }

  delay(ms) {
    return delay(ms);
  }
}

module.exports = GameBase;
