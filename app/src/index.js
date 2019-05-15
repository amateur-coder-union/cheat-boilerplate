const propsInit = require('./props-init');
const propsPool = require('./utils/props-pool');

const Fight = require('./core/fight');

async function mountModule(app) {
  await app.exposeFunction('_init', () => propsInit());
  await app.exposeFunction('_envFunc', () => process.env);

  await app.exposeFunction('_fight_start', () => {
    return propsPool.getApp(Fight).start();
  });
}

module.exports = mountModule;
