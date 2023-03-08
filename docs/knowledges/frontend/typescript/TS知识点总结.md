## 思维导图
[TS思维导图](https://www.yuque.com/go/doc/60524772?view=doc_embed)
## 类型
| **类型** | **说明** | **例子** |
| --- | --- | --- |
| number | 数值类型 | let num: number = 1 |
| string | 字符串 | let str: string = "hello" |
| boolean | 布尔型 | let isOpen: boolean = false |
| null | 表示空 | let empty: null = null |
| undefined | 未定义的或未赋值的 | let notInited: undefined = undefined |
| object | 对象 | let person: object= {} |
| any | 任何类型 | let person: any = 1 |
| unknown | 未知类型，不能直接赋值，需在判断完类型后才能赋值给unknown类型的变量。（可理解为更安全的any类型） | let a: known |
| nerver | 表示的是那些永不存在的值的类型。例如抛出错误。 | function doSomething() :nerver {} |
| void | 无返回值 | function setName(name):void {} |
| array | 数组 | 
- `let nums: Array<number> = [1, 2, 3]`
- `let nums: number[] = [1, 2, 3]`
 |
| tuple | 元组，表示一个已知元素数量和类型的数组，各元素的类型不必相同。 | let tup: [number, boolean, string]= [1, true, "hello"] |
| enum | 枚举 | enum Color {RED, GREEN, BLUE} |

使用示例
```typescript
console.log('学习01-ts类型');

// 01.数值
let num: number = 20;
console.log(num); // 20

// 02.字符串
let myName: string = 'alan';
console.log(myName); // alan

// 03.布尔型
let isDone: boolean = false;
console.log(isDone ? '完成' : '未完成'); // 未完成

// 04.null
let nu = null;
console.log(nu); // null

// 05.undefined
let un = undefined;
console.log(un); // undefined

// 06.数组
let arr: number[] = [1, 2, 3, 4];
let arr2: Array<string> = ['alan', 'bob', 'tom']; // 泛型数组
console.log(arr); // [1, 2, 3, 4]
console.log(arr2); // ['alan', 'bob', 'tom']

// 07.元组
let tuple: [string, number] = ['alan', 10];
console.log(tuple); // ['alan', 10]
console.log(Object.prototype.toString.call(tuple)); // [object Array]
console.log(tuple[0]); // alan
tuple[1] = 20;
console.log(tuple); // ['alan', 20]

// 08.枚举
enum Color {
  Red, 
  Green, 
  Blue
};
let c: Color = Color.Blue;
console.log(c); // 2 （索引值）

// 09.any
let notSure: any;
notSure = 123;
console.log(notSure); // 123
notSure = 'alan'
console.log(notSure); // alan

// 10.void
let empty: void;
empty = undefined;
console.log(empty); // undefined

// 11.nerver
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// 12.object
let obj: object;
obj = { name: 'alan'};
console.log(obj);
// obj = 2; // error


// 类型断言
let type: any = 10;
let sum = <number>type + 20; // 方式1
console.log(sum); // 30

let type2: string = 'alan';
let len = (type2 as string).length; // 方式2
console.log(len); // 4

```

## ??，?.， !.，_,  **的含义
**??**
?? 判断变量是否为null或undefined，如果不是，则使用该变量的值，否则使用后面的默认值
```typescript
// ??
function getInitData(data) {
	return data ?? { name: "AlanLee" }
}
console.log(getInitData(null)); // { name: "AlanLee" }
```

**?.**
?. 可选链。表示后面的变量/函数不为null/undefined就取该变量的值/执行函数，否则赋值为undefined
```typescript
// 例如
let res: any = {
	code: 0,
  msg: "ok",
  data: {
  	name: "AlanLee"
  }
}

console.log(res.data?.name); // AlanLee
console.log(res.data?.age); // undefined

```

**!.**
!. 空值合并符，断言该变量不为null。
```typescript
// 例如
let res = {
	code: 0,
  msg: "ok",
  data: {
  	name: "AlanLee"
  }
}

res.data.age = 18;

console.log(res.data!.age); // 18

```

**_**
_ 数字分割符，只是为了视觉上好区分数字，编译之后为正常的数字。
```typescript
// 例如，let million = 1_000_000，1_000_000编译后就是1000000

let million = 1_000_000
console.log(million); // 1000000
```

******
** 求幂操作符
```typescript
// 例如，let pow = 2 ** 3; // 8，表示2^3 = 8

let pow = 2 ** 3;
console.log(pow); // 8
```

## readonly 和 const的区别
相同点：修饰的值都不可重新赋值
不同点：readonly用来修饰属性，const用来声明变量

## interface 与 type的区别
相同点：描述一种类型
不同点：

- interface会创建一个新类型，type不会创建新类型，只创建一个名字来引用类型
- interface可以被继承和被实现，type不能
