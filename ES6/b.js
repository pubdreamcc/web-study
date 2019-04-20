// 接受a.js导出的person对象
import {person} from './a.js'
// 这里利用了对象的解构赋值，我们可以理解为下面的一句话
// import {person} from '{person: person}'
console.log(person.name)

// 接受a.js中导出的sum函数
import {sum} from './a'
console.log(`sum(1, 4):${sum(1, 4)}`)

// export default ... 表示默认导出，此时我们可以通过任意一个变量去接受
// 注意一个模块中只能有一个默认导出的对象
import obj from './a'
console.log(obj.name)

// 或者我们可以通过*号去接受导出的总对象集合
import * as cc from './a'
console.log(cc.person) // person对象
console.log(cc.sum) // sum函数