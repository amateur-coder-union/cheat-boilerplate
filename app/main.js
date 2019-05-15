const path = require('path');
const carlo = require('carlo');
const notifier = require('node-notifier');

const mountModule = require('./src');
const appPath = path.resolve(__dirname, '../static/app.png');

(async () => {
  const app = await carlo.launch({
    width: 560,
    height: 330,
    icon: appPath,
    args: []
  });

  app.on('exit', () => process.exit());

  app.serveFolder(path.resolve(__dirname, '../static'));

  // 挂载模块
  await mountModule(app).catch(e => {
    notifier.notify({
      title: 'WDA_CHEAT',
      message: e.message
    });
    console.log(e);
    process.exit(0);
  });

  await app.load('index.html');
})();
