#### 1. var 和 let 和 const 的区别
- var - 声明变量，访问后面用var声明但未赋值的变量，得到的结果是undefined
- let -  声明变量，具有块级作用域，访问后面用let声明但未赋值的变量，会产生引用错误（暂死性死区）
- const - 声明常量，具有块级作用域
```javascript
console.log("a", a);  // a undefined
console.log("b", b);  // Uncaught ReferenceError: Cannot access 'b' before initialization
var a;
let b;
```
注：变量可以在声明前使用是因为js有“变量提升”的特性（函数声明也可以提升）

#### 2. 变量的作用域
全局变量：在函数之外声明的变量，叫做全局变量
局部变量：在函数内部声明的变量，叫做局部变量

#### 3. 数据类型
最新的 ECMAScript 标准定义了8种数据类型：

- 七种基本数据类型:
   - 布尔值（Boolean），有2个值分别是：`true` 和 `false`.
   - null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 `null` 与 `Null`、`NULL`或变体完全不同。
   - undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
   - 数字（Number），整数或浮点数，例如： `42` 或者 `3.14159`。
   - 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
   - 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
   - 代表（Symbol） ( 在 ECMAScript 6 中新添加的类型)。一种实例是唯一且不可改变的数据类型。
- 对象（Object）。

#### 4. for...in 与 for...of 的区别

- `for...in` 语句循环一个指定的变量来循环一个对象所有可枚举的属性
- `for...of` 语句在可迭代对象（包括`Array`、`Map`、`Set`、`arguments` 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代
```javascript
let arr = [3, 5, 7];
arr.foo = "hello";
for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}
for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}
```

#### 5. 函数声明与函数表达式
**函数声明：**
一个函数定义（也称为函数声明，或函数语句）由`function`关键字声明的函数
```javascript
function square(number) {
  return number * number;
}
```

**函数表达式：**
由`function`关键字声明的函数（或箭头函数）并赋值给一个变量
```javascript
const square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```

两者不同点：函数声明可以提升，函数表达式不可以

#### 6. 闭包
闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。 ——JavaScript高级程序设计（第4版）
> 简单理解：一个函数中嵌套了一个函数，内层函数使用了外层函数的变量或者参数，就形成了一个闭包。


```javascript
function hello(name) {
  let i = 0;
  
  // 嵌套了一个函数
  return function greeting(msg){
    i++; // 使用外层函数的变量
    let str = msg + ', ' + name; // 使用外层函数的参数
    console.log(str); 
    console.log('i=', i);
  }
}

let greet = hello('Alan');
greet('Hi');  // Hi, Alan   i= 1 // Alan 和 i 的值都是引用着外层函数的变量/参数

// greet = null; // 释放引用

// Alan 和 i 的值都是引用着外层函数的变量/参数，所以再次执行时，i的值在原来的值上增加，所以为2
greet('Hey'); // Hey, Alan  i= 2 

```

**闭包的作用：**

1. 读取另一个函数中变量/参数
2. 保持变量在内存中不被销毁
3. 封装对象的私有属性和私有方法

**闭包的缺点：**

1. 比其他函数更占用内存，因为闭包会保留它们包含函数的作用域。

**闭包的应用场景：**

1. 解决循环中var定义的变量污染全局的问题
2. 封装对象的属性和方法
3. 缓存结果

#### 7. arguments
arguments变量只是 ”类数组对象“，并不是一个数组。称其为类数组对象是说它有一个索引编号和length属性。尽管如此，它并不拥有全部的Array对象的操作方法。

#### 8. 箭头函数与普通函数中this的指向
普通函数重新定义了自己的 this 值

- 在构造函数this指向对象自己本身；
- 在非严格模式下，this指向全局对象`Window`
- 在严格模式下，是`undefined`；

通过构造函数构建对象
```javascript
function Person() {
  // 构造函数Person()将`this`定义为自身
  this.name = "AlanLee";
  console.log('this -> ', this); // this ->  Person {name: "AlanLee"}
}

// 通过构造函数构建对象
var p = new Person();
```

非严格模式（直接调用函数，this指向window）
```javascript
function Person() {
  this.name = "AlanLee";
  console.log('this', this); // Window {parent: Window, opener: null,  …}
}

// 直接调用函数
Person();
```

严格模式（直接调用函数，this指向undefined）
```javascript
function Person() {
  "use strict"; // 严格模式
  this.name = "AlanLee";
  console.log('this', this); // Uncaught TypeError: Cannot set property 'name' of undefined
}

// 直接调用函数
Person();
```

箭头函数会在上下文中寻找this
```javascript
function Person(){
  this.age = 0;
  console.log('this-1', this); // this-1 Person {age: 0}

  setInterval(() => {
    this.age++; // 这里的`this`正确地指向person对象
    console.log('age', this.age); // age 1
    console.log('this-2', this); // this-2 Person {age: 1}
  }, 1000);
}

var p = new Person();
```

#### 9. 类型判断

- typeof 操作符，判断基本数据类型
- instanceof关键字，判别对象是否是所指定的类型，是则返回true，不是则返回false
- Object.prototype.toString.call() 判断具体类型

typeof 操作符
```javascript
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();

typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"

typeof true; // returns "boolean"
typeof null; // returns "object"

// 对于预定义的对象，typeof 操作符将会返回如下结果：
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

instanceof关键字
```javascript
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```

#### 10.判断对象是否为空的方法

1. 将json对象转化为json字符串，再判断该字符串是否为"{}"
```javascript
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);//true
```

2. for...in 循环判断
```javascript
var obj = {};
function isEmptyObj() {
  for(var key in obj) {
    return false;
  }
  return true;
}
alert(isEmptyObj(obj));//true
```

3. Object.getOwnPropertyNames()方法此方法是使用Object对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空
```javascript
var data = {};
var arr = Object.getOwnPropertyNames(data);
alert(arr.length == 0);//true
```

4. 使用ES6的Object.keys()方法与3方法类似，是ES6的新方法, 返回值也是对象中属性名组成的数组
```javascript
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0);//true
```

#### 11. 操作符in和hasOwnProperty()的区别

- 只要通过对象可以访问，in 操作符就返回 true
- hasOwnProperty()只有属性存在于实例上时才返回 true。

#### 12. 数组length属性的特殊性

- 数组length的值等于数组中最大索引数+1
- 将数组的length属性赋值为0会把数组清空

#### 13. Object和Map的比较
一般地，objects会被用于将字符串类型映射到数值。`Object`允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而`Map`具有更多的优势。

- `Object`的键均为`Strings`类型，在`Map`里键可以是任意类型。
- 必须手动计算`Object`的尺寸，但是可以很容易地获取使用`Map`的尺寸。
- `Map`的遍历遵循元素的插入顺序。
- `Object`有原型，所以映射中有一些缺省的键。（可以用 `map = Object.create(null) 回避`）。

这三条提示可以帮你决定用`Map`还是`Object`：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用`Map`。
- 如果需要将原始值存储为键，则使用`Map`，因为`Object`将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果需要对个别元素进行操作，使用`Object`。

#### 14. call、apply、bind的区别
`call` 和 `apply` 都是改变 `this` 的指向，`this`将指向目标对象（第一个参数）。作用都是相同的，只是传参的方式不同。

- `call` 接收一个参数列表
- `apply` 接受一个参数数组

`bind` 也是改变 `this` 的指向，返回一个函数
```javascript
let targetObj = {
  value: 'I am targetObj'
}
function getValue(name, age) {
  console.log(name)       // AlanLee
  console.log(age)        // 23
  console.log(this.value) // I am targetObj
}
getValue.call(targetObj, 'AlanLee', '23')
getValue.apply(targetObj, ['AlanLee', '23'])
```

#### 15.__proto__和prototype的关系

- 每个实例对象（ object ）都有一个私有属性（称之为 __proto__ ）指向它的构造函数的原型对象（**prototype **）。该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 `null`。根据定义，`null` 没有原型，并作为这个**原型链**中的最后一个环节。
- 每个函数都有一个 `prototype` 属性


#### 16. js的继承
继承有6种方式

1. 原型链继承
2. 盗用构造函数继承
3. 组合继承
4. 原型式继承
5. 寄生式继承
6. 寄生式组合继承

**1.原型链继承**
将子对象的prototype指向要继承对象
```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

function Cat() {
  this.name = "猫";
}

// 继承：将Cat的prototype指向Animal对象
Cat.prototype = new Animal();

let xiaobai = new Cat();
console.log(xiaobai); // Cat {name: "猫"}
console.log(xiaobai.name); // 猫
console.log(xiaobai.eye); // 2
xiaobai.sound("喵喵喵"); // 猫的叫声： 喵喵喵
```
**原型链继承的问题**

1. 原型中包含的引用值会在所有实例间共享
2. 子类型在实例化时不能给父类型的构造函数传参

**2.盗用构造函数继承**
通过改变子对象中的this，将子对象的this指向要继承的对象的this
```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

function Dog() {
  // 继承：通过改变Dog函数中的this，将Dog的this指向Animal的this
  Animal.call(this);
  this.name = "狗";
}

let wangcai = new Dog(); 
console.log(wangcai); // Dog {eye: 2, name: "狗", sound: ƒ (voice="--")}
console.log(wangcai.name); // 狗
console.log(wangcai.eye); // 2
wangcai.sound("旺旺旺"); // 旺旺旺
```
**盗用构造函数继承的问题**

1. 函数不能重用
2. 子类也不能访问父类原型上定义的方法

**3.组合继承**
组合继承（原型链继承 + 构造函数继承）
组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

// 继承：组合继承（原型+构造函数）
function Cat(name) {
  Animal.call(this, name);
  this.ear = 2;
}
Cat.prototype = new Animal();

let xiaobai = new Cat("猫");
console.log(xiaobai); // Cat {name: "猫", eye: 2, ear: 2, sound: ƒ}
console.log(xiaobai.name); // 猫
console.log(xiaobai.eye); // 2
console.log(xiaobai.ear); // 2
xiaobai.sound("喵喵喵"); // 喵喵喵
```
组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：
一次在是创建子类原型时调用；
另一次是在子类构造函数中调用。

**4.原型式继承**
创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临时类型的一个实例。本质上，createObj()是对传入的对象执行了一次浅复制。
```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log(this.name + "的叫声：", voice);
  }
}

// 通过临时的构造函数创建
function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let animal = new Animal();

let cat = inheritObj(animal);
console.log(cat); // F {name: "猫", __proto__: Animal}
cat.name = "猫";
console.log(cat.name); // 猫
console.log(cat.eye); // 2
cat.sound("喵喵喵"); // 喵喵喵


let dog = inheritObj(animal);
console.log(dog); // F {name: "狗", __proto__: Animal}
dog.name = "狗";
console.log(dog.name); // 狗
console.log(dog.eye); // 2
dog.sound("旺旺旺"); // 旺旺旺
```

**5.寄生式继承**
创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象。
```javascript
let Animal = {
  name: "动物"
}

// 寄生式继承
function inheritObj(originObj) {
  // 返回一个新对象
  let newObj = Object.assign({}, originObj);
  // 然后增强新对象
  newObj.eat = function(food) {
    console.log(`${this.name}吃${food}`);
  }
  return newObj;
}


let cat = inheritObj(Animal);
cat.name = "猫";
console.log(cat); // F {name: "猫", eat: ƒ}
console.log(cat.name); // 猫
cat.eat("小鱼干"); // 猫吃小鱼干
```

**6.寄生式组合继承**
使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。
```javascript
function Animal(name) {
  this.name = name || "动物";
  this.eye = 2;
  this.sound = function(voice="--") {
    console.log("动物的叫声：", voice);
  }
}

function inheritObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// 寄生式组合继承（盗用构造函数继承+原型式继承）
function inheritPrototype(subType, superType) {
  let superPrototype = inheritObj(superType.prototype);
  superPrototype.construct = subType;
  subType.prototype = superPrototype;
}

function Cat(name) {
  Animal.call(this, name);
}
inheritPrototype(Cat, Animal);
Cat.prototype.eat = function(food) {
  console.log(`${this.name}吃${food}`);
}

let cat = new Cat("猫");
console.log(cat); // Cat {name: "猫", eye: 2, sound: ƒ}
console.log(cat.name); // 猫
cat.eat('小鱼干'); // 猫吃小鱼干
```

#### 17.作用域


#### 18.作用域链

#### 19.JS事件循环
在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染
- 渲染完毕后，JS线程继续接管，开始下一个宏任务（从事件队列中获取）

简单总结一下执行的顺序：执行宏任务，然后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。
![1653721873-5adb68e2247cf_fix732.gif](https://cdn.nlark.com/yuque/0/2021/gif/743297/1620354189513-2540985c-7421-44e0-81de-1a9039d4922c.gif#clientId=udb5a9ace-efc8-4&from=drop&id=u1be31296&name=1653721873-5adb68e2247cf_fix732.gif&originHeight=407&originWidth=732&originalType=binary&ratio=1&size=520900&status=done&style=none&taskId=u213521c0-e151-491d-8e4c-d648c651f48)

- 宏任务按顺序执行，且浏览器在每个宏任务之间渲染页面
- 所有微任务也按顺序执行，且在以下场景会立即执行所有微任务
   - 每个回调之后且js执行栈中为空。
   - 每个宏任务结束后。

**执行栈(Call Stack)**
JS 中的执行栈是数据机构中的桟结构，当引擎第一次遇到 JS 代码时，会产生一个全局执行上下文并压入执行栈，每遇到一个函数调用，就会往栈中压入一个新的上下文。引擎执行栈顶的函数，执行完毕，弹出当前执行上下文。

**宏任务(Macrotask)**
script(整体代码)、setTimeout、setInterval、UI 渲染、 I/O、postMessage、 MessageChannel、setImmediate(Node.js 环境)
**微任务(Microtask)**
Promise、 MutaionObserver、process.nextTick(Node.js环境）


#### 20.ES6新增内容

- let、const
- 结构赋值
- 字符串模板
- 箭头函数
- 数组方法map()、filter()、some()、every()、reduce()、flat()
- Symbol类型
- Promise
- async...await
- class
- proxy
- Set
- Map
- import / export


#### 21.冒泡和捕获
当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其他祖先上的处理程序。

```javascript
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
点击内部的`<p>`会首先运行onclick：

1. 在该`<p>`上的。
2. 然后是外部`<div>`上的。
3. 然后是外部`<form>`上的。
4. 以此类推，直到最后的document对象。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1620355469706-b405225c-b366-4483-85c5-2219afeec79b.png#clientId=u4760b533-f469-4&from=paste&height=142&id=uf57df6e9&name=image.png&originHeight=284&originWidth=475&originalType=binary&ratio=1&size=12466&status=done&style=none&taskId=u19f7c03e-ee02-41e1-be0f-d9b9be6b49e&width=237.5)

因此，如果我们点击`<p>`，那么我们将看到 3 个 alert：p→div→form。
这个过程被称为“冒泡（bubbling）”，因为事件从内部元素“冒泡”到所有父级，就像在水里的气泡一样。

**停止冒泡**
用于停止冒泡的方法是event.stopPropagation()。


#### 22.事件委托

#### 23.ajax

#### 24.CommonJS规范 和 AMD JS规范、CMD JS规范的区别
AMD 推崇依赖前置、提前执行
CMD推崇依赖就近、延迟执行

#### 25.解决循环var定义变量的问题
普通情况下
```javascript
for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);	// 4 4 4 4
  }, 300);
}
```
解决方法
1.使用let替换var
```javascript
for (let i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i);	// 0 1 2 3
  }, 300);
}
```
2.使用立即执行函数
```javascript
for (var i = 0; i < 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // 0 1 2 3
    }, 300);
  })(i)
}
```
3.使用闭包
```javascript
for (var i = 0; i < 4; i++) {
  setTimeout((function (i) {
    return function() {
      console.log(i); // 0 1 2 3
    }
  })(i), 300);
}
```
