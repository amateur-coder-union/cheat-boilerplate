class PropsPool {
  constructor() {
    this.baseProps = null;
    this.appMap = {};
  }

  getBaseProps() {
    return this.baseProps;
  }

  setBaseProps(props) {
    this.baseProps = props;
  }

  /**
   * @description 获取实例，单例模式
   * @param {Function} Entity 带uniqueId的类
   * @return {Object}
   */
  getApp(Entity) {
    // 取 class 的 name
    const uniqueName = Entity.name;
    if (uniqueName == null) throw new Error('不在预期范围内的get');
    else {
      if (this.appMap[uniqueName] == null) {
        this.appMap[uniqueName] = new Entity(this.baseProps);
      }
      return this.appMap[uniqueName];
    }
  }
}

const propsPool = new PropsPool();

module.exports = propsPool;
