export const createAction = (type) => (payload) => ({ type, payload });

/**
 * 全局提示框
 * @param {string} title 字符串
 */
export function notification(title) {
  new Notification(title);
}
