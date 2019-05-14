/**
 * 测试打印输出
 * @param {string} str 测试
 */
function testConsole(str) {
  console.log(str);
}

/**
 * 测试类
 * @class TestControl
 */
class TestControl {
  /**
   * 测试方法
   * @param {string} str
   * @return {string}
   * @memberof TestControl
   */
  test(str) {
    testConsole(str);
    return '这里是测试的返回语句';
  }
}

module.exports = TestControl;
