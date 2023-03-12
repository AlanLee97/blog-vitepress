# 前言
最近工作中有个需要拖动元素的需求，而且只能通过原生来实现，需求完成之后，我把这个拖动的逻辑抽离出来。
# 拖动模型示例
![拖动模型.gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1667698967145-6341c3a8-58d6-4225-8cd1-7c02178cf863.gif#averageHue=%23d9d8d8&clientId=u4ef5f103-1e0f-4&from=paste&height=883&id=ue204ed0f&name=%E6%8B%96%E5%8A%A8%E6%A8%A1%E5%9E%8B.gif&originHeight=883&originWidth=1344&originalType=binary&ratio=1&rotation=0&showTitle=false&size=481399&status=done&style=none&taskId=u02d99430-12c9-4114-ae9f-fc5605ed464&title=&width=1344)

# 思路
## 主要思路
计算到鼠标移动的距离（从0开始增加），然后把移动的距离设置到元素的top,left属性（或transform: translate(x,y)）上。
## 具体思路

1. 监听`目标元素`上的鼠标按下事件`mousedown`
   1. 标记鼠标按下状态`isMousedown=true`
   2. 记录开始x，y轴的起始位置`startX`，`startY`
   3. 将x，y轴的移动距离清零
2. 监听`document`上鼠标移动事件`mousemove`，记录鼠标移动的距离
   1. 计算移动距离，`移动距离 = 鼠标当前x，y坐标 - 鼠标起始x，y坐标`
      1. 例如`moveInsX = pageX - startX`，`moveInsY = pageY - startY`
3. 监听`document`上鼠标松开事件`mouseup`，标记鼠标松开状态`isMousedown=false`
   1. 标记鼠标松开状态`isMousedown=false`
   2. 将开始x，y轴的起始位置清零`startX = 0`，`startY = 0`
4. 上面的步骤可以获取到鼠标移动的x，y的距离`moveInsX`，`moveInsY`（从0开始增加）
5. 将鼠标移动的`moveInsX`，`moveInsY`加到`目标元素`的top,left属性（或transform: translate(x,y)）上
6. 提供一个销毁方法，移除所有监听事件

# 代码设计
## 计算鼠标的移动距离（从0开始增加）
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
  startX = 0 // 按下的鼠标x值
  startY = 0 // 按下的鼠标y值
  moveInsX = 0 // 移动的x的值（从0开始累加）
  moveInsY = 0 // 移动的y的值（从0开始累加）
  isMousedown = false // 是否按下鼠标

  constructor() {
    this._initEvent()
  }

  // 鼠标移动事件
  _mousemoveHandler = (e) => {
    if (this.isMousedown) {
      // 往左
      if (e.pageX < this.startX) {
        this.moveInsX = e.pageX - this.startX
      }
      // 往右
      if (e.pageX > this.startX) {
        this.moveInsX = e.pageX - this.startX
      }
      // 往上
      if (e.pageY < this.startY) {
        this.moveInsY = e.pageY - this.startY
      }
      // 往下
      if (e.pageY > this.startY) {
        this.moveInsY = e.pageY - this.startY
      }
      console.log('moveInsX', this.moveInsX, 'moveInsY', this.moveInsY)
    }
  }

  // 鼠标按下事件
  _mousedownHandler = (e) => {
    this.startX = e.pageX // 记录鼠标起始位置x
    this.startY = e.pageY // 记录鼠标起始位置y
    this.moveInsX = 0 // 将x轴移动距离清零
    this.moveInsY = 0 // 将y轴移动距离清零
    this.isMousedown = true // 标记鼠标按下状态
  }

  // 鼠标松开事件
  _mouseupHandler = (e) => {
    this.isMousedown = false // 标记鼠标松开状态
    this.startX = 0 // 将x轴鼠标起始位置清零
    this.startY = 0 // 将y轴鼠标起始位置清零
  }

  // 初始化监听事件
  _initEvent() {
    document.addEventListener('mousemove', this._mousemoveHandler)
    document.addEventListener('mousedown', this._mousedownHandler)
    document.addEventListener('mouseup', this._mouseupHandler)
  }
}

const moveModel = new DragMoveModel()
```
先看效果：
![move.gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668155525765-7f9a7739-1ef4-4fc3-b5b9-5a16db2b03ae.gif#averageHue=%23fefefe&clientId=ue47cc798-2caf-4&from=paste&height=618&id=u5386932b&name=move.gif&originHeight=618&originWidth=1125&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1522511&status=done&style=none&taskId=u21fd99eb-f3ad-4d9f-a900-4ed50884298&title=&width=1125)

主要逻辑：

1. 监听`document`上的鼠标按下事件`mousedown`
   1. 标记鼠标按下状态`isMousedown=true`
   2. 记录开始x，y轴的起始位置`startX`，`startY`
   3. 将x，y轴的移动距离清零
2. 监听`document`上鼠标移动事件`mousemove`，记录鼠标移动的距离
   1. 计算移动距离，`移动距离 = 鼠标当前x，y坐标 - 鼠标起始x，y坐标`
      1. 例如`moveInsX = pageX - startX`，`moveInsY = pageY - startY`
3. 监听`document`上鼠标松开事件`mouseup`，标记鼠标松开状态`isMousedown=false`
   1. 标记鼠标松开状态`isMousedown=false`
   2. 将开始x，y轴的起始位置清零`startX = 0`，`startY = 0`

代码链接：[dragmove-demo-step-1](https://code.juejin.cn/pen/7164689967552151589?embed=true)
现在我们已经获取到鼠标移动的x，y的距离
接下来就是把这个距离加到目标移动元素上

## 把移动距离加到目标元素
先创建个div元素
```html
<div id="rect-1" class="rect">1</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .rect {
    width: 50px;
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    user-select: none;
    position: relative;
  }

  #rect-1 {
    background-color: red;
  }
</style>
```

接下来给div元素实现可移动功能
继续编写DragMoveModel类
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
	// ...
  targetEl = null // 目标元素

  constructor(config = {}) {
    this._initConfig(config)
    this._initEvent()
  }

  // ...

  _initConfig(config) {
    this.targetEl = config.targetEl || document.body
  }

  // 初始化监听事件
  _initEvent() {
    document.addEventListener('mousemove', this._mousemoveHandler)
    this.targetEl && this.targetEl.addEventListener('mousedown', this._mousedownHandler)
    document.addEventListener('mouseup', this._mouseupHandler)
  }
}

const targetEl = document.getElementById('rect-1')
const moveModel = new DragMoveModel({targetEl})
```
这里的改动

1. 增加了一个`targetEl`属性
2. 在构造函数中增加一个`config`对象参数，用于初始化配置
3. 把`mousedown`的监听事件绑定到`targetEl`中
4. 然后就可以实现按住目标元素，再移动鼠标计算移动距离

![move (1).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668161543005-0d247c3c-1877-4d55-a7a4-9e4493c38b41.gif#averageHue=%23fefdfd&clientId=ua38be8ca-fd74-4&from=paste&height=619&id=u449cb0e3&name=move%20%281%29.gif&originHeight=619&originWidth=1125&originalType=binary&ratio=1&rotation=0&showTitle=false&size=772988&status=done&style=none&taskId=u1cefa201-a10b-495e-9722-b986f72f637&title=&width=1125)

代码连接：[dragmove-demo-step-3](https://code.juejin.cn/pen/7164700020707426335)
接下来，要把移动距离设置到目标元素上，实现移动。

## 实现元素移动
### 方式一：使用transform的方式
#### 实现移动
这里以transform: translate的方式来实现
在`mousemove`事件中给目标元素加上`transform: translate`
```javascript
// translate移动元素
_translateMoveEl() {
  if (this.targetEl) {
    this.targetEl.style.transform = `translate(${this.moveInsX}px, ${this.moveInsY}px)`
  }
}

// 鼠标移动事件
_mousemoveHandler = (e) => {
  if (this.isMousedown) {
    // ...
    // ...
    this._translateMoveEl()
  }
}
```
![dragmove.gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668261260304-c8df0f97-ace3-4676-a0ab-1032728e8324.gif#averageHue=%23fbf9f8&clientId=u885bf7f5-99c1-4&from=paste&height=757&id=ud5e0e3df&name=dragmove.gif&originHeight=757&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=521927&status=done&style=none&taskId=u2fc6bc18-1ef9-4529-88f7-a2c5c16ec8c&title=&width=1260)

但是这里有个问题，第二次点击拖动的时候，目标元素会跑回原点
![dragmove (1).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668261811035-92b3b6a1-1836-48b3-ae9d-840a3df8786c.gif#averageHue=%23faf8f7&clientId=u885bf7f5-99c1-4&from=paste&height=757&id=u7acaf881&name=dragmove%20%281%29.gif&originHeight=757&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=238118&status=done&style=none&taskId=u3dba6153-2150-4893-854e-f123f13b07d&title=&width=1260)
需要处理一下，先分析一下原因，主要是因为我们计算的是鼠标移动的距离（从0开始计算），
所以直接取到`moveInsX`和`moveInsY`设置到`translate`是有问题的。
那么我们需要做什么呢？需要做的是

1. 鼠标按下（`mousedown`）的时候，需要先计算目标元素已有的`translate`的值`targetElTx`和`targetElTy`
2. 再在鼠标移动（`mousemove`）的时候，设置`translate`的值为`targetElTx + moveInsX`和`targetElTy + moveInsY`

代码如下：
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
	// ...
  targetElTx = 0 // 目标元素的translate的x的值 新增这个属性
  targetElTy = 0 // 目标元素的translate的y的值 新增这个属性

  // ...

  // 工具函数：获取style的transform的属性值translate
  _getStyleTransformProp(transform = '', prop = 'translate') {
    transform = transform.replaceAll(', ', ',').trim()
    let strArr = transform.split(' ')
    let res = ''
    strArr.forEach(str => {
      if (str.includes(prop)) {
        res = str
      }
    })
    return res
  }

  // 工具函数：计算元素的translate的值
  _calcTargetTranlate = () => {
    if (this.targetEl) {
      let translate = this._getStyleTransformProp(this.targetEl.style.transform, 'translate')
      if (translate.includes('translate')) {
        let reg = /\((.*)\)/g
        let res = reg.exec(translate)
        if (res) {
          translate = res[1].replaceAll(', ', ',')
        }
        let translateArr = translate.replace('(', '').replace(')', '').split(',')
        this.targetElTx = +translateArr[0].replace('px', '') || 0
        this.targetElTy = +translateArr[1].replace('px', '') || 0
      }
    }
  }

  // translate移动元素
  _translateMoveEl() {
    if (this.targetEl) {
      let tx = this.targetElTx + this.moveInsX // 重新计算x
      let ty = this.targetElTy + this.moveInsY // 重新计算y
      this.targetEl.style.transform = `translate(${tx}px, ${ty}px)`
    }
  }


  // 鼠标移动事件
  _mousemoveHandler = (e) => {
    if (this.isMousedown) {
      // ...
      this._translateMoveEl()
    }
  }

  // 鼠标按下事件
  _mousedownHandler = (e) => {
    // ...

    // 计算目标元素的translate的值
    this._calcTargetTranlate()
  }
}

```
这里主要的逻辑是

1. 鼠标按下时调用`_calcTargetTranlate()`计算目标元素的旧的translate的值`targetElTx`和`targetElTy`
   1. 这里写了两个工具函数
      1. 工具函数`_calcTargetTranlate()`：计算元素的translate的值
      2. 工具函数`_getStyleTransformProp()`：获取style的transform的属性值translate
2. 在`_translateMoveEl()`里重新计算translate的x和y值
   1. tx = targetElTx + moveInsX
   2. ty = targetElTy + moveInsY

然后看下效果：
![dragmove (2).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668264597577-7e87a322-8a5c-405e-8fc5-4906ebe205d0.gif#averageHue=%23faf8f7&clientId=u885bf7f5-99c1-4&from=paste&height=757&id=u2b6130db&name=dragmove%20%282%29.gif&originHeight=757&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=355785&status=done&style=none&taskId=uecc33d81-5271-44ab-8cc1-189cf762ff9&title=&width=1260)

##### 优化拖动速度
然后这里可以做个优化，开启`translate`的第3个属性，再给目标元素的style加上`will-chage`属性

- transform: translate3d(x, y, z)
- will-change: transform
> CSS 属性[ will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change) 为 web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。
> ——MDN

优化后的代码
```javascript
this.targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`
this.targetEl.style['will-change'] = 'transform'
```


##### 优化设置transform属性
上面设置transform的时候我们都是直接赋值的，如果transform有其他属性的时候，例如scale，这样会丢掉原本的属性，所以需要处理这种情况。
```javascript
// 工具函数：设置transform属性
_setTransformProp(transform = '', prop = '', value = '') {
  let reg = new RegExp(`${prop}\((.*)\)`, 'g')
  if(transform.includes(prop)) {
    let propList = transform.replaceAll(', ', ',').trim().split(' ')
    let newPropList = propList.map(item => item.replaceAll(reg, `${prop}(${value})`))
    transform = newPropList.join(' ')
  } else {
    transform = `${prop}(${value}) ` + transform
  }
  return transform
}

// translate移动元素
_translateMoveEl() {
  if (this.targetEl) {
    // ...

    let transform = this.targetEl.style.transform
    transform = transform ? this._setTransformProp(transform, 'translate3d', `${tx}px, ${ty}px, 0px`) : `translate3d(${tx}px, ${ty}px, 0px)`
    this.targetEl.style.transform = transform
  }
}
```
新增工具函数`_setTransformProp()`用于设置transform属性，这样就可以保留原来的属性了

相关代码：[dragmove-demo-step-4](https://code.juejin.cn/pen/7165138672944644109)

#### 限制移动边界
前面实现可移动了，但是元素可以移出浏览器窗口，因此我们可以加个限制边界的功能
代码如下：
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
	// ...
  initTargetElTop = 0 // 目标元素的初始top值
  initTargetElLeft = 0 // 目标元素的初始left值
  limitMoveBorder = false // 限制移动边界

  constructor(config = {}) {
    // ...
    this._initConfig(config)
    this._initTragetElInfo()
  }

  // 初始化配置
  _initConfig(config) {
    // ...
    this.limitMoveBorder = !!config.limitMoveBorder
  }

  // 初始化目标元素相关信息
  _initTragetElInfo() {
    if (this.targetEl) {
      const { top, left } = this.targetEl.getBoundingClientRect()
      this.initTargetElTop = top
      this.initTargetElLeft = left
    }
  }

  // translate移动元素
  _translateMoveEl() {
    if (this.targetEl) {
      let tx = this.targetElTx + this.moveInsX
      let ty = this.targetElTy + this.moveInsY

      // 工具函数：限制移动边界
      const limitBorder = () => {
        const { width, height } = this.targetEl.getBoundingClientRect()
        if (tx + width > window.innerWidth) { // 限制右边界
          tx = window.innerWidth - width - this.initTargetElLeft // 窗口宽度-元素宽度-元素初始时的左偏移距离
        }
        if (tx < -this.initTargetElLeft) { // 限制左边界
          tx = -this.initTargetElLeft
        }
        if (ty + height > window.innerHeight) { // 限制下边界
          ty = window.innerHeight - height - this.initTargetElTop
        }
        if (ty < -this.initTargetElTop) { // 限制上边界
          ty = -this.initTargetElTop
        }
      }

      if (this.limitMoveBorder) { // 限制移动边界
        limitBorder()
      }

      this.targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)` // 优化移动速度
      this.targetEl.style['will-change'] = 'transform' // 优化移动速度
    }
  }

	// ...
}

const targetEl = document.getElementById('rect-1')
const moveModel = new DragMoveModel({ targetEl: targetEl, limitMoveBorder: true })
```
这里的主要逻辑：

1. 新增`limitMoveBorder`配置，用于开启移动边界限制
2. 计算初始化目标元素相关信息，初始时top偏移量`initTargetElTop`和left偏移量`initTargetElLeft`
3. 在`_translateMoveEl()`增加一个工具函数`limitBorder()`，限制四个边界
   1. `tx + width + initTargetElLeft > window.innerWidth`表示超出右边界，将tx赋值为`window.innerWidth - width - initTargetElLeft`
   2. `tx < -initTargetElLeft`表示超出左边界，将tx赋值为`-initTargetElLeft`
   3. `ty + height + initTargetElTop > window.innerHeight`表示超出下边界，将ty赋值为`window.innerHeight - height - initTargetElTop`
   4. `ty < -initTargetElTop`表示超出上边界，将ty赋值为`-initTargetElTop`
4. 如果`limitMoveBorder=true`则执行工具函数`limitBorder()`

上面的逻辑挺饶的，需要慢慢理解
##### 理解右边界限制
为了好理解，我调整一下目标元素的初始位置
```css
#rect-1 {
  background-color: red;
  position: absolute;
  top: 100px;
  left: 100px;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1668272492228-773e3d01-7789-449a-b8d1-e85c8ab9b6c6.png#averageHue=%23f9f8f8&clientId=u0dba61d4-48c6-4&from=paste&height=666&id=u7a074797&name=image.png&originHeight=666&originWidth=966&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49140&status=done&style=none&taskId=u02cfc3d9-d41a-458a-bc39-2da02eedb6c&title=&width=966)
接下来将元素移动到最右边
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1668272411994-02cf695d-a746-445c-81c7-291ccf57f27c.png#averageHue=%23f7f5f5&clientId=u0dba61d4-48c6-4&from=paste&height=666&id=ufc99551a&name=image.png&originHeight=666&originWidth=966&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68612&status=done&style=none&taskId=u7db54ae8-2631-40f3-a114-476b5309f2d&title=&width=966)
所以可以得出结论，`tx + width + initTargetElLeft > window.innerWidth`表示元素超出右边界，此时设置元素的宽度
```javascript
// tx = 窗口宽度-元素宽度-元素初始时的左偏移距离
tx = window.innerWidth - width - this.initTargetElLeft
```
> 下边界处理方式同理


##### 理解左边界限制
将元素移动到最左边
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1668273247896-02213380-09cb-4d9a-8a66-fae864557b71.png#averageHue=%23f7f6f5&clientId=u0dba61d4-48c6-4&from=paste&height=666&id=uc6d57991&name=image.png&originHeight=666&originWidth=966&originalType=binary&ratio=1&rotation=0&showTitle=false&size=67240&status=done&style=none&taskId=u0950951e-607d-4201-8166-d4d63d6395c&title=&width=966)
此时`tx = -100px`，`initTargetElLeft = 100px`，所以可以得出结论，如果tx再小，将其设置为`-initTargetElLeft`
```javascript
// 取初始时left的负值
tx = -this.initTargetElLeft
```
> 上边界计算同理

看效果
![dragmove (3).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668269694560-a64fd96e-f9d5-437d-b4c5-6fb3224d5036.gif#averageHue=%23abaca8&clientId=u0dba61d4-48c6-4&from=paste&height=757&id=u25d9f371&name=dragmove%20%283%29.gif&originHeight=757&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=943856&status=done&style=none&taskId=u96dfc44b-e45c-42d4-901f-050bdb82041&title=&width=1260)

相关代码：[dragmove-demo-step-5](https://code.juejin.cn/pen/7165164257204502559)
### 方式二：top，left的方式
#### 实现移动
改动代码如下：
```html
<div id="rect-2" class="rect">2</div>
```
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
  // ...
  moveMode = 'transform' // transform为transform-translate方式移动，position为top,left方式移动

  // ...

  // 使用top，left的方式移动元素
  _topLeftMoveTargetEl = () => {
    let left = this.moveInsX + this.initTargetElLeft
    let top = this.moveInsY + this.initTargetElTop

    this.targetEl.style.left = left + 'px'
    this.targetEl.style.top = top + 'px'
  }

  // 鼠标移动事件
  _mousemoveHandler = (e) => {
    if (this.isMousedown) {
      // ...
      
      if(this.moveMode === 'position') {
        this._topLeftMoveTargetEl()
      }else {
        this._translateMoveEl()
      }
    }
  }

  // ...
}

// const targetEl = document.getElementById('rect-1')
// const moveModel = new DragMoveModel({ targetEl: targetEl, limitMoveBorder: true })

const targetEl2 = document.getElementById('rect-2')
const moveModel2 = new DragMoveModel({ targetEl: targetEl2, moveMode: 'position', limitMoveBorder: true  })
```

这里的逻辑如下：

1. 新增一个`moveMode`配置标记，transform为transform-translate方式移动，position为top,left方式移动
2. 新增一个方法`_topLeftMoveTargetEl()`，计算新的top，left
   1. `left = moveInsX + initTargetElLeft`
   2. `top = moveInsY + initTargetElTop`
3. 再把新的left，top设置到目标元素style上
4. 在鼠标移动事件`_mousemoveHandler()`增加判断，调用哪个移动方式

![dragmove (4).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668274440545-97888ca0-9000-4c4d-94d1-0365bc5bb21a.gif#averageHue=%23fafafa&clientId=u26839209-cb85-4&from=paste&height=751&id=uc449e82f&name=dragmove%20%284%29.gif&originHeight=751&originWidth=1261&originalType=binary&ratio=1&rotation=0&showTitle=false&size=633127&status=done&style=none&taskId=u295d0c11-5abe-4107-8839-301753e6106&title=&width=1261)
这里同样会有第2次点击拖动时，元素回到原点的问题
![dragmove (5).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668274754241-7a824f67-496a-4b2a-851c-174ec19b9e82.gif#averageHue=%23fafafa&clientId=u26839209-cb85-4&from=paste&height=751&id=ua8986943&name=dragmove%20%285%29.gif&originHeight=751&originWidth=1261&originalType=binary&ratio=1&rotation=0&showTitle=false&size=635987&status=done&style=none&taskId=u16a7647c-c81c-4e8b-929f-fb2e7e6922b&title=&width=1261)
解决方式是，鼠标按下时，重新计算一下目标元素的信息
```javascript
// 鼠标按下事件
_mousedownHandler = (e) => {
  // ...

  if (this.moveMode === 'position') {
    this._initTragetElInfo()
  }
}
```
![dragmove (6).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668275271912-18821e69-32bf-4dea-a8c6-1c84841739b8.gif#averageHue=%23fafafa&clientId=u26839209-cb85-4&from=paste&height=751&id=u86329831&name=dragmove%20%286%29.gif&originHeight=751&originWidth=1261&originalType=binary&ratio=1&rotation=0&showTitle=false&size=700246&status=done&style=none&taskId=u4ed32556-b6a8-42e9-9b90-dd5b866d36b&title=&width=1261)
#### 限制移动边界
主要改造`_topLeftMoveTargetEl()`方法
```javascript
// 使用top，left的方式移动元素
_topLeftMoveTargetEl = () => {
  let left = this.moveInsX + this.initTargetElLeft
  let top = this.moveInsY + this.initTargetElTop

  // 工具函数：限制移动边界
  const limitBorder = () => {
    const { width, height } = this.targetEl.getBoundingClientRect()

    if (top < 0) {
      top = 0
    }
    if (top > (window.innerHeight - height)) {
      top = window.innerHeight - height
    }
    if (left < 0) {
      left = 0
    }
    if (left > (window.innerWidth - width)) {
      left = window.innerWidth - width
    }
  }
  if (this.limitMoveBorder) {
    limitBorder()
  }
  this.targetEl.style.left = left + 'px'
  this.targetEl.style.top = top + 'px'
}
```
![dragmove (7).gif](https://cdn.nlark.com/yuque/0/2022/gif/743297/1668275567843-94c1d50b-39e6-4716-9eec-ae8a758fdd07.gif#averageHue=%23cebfc8&clientId=u26839209-cb85-4&from=paste&height=751&id=ua2a8790a&name=dragmove%20%287%29.gif&originHeight=751&originWidth=1261&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1055672&status=done&style=none&taskId=ud9024a36-0076-4ea2-99e8-48f319fe9ab&title=&width=1261)

## 兼容H5
把监听事件替换为touch相关的事件即可
```javascript
// 初始化监听事件
_initEvent() {
  const moveEvent = this.h5 ? 'touchmove' : 'mousemove'
  const downEvent = this.h5 ?  'touchstart' : 'mousedown'
  const upEvent = this.h5 ? 'touchend' : 'mouseup'
  document.addEventListener(moveEvent, this._mousemoveHandler)
  this.targetEl && this.targetEl.addEventListener(downEvent, this._mousedownHandler)
  document.addEventListener(upEvent, this._mouseupHandler)
}
```

## 提供销毁方法
提供一个销毁方法，在元素使用完之后，移除监听事件
```javascript
// 销毁方法
destroy() {
  this.targetEl && this.targetEl.removeEventListener('mousedown', this._mousedownHandler)
  this.document.removeEventListener('mousemove', this._mousemoveHandler)
  this.document.removeEventListener('mouseup', this._mouseupHandler)
}
```
## 其他用途
这个类可以获取到鼠标移动的距离，然后我们可以将这个移动距离暴露出去，可以实现其他用途
通过`callback`将获取到的移动距离暴露出去
```javascript
/**
 * 拖动模型
 * */
class DragMoveModel {
  // ...
  callback = null // 回调函数，用于获取鼠标移动距离

  constructor(config = {}, callback = () => {}) {
  	// ...
    this.callback = callback
  }

  // 鼠标移动事件
  _mousemoveHandler = (e) => {
    if (this.isMousedown) {
      // ...
      // 计算第三边的长度（勾股定理 a^2 + b^2 = c^2）
      let c = Math.round(Math.pow((this.moveInsX * this.moveInsX + this.moveInsY * this.moveInsY), 0.5))
      this.callback(this.moveInsX, this.moveInsY, c)
    }
  }

  // ...
}

```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1668276890312-adc8a5dc-73f0-400d-b682-763122fa2b6c.png#averageHue=%23f6f5f4&clientId=u78359c4e-3a41-4&from=paste&height=627&id=uafa64016&name=image.png&originHeight=627&originWidth=1011&originalType=binary&ratio=1&rotation=0&showTitle=false&size=64903&status=done&style=none&taskId=u3cfdd478-7023-4e06-afe8-d461934436e&title=&width=1011)
计算到第三边的距离可以用于缩放
# 完整代码
链接：[dragmove-demo](https://code.juejin.cn/pen/7165164257204502559)
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      padding: 0;
      margin: 0;
    }

    .rect {
      width: 50px;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;
      user-select: none;
      position: relative;
    }

    #rect-1 {
      background-color: red;
    }

    #rect-2 {
      background-color: black;
      position: absolute;
      top: 100px;
      left: 100px;
    }
  </style>
</head>

<body>
  <div id="rect-1" class="rect">1</div>
  <div id="rect-2" class="rect">2</div>
  <script>
    /**
     * 拖动模型
     * */
    class DragMoveModel {
      startX = 0 // 按下的鼠标x值
      startY = 0 // 按下的鼠标y值
      moveInsX = 0 // 移动的x的值（从0开始累加）
      moveInsY = 0 // 移动的y的值（从0开始累加）
      isMousedown = false // 是否按下鼠标
      targetEl = null // 目标元素
      targetElTx = 0 // 目标元素的translate的x的值
      targetElTy = 0 // 目标元素的translate的y的值
      initTargetElTop = 0 // 目标元素的初始top值
      initTargetElLeft = 0 // 目标元素的初始left值
      limitMoveBorder = false // 限制移动边界
      moveMode = 'transform' // transform为transform-translate方式移动，position为top,left方式移动
      callback = null // 回调函数，用于获取鼠标移动距离
      h5 = false // 是否用于h5

      constructor(config = {}, callback = () => {}) {
        this._initConfig(config)
        this._initEvent()
        this._initTragetElInfo()
        this.callback = callback
      }

      // 初始化配置
      _initConfig(config) {
        this.targetEl = config.targetEl || document.body
        this.limitMoveBorder = !!config.limitMoveBorder
        this.moveMode = config.moveMode || 'transform'
        this.h5 = !!config.h5
      }

      // 初始化目标元素相关信息
      _initTragetElInfo() {
        if (this.targetEl) {
          const { top, left } = this.targetEl.getBoundingClientRect()
          this.initTargetElTop = top
          this.initTargetElLeft = left
          this.targetEl.style['will-change'] = this.moveMode === 'transform' ? 'transform' : 'left, top'
        }
      }

      // 获取style的transform的属性值translate
      _getStyleTransformProp(transform = '', prop = 'scale') {
        transform = transform.replaceAll(', ', ',').trim()
        let strArr = transform.split(' ')
        let res = ''
        strArr.forEach(str => {
          if (str.includes(prop)) {
            res = str
          }
        })
        return res
      }

      // 计算元素的translate的值
      _calcTargetTranlate = () => {
        if (this.targetEl) {
          let translate = this._getStyleTransformProp(this.targetEl.style.transform, 'translate3d')
          if (translate.includes('translate3d')) {
            let reg = /\((.*)\)/g
            let res = reg.exec(translate)
            if (res) {
              translate = res[1].replaceAll(', ', ',')
            }
            let translateArr = translate.replace('(', '').replace(')', '').split(',')
            this.targetElTx = +translateArr[0].replace('px', '') || 0
            this.targetElTy = +translateArr[1].replace('px', '') || 0
          }
        }
      }

      // 设置transform属性
      _setTransformProp(transform = '', prop = '', value = '') {
        let reg = new RegExp(`${prop}\((.*)\)`, 'g')
        if(transform.includes(prop)) {
          let propList = transform.replaceAll(', ', ',').trim().split(' ')
          let newPropList = propList.map(item => item.replaceAll(reg, `${prop}(${value})`))
          transform = newPropList.join(' ')
        } else {
          transform = `${prop}(${value}) ` + transform
        }
        return transform
      }

      // translate移动元素
      _translateMoveEl() {
        if (this.targetEl) {
          let tx = this.targetElTx + this.moveInsX
          let ty = this.targetElTy + this.moveInsY

          // 工具函数：限制移动边界
          const limitBorder = () => {
            const { width, height } = this.targetEl.getBoundingClientRect()
            if (tx + width + this.initTargetElLeft > window.innerWidth) { // 限制右边界
              tx = window.innerWidth - width - this.initTargetElLeft // 窗口宽度-元素宽度-元素初始时的左偏移距离
            }
            if (tx < -this.initTargetElLeft) { // 限制左边界
              tx = -this.initTargetElLeft
            }
            if (ty + height + this.initTargetElTop > window.innerHeight) { // 限制下边界
              ty = window.innerHeight - height - this.initTargetElTop
            }
            if (ty < -this.initTargetElTop) { // 限制上边界
              ty = -this.initTargetElTop
            }
          }

          if (this.limitMoveBorder) {
            limitBorder()
          }

          let transform = this.targetEl.style.transform
          transform = transform ? this._setTransformProp(transform, 'translate3d', `${tx}px, ${ty}px, 0px`) : `translate3d(${tx}px, ${ty}px, 0px)`
          this.targetEl.style.transform = transform
        }
      }

      // 使用top，left的方式移动元素
      _topLeftMoveTargetEl = () => {
        let left = this.moveInsX + this.initTargetElLeft
        let top = this.moveInsY + this.initTargetElTop

        // 工具函数：限制移动边界
        const limitBorder = () => {
          const { width, height } = this.targetEl.getBoundingClientRect()

          if (top < 0) {
            top = 0
          }
          if (top > (window.innerHeight - height)) {
            top = window.innerHeight - height
          }
          if (left < 0) {
            left = 0
          }
          if (left > (window.innerWidth - width)) {
            left = window.innerWidth - width
          }
        }
        if (this.limitMoveBorder) {
          limitBorder()
        }
        this.targetEl.style.left = left + 'px'
        this.targetEl.style.top = top + 'px'
      }

      // 鼠标移动事件
      _mousemoveHandler = (e) => {
        const pageX = this.h5 ? e.changedTouches[0].pageX : e.pageX
        const pageY = this.h5 ? e.changedTouches[0].pageY : e.pageY
        if (this.isMousedown) {
          // 往左
          if (pageX < this.startX) {
            this.moveInsX = pageX - this.startX
          }
          // 往右
          if (pageX > this.startX) {
            this.moveInsX = pageX - this.startX
          }
          // 往上
          if (pageY < this.startY) {
            this.moveInsY = pageY - this.startY
          }
          // 往下
          if (pageY > this.startY) {
            this.moveInsY = pageY - this.startY
          }
          // console.log('moveInsX', this.moveInsX, 'moveInsY', this.moveInsY)
          if(this.moveMode === 'position') {
            this._topLeftMoveTargetEl()
          }else {
            this._translateMoveEl()
          }
          // 计算第三边的长度（勾股定理 a^2 + b^2 = c^2）
          let c = Math.round(Math.pow((this.moveInsX * this.moveInsX + this.moveInsY * this.moveInsY), 0.5))
          this.callback(this.moveInsX, this.moveInsY, c)
        }
      }

      // 鼠标按下事件
      _mousedownHandler = (e) => {
        const pageX = this.h5 ? e.changedTouches[0].pageX : e.pageX
        const pageY = this.h5 ? e.changedTouches[0].pageY : e.pageY
        this.startX = pageX // 记录鼠标起始位置x
        this.startY = pageY // 记录鼠标起始位置y
        this.moveInsX = 0 // 将x轴移动距离清零
        this.moveInsY = 0 // 将y轴移动距离清零
        this.isMousedown = true // 标记鼠标按下状态

        // 计算目标元素的translate的值
        this._calcTargetTranlate()

        if (this.moveMode === 'position') {
          this._initTragetElInfo()
        }
      }

      // 鼠标松开事件
      _mouseupHandler = (e) => {
        this.isMousedown = false // 标记鼠标松开状态
        this.startX = 0 // 将x轴鼠标起始位置清零
        this.startY = 0 // 将y轴鼠标起始位置清零
      }

      // 初始化监听事件
      _initEvent() {
        const moveEvent = this.h5 ? 'touchmove' : 'mousemove'
        const downEvent = this.h5 ?  'touchstart' : 'mousedown'
        const upEvent = this.h5 ? 'touchend' : 'mouseup'
        document.addEventListener(moveEvent, this._mousemoveHandler)
        this.targetEl && this.targetEl.addEventListener(downEvent, this._mousedownHandler)
        document.addEventListener(upEvent, this._mouseupHandler)
      }

      // 销毁方法
      destroy() {
        const moveEvent = this.h5 ? 'touchmove' : 'mousemove'
        const downEvent = this.h5 ?  'touchstart' : 'mousedown'
        const upEvent = this.h5 ? 'touchend' : 'mouseup'
        this.targetEl && this.targetEl.removeEventListener(moveEvent, this._mousedownHandler)
        this.document.removeEventListener(downEvent, this._mousemoveHandler)
        this.document.removeEventListener(upEvent, this._mouseupHandler)
      }
    }

    const targetEl = document.getElementById('rect-1')
    const moveModel = new DragMoveModel({ targetEl: targetEl, limitMoveBorder: true })

    const targetEl2 = document.getElementById('rect-2')
    const moveModel2 = new DragMoveModel({ targetEl: targetEl2, moveMode: 'position', limitMoveBorder: true  })

  </script>
</body>

</html>
```

# 使用文档
```javascript
<div id="rect-1" class="rect">1</div>

const targetEl = document.getElementById('rect-1')
const moveModel = new DragMoveModel({ targetEl: targetEl }, (x, y, z) => console.log(x, y, z))
```
## 构造函数初始化参数

- config，个性化配置
- callback， 回调函数，获取鼠标移动距离
#### config参数配置
| 属性 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| targetEl | 目标元素，需要拖动的元素 | HTMLElement | document.body |  |
| limitMoveBorder | 是否限制拖动边界 | Boolean | false |  |
| moveMode | 拖动实现方式，transform为transform-translate方式移动，position为top,left方式移动 | String | transform | `transform`,`position` |
| h5 | 是否是h5 | Boolean | false |  |


## 销毁方法
```javascript
moveModel.destroy()
```
