const { Client } = require('@flasco/wda-driver');
const Fight = require('../app/src/core/fight');

(async () => {
  const client = new Client('http://localhost:8100');
  const session = await client.getSession();
  const { width, height } = await session.getWindowSize();

  if (width == null) throw new Error('位置错误，请尝试重新启动调试工具');

  const fight = new Fight({
    width,
    height,
    client,
    session
  })

  await fight.start();
})();
