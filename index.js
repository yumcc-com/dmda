/**
 * 多维数组解构
 * @param {array} arr 数组
 * @param {object} options 参数
 * level: 解构的层级，默认为全部转为一维数组
 * isRepeat: 去重操作
 */
module.exports = (arr, options) => {
  const { level = Infinity, isRepeat = false } =  options || {}
  arr = arr || []
  let new_arr = arr.flat(level)
  if (isRepeat) {
    new_arr = Array.from(new Set(new_arr))
  }
  return new_arr
}