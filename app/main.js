const carlo = require('carlo');
const path = require('path');

const mountModule = require('./src');
const appPath = path.resolve(__dirname, '../static/app.png');

(async () => {
  const app = await carlo.launch({
    width: 560,
    height: 330,
    icon: appPath,
    args: [],
  });

  app.on('exit', () => process.exit());

  app.serveFolder(path.resolve(__dirname, '../static'));

  // 挂载模块
  await mountModule(app);

  await app.load('index.html');
})();

