const TestControl = require('./core/test-control');

async function mountModule(app) {
  const control = new TestControl();

  await app.exposeFunction('_control', (str) => control.test(str));

  await app.exposeFunction('_envFunc', () => process.env);
}

module.exports = mountModule;
