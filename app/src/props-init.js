const { Client } = require('@flasco/wda-driver');

const propsPool = require('./utils/props-pool');

// com.netease.onmyoji - 阴阳师 1.0.4067.412106
const BUNDLE_ID = 'com.netease.onmyoji';

async function initProps() {
  if (propsPool.getBaseProps() != null) return 'already linked!';

  const client = new Client('http://localhost:8100');
  const isLocked = await client.isLocked();
  if (isLocked) throw new Error('请先解锁屏幕');
  const { bundleId } = await client.getActiveAppInfo();
  let session;
  if (bundleId !== BUNDLE_ID) session = await client.startApp(BUNDLE_ID);
  else session = await client.getSession();

  const { width, height } = await session.getWindowSize();

  propsPool.setBaseProps({
    width,
    height,
    client,
    session
  });

  return 'link success!';
}

module.exports = initProps;
