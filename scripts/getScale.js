const { Client } = require('@flasco/wda-driver');
const cv = require('opencv4nodejs');


(async () => {
  const client = new Client('http://localhost:8100');
  const session = await client.getSession();
  const { width } = await session.getWindowSize();

  if (width == null) throw new Error('位置错误，请尝试重新启动调试工具');

  const img = await client.screenshot();
  const mat = cv.imdecode(img);

  console.log('current scale - ', mat.cols / width);
  console.log('请注意，目前 scale 不等于 3 的机型无法使用');
  console.log('请耐心等待作者迭代至可配置 scale');
})();
