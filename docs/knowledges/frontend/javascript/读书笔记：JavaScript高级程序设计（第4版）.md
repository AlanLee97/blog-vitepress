#### ![a3942abebcb6534a.jpg](https://cdn.nlark.com/yuque/0/2021/jpeg/743297/1616202843207-cd290106-c19b-4692-9f06-30f803d811b3.jpeg#height=400&id=wdwZl&name=a3942abebcb6534a.jpg&originHeight=800&originWidth=800&originalType=binary&size=390609&status=done&style=none&width=400)
#### 关于本书
| **书名** | JavaScript高级程序设计（第4版） | **作者** |  
[[美] 马特·弗里斯比](https://book.douban.com/search/%E9%A9%AC%E7%89%B9%C2%B7%E5%BC%97%E9%87%8C%E6%96%AF%E6%AF%94) |
| --- | --- | --- | --- |
| **出版社** | 人民邮电出版社 | **阅读日期** | 2021年3月 |
| **豆瓣评分** | 9.0 | **我的评分** | ☆☆☆☆ |



## 第1章 什么是JavaScript
### 1. JavaScript 实现
完整的 JavaScript 实现包含以下几个部分

- 核心（ECMAScript）：由 ECMA-262 定义并提供核心功能。
- 文档对象模型（DOM）：提供与网页内容交互的方法和接口。
- 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1616203227680-a843e4a9-99c2-4db9-bffa-2c47d89b9639.png#height=132&id=HZSuQ&name=image.png&originHeight=132&originWidth=341&originalType=binary&size=6575&status=done&style=none&width=341)
### 2. DOM
DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。
### 3. BOM
总体来说，BOM 主要针对浏览器窗口和子窗口（frame），不过人们通常会把任何特定于浏览器的
扩展都归在 BOM 的范畴内。比如，下面就是这样一些扩展：

- 弹出新浏览器窗口的能力；
- 移动、缩放和关闭浏览器窗口的能力；
- navigator 对象，提供关于浏览器的详尽信息；
- location 对象，提供浏览器加载页面的详尽信息；1.3 JavaScript 版本 9 
- screen 对象，提供关于用户屏幕分辨率的详尽信息；
- performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息；
- 对 cookie 的支持；
- 其他自定义对象，如 XMLHttpRequest 和 IE 的 ActiveXObject。

## 第2章 HTML 中的 JavaScript 

### 1. `<script>`元素有下列 8 个属性

- **async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。**
- charset：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。
- crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin=  "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。
- **defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。**
- integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保CDN不会提供恶意内容。
- language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。
- src：可选。表示包含要执行的代码的外部文件。
- type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值还有"application/javascript"和"application/ecmascript"。如果这个值是module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。
#### 
### 2. async和defer的区别

- async属性，告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本，所以不保证能按照脚本出现的次序执行。
- defer 属性，相当于告诉浏览器立即下载脚本，但延迟执行。

> 使用 async 也会告诉页面你不会使用document.write，不过好的 Web 开发实践根本就不推荐使用这个方法。


> 对 defer 属性的支持是从 IE4、Firefox 3.5、Safari 5 和 Chrome 7 开始的。其他所有浏览器则会忽略这
> 个属性，按照通常的做法来处理脚本。考虑到这一点，还是把要推迟执行的脚本放在页面底部比较好。


### 3. 解释 JavaScript 代码，页面阻塞
解释行内和外部 JavaScript 代码，页面都会阻塞。（阻塞时间也包含下载文件的时间。）

### 4. `<noscript>`元素
`<noscript>`元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容。是对早期浏览器不支持 JavaScript 的问题提出的一个页面优雅降级的处理方案。
在下列两种情况下，浏览器将显示包含在中的内容：

- 浏览器不支持脚本；
- 浏览器对脚本的支持被关闭。

任何一个条件被满足，包含在中的内容就会被渲染。否则，浏览器不会渲染中的内容。

## 第3章 语言基础
### 1. let与var的区别
1. 暂时性死区
let 与 var 的另一个重要的区别，就是 let 声明的变量不会在作用域中被提升。
```javascript
// name 会被提升
console.log(name); // undefined 
var name = 'Matt'; 

// age 不会被提升
console.log(age); // ReferenceError：age 没有定义
let age = 26;
```
2. 全局声明
与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声明的变量则会）。
```javascript
var name = 'Matt'; 
console.log(window.name); // 'Matt' 
let age = 26; 
console.log(window.age); // undefined
```

3. 条件声明
在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。
### 2. const
如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。

表格总结

| **关键字** | **作用域** | **提升** | **重复声明** |
| --- | --- | --- | --- |
| var | 函数级 | 可以，且可以访问，值为undefined | 可以 |
| let | 块级 | 可以，但不能访问（暂时性死区） | 不可以 |
| const | 块级 | 可以，但不能访问（暂时性死区） | 不可以 |

#### 
### 3. 数据类型

- 简单数据类型（也称为原始类型，6种）：
   - Undefined、
   - Null、
   - Boolean、
   - Number、
   - String 
   - Symbol。Symbol（符号）是 ECMAScript 6 新增的。
- 复杂数据类型（1种）
   - Object

> null 值表示一个空对象指针，undefined 值是由 null 值派生而来的


Boolean()转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值。下表总结了不同类型与布尔值之间的转换规则。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1616288167120-b1c1c1f3-a7be-4720-b6ec-c356268dee90.png#height=156&id=YWP9X&name=image.png&originHeight=156&originWidth=732&originalType=binary&size=26978&status=done&style=none&width=732)
> 记住：false、""、 0、NaN、null、undefined 这6个值会被Boolean()转换成false，其余的全为true


### 4. 类型判断

1. **typeof**
   - 只能判断基本类型，不能区分引用类型
2. **instanceOf**
3. **Object.prototype.toString.call**


### 5. 字符串的特点
ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量，例如
```javascript
let lang = "Java"; 
lang = lang + "Script";
```
这里，变量 lang 一开始包含字符串"Java"。紧接着，lang 被重新定义为包含"Java"和"Script"的组合，也就是"JavaScript"。整个过程首先会分配一个足够容纳 10 个字符的空间，然后填充上"Java"和"Script"。最后销毁原始的字符串"Java"和字符串"Script"，因为这两个字符串都没有用了。所有处理都是在后台发生的，而这也是一些早期的浏览器（如 Firefox 1.0 之前的版本和 IE6.0）在拼接字符串时非常慢的原因。这些浏览器在后来的版本中都有针对性地解决了这个问题。

### 6. i++ 和 ++i 的区别
**i++** 会先把 **i **的值使用，再进行计算
```javascript
let i = 0;
console.log(i++); // 0   先使用了i的值，所以打印了 0
console.log(i++); // 1   先使用上次i++的值，所以打印了 1
```

**++i  **会先计算 **i **的值，再使用
```javascript
let i = 0;
console.log(++i); // 1  先计算了i的值，最后才使用，所以打印了1
console.log(++i); // 2
```
> 记忆方法：变量在前就先使用变量，符号在前就先运算


## 第4章 变量、作用域与内存
### 1. 执行上下文
变量或函数的上下文决定了它们可以访问哪些数据，以及它们的行为。每个上下文都有一个关联的变量对象（variable object），而这个上下文中定义的所有变量和函数都存在于这个对象上。虽然无法通过代码访问变量对象，但后台处理数据会用到它。

每个函数调用都有自己的上下文。当代码执行流进入函数时，函数的上下文被推到一个上下文栈上。在函数执行完之后，上下文栈会弹出该函数上下文，将控制权返还给之前的执行上下文。

执行上下文分全局上下文、函数上下文和块级上下文。
### 2. 作用域链
上下文中的代码在执行的时候，会创建变量对象的一个作用域链（scope chain）。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。


### 3. 垃圾回收
两种主要的标记策略：

- 标记清理
- 引用计数

**标记清理**
JavaScript 最常用的垃圾回收策略是标记清理（mark-and-sweep）。当变量进入上下文，比如在函数内部声明一个变量时，这个变量会被加上存在于上下文中的标记。而在上下文中的变量，逻辑上讲，永远不应该释放它们的内存，因为只要上下文中的代码在运行，就有可能用到它们。当变量离开上下文时，也会被加上离开上下文的标记。垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉。在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了。随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存。

**引用计数**
另一种没那么常用的垃圾回收策略是引用计数（reference counting）。其思路是对每个值都记录它被引用的次数。声明变量并给它赋一个引用值时，这个值的引用数为 1。如果同一个值又被赋给另一个变量，那么引用数加 1。类似地，如果保存对该值引用的变量被其他值给覆盖了，那么引用数减 1。当一个值的引用数为 0 时，就说明没办法再访问到这个值了，因此可以安全地收回其内存了。垃圾回收程序下次运行的时候就会释放引用数为 0 的值的内存。**缺点：**对象相互引用导致引用数永远不会变成 0，如果函数被多次调用，则会导致大量内存永远不会被释放。

### 4. JS性能

1. 通过 **const **和 **let **声明提升性能
   - const 和 let 都以块（而非函数）为作用域，所以相比于使用 var，使用这两个新关键字可能会更早地让垃圾回收程序介入，尽早回收应该回收的内存。
2. 隐藏类和删除操作
   - 把不想要的属性设置为 null（解除引用）。这样可以保持隐藏类不变和继续共享，同时也能达到删除引用值供垃圾回收程序回收的效果。
3. 内存泄漏
   - 避免意外声明全局变量
   -  JavaScript 闭包很容易造成内存泄漏



## 第5章 基本引用类型

1. Date
2. RegExp
   - exec() 用于配合捕获组使用,如果找到了匹配项，则返回包含第一个匹配信息的数组；如果没找到匹配项，则返回
null。
   - test() 接收一个字符串参数。如果输入的文本与模式匹配，则参数
返回 true，否则返回 false。
3. 原始值包装类型
- String
- Number
- Boolean

## 第6章 集合引用类型
### 1. Object
创建对象的方法

1. new Object();
2. 使用字面量创建 {}
### 2. Array
#### 创建数组的方法

1. new Array();
2. 使用字面量创建 []
3. Array.from() 把类数组对象转化成数组
#### 判断数组的方法

1. instanceOf 适用于只有一个全局执行上下文
2. Array.isArray() 适用于所有情况
#### 数组迭代器方法

1. keys() 返回数组的索引
2. values() 返回数组每一项的值
3. entries() 返回数组索引和值的二维数组 如：[[key, val], [key, val], ...]
#### 桟方法

1. push() 将数据推入数组末尾
2. pop() 将数组末尾数据弹出，并把length值-1
#### 队列方法

1. shift() 将数组的第1个数据删除，并返回
2. unshift() 将数据添加到数组头部

> 使用 shift()和 push()，可以把数组当成队列来使用


#### 排序方法

1. sort() 将数组元素顺序排序（改变原数组）
2. reverse() 将数组元素顺序反转（改变原数组）
#### 操作方法

1. concat() 在现有数组全部元素基础上
创建一个新数组，并返回。并且会将二维数组转为一维数组。（不改变原数组）
2. slice()  裁剪指定位置的数组，并返回。（不改变原数组）
3. splice() 对数组进行删除或添加元素的操作，返回的是被删除的片段。（改变原数组）
#### 搜索和位置方法

1. indexOf()
2. lastIndexOf()
3. includes()
4. find(fn) // fn(element, index, array)
5. findIndex(fn) // fn(element, index, array)
#### 迭代方法

1. every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
2. filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
3. forEach()：对数组每一项都运行传入的函数，没有返回值。
4. map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
5. some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。
> 这些方法都不改变原数组。

#### 
#### 归并方法

1. reduce()
2. reduceRight()

#### 定型数组

1. ArrayBuffer: ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。
2. DataView: 允许读写 ArrayBuffer 的视图
### 3. Map
Map 是一种新的集合类型，为JS带来了真正的键/值存储机
制。
#### 基本API

- .size属性
- set()
- get()
- has()
- delete()
- clear()
#### Object与Map对比
|  | 内存占用 | 插入性能
 | 查找速度
 | 删除性能 |
| --- | --- | --- | --- | --- |
| Object | 存储少 | 快 | 更快 | 快 |
| Map | 存储多 | 更快 | 快 | 更快 |


### 4. WeakMap
### 4. WeakMap
WeakMap 中“weak”表示弱映射的键是“弱弱地拿着”的。意思就是，这些键不属于正式的引用，
不会阻止垃圾回收。但要注意的是，弱映射中值的引用可不是“弱弱地拿着”的。只要键存在，键/值
对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。
### 5. Set
Set集合保存的数据会自动去重
#### 基本API

- .size属性
- add()
- has()
- delete()
- clear()
### 6. WeakSet
WeakSet 中“weak”表示弱集合的值是“弱弱地拿着”的。意思就是，这些值不属于正式的引用，
不会阻止垃圾回收。

## 第7章 迭代器与生成器



## 第8章 对象、类与面向对象编程

对象一般有**属性**和**方法**，例如
```javascript
let person = {
  name: 'Alan',
  sayName() {
  	console.log(this.name);
  }
}
```

### 1. 对象属性
属性分两种：

1. 数据属性
2. 访问器属性

#### 1. 数据属性
数据属性包括以下4个特性

1. [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
性，以及是否可以把它改为访问器性。默认情况下，所有直接定义在对象上的属性的这个特
性都是 true
2. [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对
象上的属性的这个特性都是 true
3. [[Writable]]：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的
这个特性都是 true
4. [[Value]]：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性
的默认值为 undefined。

**通过Object.defineProperty()修改属性特性**
要修改属性的默认特性，就必须使用** Object.defineProperty()**方法。这个方法接收 3 个参数：
要给其添加属性的对象、属性的名称和一个描述符对象。最后一个参数，即描述符对象上的属性可以包
含：**configurable**、**enumerable**、**writable** 和 **value**，跟相关特性的名称一一对应。根据要修改
的特性，可以设置其中一个或多个值。比如：
```javascript
let person = {}; 

Object.defineProperty(person, "name", { 
  writable: false, 
  value: "Alan" 
}); 

console.log(person.name); // "Alan" 
person.name = "Greg"; // 写入无效
console.log(person.name); // "Alan" 
```

#### 2. 访问器属性
访问器属性不包含数据值。相反，它们包含一个获取（getter）函数和一个设置（setter）函数，不
过这两个函数不是必需的。在读取访问器属性时，会调用获取函数，这个函数的责任就是返回一个有效
的值。在写入访问器属性时，会调用设置函数并传入新值，这个函数必须决定对数据做出什么修改。访
问器属性有 4 个特性描述它们的行为。

1. [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特
性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性
都是 true。
2. [[Enumerable]]：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对
象上的属性的这个特性都是 true。
3. [[Get]]：获取函数，在读取属性时调用。默认值为 undefined。
4. [[Set]]：设置函数，在写入属性时调用。默认值为 undefined。

```javascript
let person = {
  name: 'Alan',
}

Object.defineProperty(person, "name", { 
  set(newName) {
  	console.log('修改名字了，新的名字是', this.newName);
    this.name = newName;
  },
  get() {
    console.log('获取名字了，返回的名字是', this.name);
  	return this.name;
  }
}); 

console.log(person.name); // 获取名字了，返回的名字是 Alan 
person.name = "AlanLee"; // 修改名字了，新的名字是 AlanLee
```
> 在 ECMAScript 5以前，开发者会使用两个非标准的访问创建访问器属性：__defineGetter__()和__defineSetter__()。


### 2. 定义多个属性
**Object.defineProperties()方法。**
这个方法可以通过多个描述符一次性定义多个属性。
```javascript
let person = {}; 
Object.defineProperties(person, { 
  name_: { 
    value: 'Alan 
  }, 
  age: { 
    value: 24
  }, 
  name: { 
    get() { 
      return this.name_; 
    }, 

    set(newValue) { 
      this.name_ = newValue; 
    } 
  } 
});
```
#### 3. 对象合并
ECMAScript 6 专门为合并对象提供了 Object.assign()方法。这个方法接收一个目标对象和一个
或多个源对象作为参数，然后将每个源对象中可枚举（Object.propertyIsEnumerable()返回 true）
和自有（Object.hasOwnProperty()返回 true）属性复制到目标对象。（浅复制）
```javascript
let dest, src, result; 
/** 
 * 简单复制
 */ 
dest = {}; 
src = { id: 'src' }; 
result = Object.assign(dest, src); 

// Object.assign 修改目标对象
// 也会返回修改后的目标对象
console.log(dest === result); // true 
console.log(dest !== src); // true 
console.log(result); // { id: src } 
console.log(dest); // { id: src }
```

#### 4. 判断对象是否相等
ECMAScript 6 规范新增了 Object.is()，这个方法必须接收两个参数。
```javascript
console.log(Object.is(true, 1)); // false 
console.log(Object.is({}, {})); // false 
console.log(Object.is("2", 2)); // false
```

### 2. 创建对象
#### 1. 创建对象的方式

1. 构造函数模式
2. 原型模式
3. 工厂模式（不常用）

#### 2. 构造函数模式
按照惯例，构造函数名称的首字母都是要大写的，
非构造函数则以小写字母开头。
要创建 Person 的实例，应使用 **new** 操作符。
```javascript
function Person(name, age, job){ 
  this.name = name; 
  this.age = age; 
  this.job = job; 
  this.sayName = function() { 
    console.log(this.name); 
  }; 
} 
let person1 = new Person("Alan", 24, "Software Engineer"); 
let person2 = new Person("Tom", 18, "Student"); 
person1.sayName(); // Alan 
person2.sayName(); // Tom
```
**通过new操作符创建对象的原理**
(1) 在内存中创建一个新对象。
(2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的 prototype 属性。
(3) 构造函数内部的 this 被赋值为这个新对象（即 this 指向新对象）。
(4) 执行构造函数内部的代码（给新对象添加属性）。
(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。
```javascript
function create() {
  let Obj = {};
	Obj.__proto__ = Person.prototype;
  Person.apply(Obj, arguments);
  return Person ? Person : Obj;
}
```

**构造函数的问题**
构造函数的主要问题在于，其定义的方法会在每个实例上
都创建一遍。因此对前面的例子而言，person1 和 person2 都有名为 sayName()的方法，但这两个方
法不是同一个 Function 实例。
```javascript
console.log(person1.sayName == person2.sayName); // false
```


#### 3. 原型模式

```javascript
function Person() {} 
Person.prototype.name = "Alan"; 
Person.prototype.age = 24; 
Person.prototype.job = "Software Engineer"; 
Person.prototype.sayName = function() { 
 console.log(this.name); 
}; 

let person1 = new Person(); 
person1.sayName(); // "Alan" 
let person2 = new Person(); 
person2.sayName(); // "Alan" 
console.log(person1.sayName == person2.sayName); // true
```

#### 4. 工厂模式（不常用）

### 3. 继承
继承有6种方式

1. 原型链继承
2. 盗用构造函数继承
3. 组合继承
4. 原型式继承
5. 寄生式继承
6. 寄生式组合继承

#### 1.原型链继承
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

#### 2.盗用构造函数继承
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

#### 3.组合继承
组合继承（原型链继承 + 构造函数继承）
组合继承（有时候也叫伪经典继承）综合了原型链和盗用构造函数，将两者的优点集中了起来。基
本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
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
一次在是
创建子类原型时调用；
另一次是在子类构造函数中调用。

#### 4.原型式继承
创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返
回这个临时类型的一个实例。本质上，createObj()是对传入的对象执行了一次浅复制。
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

#### 5.寄生式继承
创建一个实现继承的函数，以某种
方式增强对象，然后返回这个对象。
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

#### 6.寄生式组合继承
使用寄生式继承来继承父
类原型，然后将返回的新对象赋值给子类原型。
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







