1. 直接把provide的key挂在了vue实例vm的_provide属性上
```javascript
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}
```

2. 对inject的对象的每一个属性定义为响应式属性
```javascript
export function initInjections (vm: Component) {
  const result = resolveInject(vm.$options.inject, vm) // 返回一个对象
  if (result) {
    toggleObserving(false)
    Object.keys(result).forEach(key => {
      defineReactive(vm, key, result[key]) // 定义为响应式属性
    })
    toggleObserving(true)
  }
}
```
