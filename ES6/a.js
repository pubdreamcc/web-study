// 导出 一个person对象
export let person = {
  name: 'wangzhan',
  age: 24
}

// 导出一个函数

export let sum = (x, y) => {
  return x+y
}

// 默认导出
export default new Object({
  name: 'hello',
  age: 123
})