# 1. EventBus - 事件总线
原理：EventBus保存一个事件集合的对象，该对象的每个属性就是每次添加监听的一个事件，该属性的值是一个数组，这个数组保存的是监听事件回调函数的集合。当on的时候就把事件添加到数组，当emit的时候就执行数组里的所有事件。
**类实现**
```javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, fn) {
    if(this.events[eventName]) {
      this.events[eventName].push(fn);
    } else {
      this.events[eventName] = [fn];
    }
  }
  off(eventName, fn) {
    let tasks = this.events[eventName].slice();
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn);
      if (index >= 0) {
        this.events[eventName].splice(index, 1);
      }
    }
  }
  emit(eventName, once = false, ...args) {
    if (this.events[eventName]) {
      let _tasks = this.events[eventName].slice();
      for(let fn of _tasks) {
        fn(...args);
      }
      if (once) {
        delete this.events[eventName];
      }
    }
  }
}

let eventBus = new EventEmitter();

// 添加监听事件
eventBus.on('greet', (data) => {
  console.log('监听事件', data);
});

// 添加监听事件
eventBus.on('greet', (data) => {
  console.log('监听事件2', data);
});

// 触发事件
eventBus.emit('greet', false, 'AlanLee');

```

**函数实现**
```javascript
function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(eventName, fn) {
  if(this.events[eventName]) {
    this.events[eventName].push(fn);
  }else {
    this.events[eventName] = [fn];
  }
}

EventEmitter.prototype.off = function(eventName, fn) {
  let fnArr = this.events[eventName].slice();
  if(fnArr) {
    let index = fnArr.findIndex(f => f === fn);
    if (index !== -1) {
      this.events[eventName].splice(index, 1);
    }
  }
}

EventEmitter.prototype.emit = function(eventName, once = false, ...args) {
  if(this.events[eventName]) {
    let fnArr = this.events[eventName].slice();
    for(let fn of fnArr) {
      fn(...args);
    }

    if (once) {
      delete this.events[eventName];
    }
  }
}

let evt = new EventEmitter();
evt.on('hello', (data) => {
  console.log('hello', data);
})

evt.emit('hello', false, 'AlanLee')
```

# 2. 防抖
延迟N时间段内只执行1次，重新触发时则重新执行
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>防抖</title>
</head>
<body>
<script>
  // 延迟N时间段内只执行1次，重新触发时则重新执行
  function debounce(fn, delay) {
    let timer = null;
    let _this;
    let _args;
    return function() {
      _this = this;
      _args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(_this, _args);
      }, delay);
    }
  }

  // 测试
  let handler = debounce(function(e) {
    console.log('width', window.innerWidth, 'height', window.innerHeight);
  }, 1000);  // 持续改变窗口大小，触发resize事件，handler持续计算，窗口大小停止改变时，1秒后执行handler
  
  window.addEventListener('resize', handler);
</script>
</body>
</html>
```

持续改变窗口大小，触发resize事件，handler持续计算，窗口大小停止改变时，1秒后执行handler
![防抖.gif](https://cdn.nlark.com/yuque/0/2021/gif/743297/1624173169597-1141f2cc-a9f3-41bb-8aea-4526643d0c89.gif#clientId=u2b652e49-0f3a-4&from=drop&id=ufb8141f5&name=%E9%98%B2%E6%8A%96.gif&originHeight=861&originWidth=1360&originalType=binary&ratio=2&rotation=0&showTitle=false&size=790164&status=done&style=none&taskId=u4e3c528a-8628-4c03-b036-6e80370e6e7&title=)
# 3. 节流
N时间段内执行一次

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>节流</title>
</head>
<body>
<script>
  //节流  N时间段内执行一次
  function throttle(fn, wait) {
    let _this;
    let _args;
    let last = 0;

    return function() {
      _this = this;
      _args = arguments;
      let now = +new Date();
      if(now - last > wait) {
        fn.apply(_this, _args);
        last = now;
      }
    }
  }

  // 测试
  let handler = throttle(() => {
    console.log('width', window.innerWidth, 'height', window.innerHeight);
  }, 1000); // 持续触发handler时，1秒执行一次传入的函数

  window.addEventListener('resize', handler);
</script>
</body>
</html>
```

持续触发handler时，1秒执行一次传入的函数
![节流.gif](https://cdn.nlark.com/yuque/0/2021/gif/743297/1624173424969-17abe1a1-bde7-493b-aaa0-148323908f7c.gif#clientId=u2b652e49-0f3a-4&from=drop&id=uf93b7c64&name=%E8%8A%82%E6%B5%81.gif&originHeight=861&originWidth=1360&originalType=binary&ratio=2&rotation=0&showTitle=false&size=836308&status=done&style=none&taskId=u1310e8b2-9c16-4e78-b642-2bd500d57ee&title=)


# 4. 浅拷贝
拷贝对象的第1层属性
```javascript
let person = {
  name: "Alan",
  age: 24
}

// 浅拷贝方式1
function shallowCopy1(obj) {
  return Object.assign({}, obj);
}

// 浅拷贝方式2
function shallowCopy2(obj) {
  return {...person};
}

// 浅拷贝方式3
function shallowCopy3(obj) {
  if (typeof obj !== 'object') return null;
  let copyObj = {};
  for (const key in obj) {
    if(Object.hasOwnProperty.call(obj, key)) {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

console.log(person);  // {name: "Alan", age: 24}
console.log(shallowCopy1(person)); // {name: "Alan", age: 24}
console.log(shallowCopy2(person)); // {name: "Alan", age: 24}
console.log(shallowCopy3(person)); // {name: "Alan", age: 24}
```

# 5. 深拷贝
拷贝对象的所有层的属性
```javascript
let res = {
  code: 1,
  msg: "ok",
  data: {
    name: "Alan",
    age: 24,
    phone: {
      brand: "xiaomi",
      model: "Redmi K30 Pro",
      camera: {
        num: 4,
        brand: "SONY"
      }
    }
  }
}

// 深拷贝
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return null;
  let copyObj = obj instanceof Array ? [] : {};
  for(const key in obj) {
    if(Object.hasOwnProperty.call(obj, key)) {
      if (typeof key !== 'object') {
        copyObj[key] = obj[key];
      }else {
        copyObj[key] = deepCopy(key);
      }
    }
  }
  return copyObj;
}

console.log(deepCopy(res));
// {
//   code: 1
//   data: {name: "Alan", age: 24, phone: {…}}
//   msg: "ok"
// }

console.log(deepCopy([1,res]));
// Array(2)
//   0: 1
//   1: {code: 1, msg: "ok", data: {…}}
//   length: 2
```


# 6. call
call改变this的指向，接收参数列表

```javascript
console.log('-------------------- 普通函数，打印this看看结果 --------------------')

// 普通函数，打印this看看结果
function hello(age) {
  console.log('this->', this); 
  console.log('Hello, my first name is', this.firstName, 'i am ', age, 'years old'); 
}

// 打印this看看结果
hello(); // Hello, my firstName is undefined     (非严格模式下，this指向window，firstName为undefined)

// 待绑定this用的对象
function Person(firstName) {
  this.firstName = firstName;
}


console.log('-------------------- call的使用 --------------------')

// call的使用
let tom = new Person('Tom');
hello.call(tom, 18); 
// this指向Person


// 进入正题*******************************************
// 手写实现call
Function.prototype.myCall = function(context) {
  context = context || window;
  context.fn = this;
  let args = Array.from(arguments).slice(1);
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

console.log('-------------------- 测试myCall --------------------')

// 测试myCall
let alan = new Person('Alan');
hello.myCall(alan, 18);
// this-> Person {firstName: "Alan", fn: ƒ}
// Hello, my first name is Alan i am  18 years old
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1624327875185-e651bfaa-37ef-4cdc-a416-5eb26a30ed9b.png#clientId=u76313a81-282e-4&from=paste&height=234&id=uc0824b16&name=image.png&originHeight=234&originWidth=925&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23920&status=done&style=none&taskId=u33008894-40b0-4cd9-9d0a-1c03e8ff595&title=&width=925)

# 7. apply
改变this指向，接收参数数组
```javascript
console.log('-------------------- 普通函数，打印this看看结果 --------------------')

// 普通函数，打印this看看结果
function greet(greetingWord = 'hello', age = 0) {
  console.log('this->', this); 
  console.log(`${greetingWord}, my first name is ${this.firstName}, i am ${age} years old`); 
}

// 打印this看看结果
greet(); // hello, my first name is undefined, i am 0 years old     (非严格模式下，this指向window，firstName为undefined)

// 待绑定this用的对象
function Person(firstName) {
  this.firstName = firstName;
}


console.log('-------------------- apply的使用 --------------------')

// call的使用
let tom = new Person('Tom');
greet.apply(tom, ['Hello', 18]); 
// this指向Person


// 进入正题*******************************************
// 手写实现apply
Function.prototype.myApply = function(context, args) {
  context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

console.log('-------------------- 测试myApply --------------------')

// 测试myApply
let alan = new Person('Alan');
greet.myApply(alan, ['Hello', 18]);
// this-> Person {firstName: "Alan", fn: ƒ}
// Hello, my first name is Alan i am  18 years old
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1624511253736-902c4932-071e-42fe-95ae-b0909ba92a4c.png#clientId=u1f8ca255-0f67-4&from=paste&height=249&id=uca6b70e2&name=image.png&originHeight=249&originWidth=716&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23616&status=done&style=none&taskId=ucbc68c06-f38b-401b-84ba-941f092af3e&title=&width=716)

# 8. bind
改变this指向，返回一个函数

## 9. AJAX
```javascript
const xhr = new XMLHttpRequest();
xhr.onload = (res) => {
  console.log('xhr.onload', res);
}
xhr.onerror = (err) => {
  console.log('xhr.onerror', err);
}
xhr.open("GET", "https://www.baidu.com");
xhr.send();
```

## 10. 函数柯里化
```javascript
function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function () {
    let subArgs = [...args.slice(), ...arguments];

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}


// 测试
function sum(a, b, c) {
  return a + b + c;
}

let currySum = curry(sum);
console.log(currySum(1,2,3)); // 6
console.log(currySum(1,2)(3)); // 6
console.log(currySum(1)(2,3)); // 6
console.log(currySum(1)(2)(3)); // 6
```
