const wda = require('@flasco/wda-driver');

(async () => {
  const c = new wda.Client('http://localhost:8100');
  const timex = new Date().getTime();
  await c.screenshot(`${timex}.png`);
})();
