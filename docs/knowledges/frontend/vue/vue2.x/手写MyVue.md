
HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <div>{{hello}}</div>
        <div>{{count}}</div>
        <div>
            <p>{{count}}</p>
        </div>
        <button onclick="addCount()">+ 1</button>
    </div>
    <script src="./my-vue.js"></script>
</body>
</html>
```

js
```javascript
function compile(node, vm) {
  if(node.nodeType === 1) {
    let reg = /\{\{(.*)\}\}/;
    let textContent = node.textContent.trim();
    
    if(node.children.length > 0) {
      Array.from(node.children).forEach(item => {
        compile(item, vm);
      })
    }
    if(textContent && reg.test(textContent)) {
      // 替换变量
      let key = reg.exec(textContent)[1];
      new Watcher(vm, node, key);
      node.innerHTML = vm.data[key];
    }
  }
}

function nodeToFragment(node, vm) {
  let flagment = document.createDocumentFragment();
  let child;
  while(child = node.firstChild) {
    compile(child, vm);
    flagment.appendChild(child);
  }
  return flagment;
}

function observe(data = {}) {
  Object.keys(data).forEach((prop) => {
    defineReactive(data, prop, data[prop]);
  });
}

function defineReactive(obj, key, val) {
  let dep = new Dep();
  Object.defineProperty(obj, key, {
    get: () => {
      dep.deppend(Dep.target);
      return val;
    },
    set: (newVal) => {
      if(newVal === val) return val;
      val = newVal;
      dep.notify();
      return val;
    },
  });
}

function Dep() {
  this.subs = [];
  this.target = null;
}

Dep.prototype = {
  deppend(sub) {
    if(!this.subs.includes(sub)) {
      this.subs.push(sub);
    }
  },
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }
};

function Watcher(vm, node, prop) {
  Dep.target = this;
  this.vm = vm;
  this.node = node;
  this.prop = prop;
  // 更新视图
  this.update = () => {
    node.textContent = this.vm.data[this.prop];
  }
}

function Vue(options = {}) {
  this.data = options.data;
  this.id = options.el;
  observe(this.data);
  let app = document.getElementById(this.id);
  let dom = nodeToFragment(app, this);
  console.log({dom});
  app.appendChild(dom);
}

let vm = new Vue({
  data: {
    hello: 'Hello My Vue',
    count: 0
  },
  el: 'app'
})

function addCount() {
  vm.data['count'] = vm.data['count'] + 1;
}

```
