/**
 * 多维数组解构
 * @param {array} arr 数组
 * @param {object} options 参数
 * level: 解构的层级，默认为全部转为一维数组
 * isRepeat: 去重操作
 */
module.exports = (arr, options) => {
  const { level = Infinity, isRepeat = false } = options || {}
  arr = arr || []
  let data = arr.flat(level)
  return isRepeat ? Array.from(new Set(data)) : data
}