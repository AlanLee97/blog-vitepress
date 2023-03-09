# 原生JS实现轮播图

## ![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628487096671-f89ff138-51d0-429b-92b7-655bc2de0e8d.gif#alt=img)

## 概述

知识点：

1. 【css】transform、transition
2. 【js】touchstart、touchmove、touchend

## 原理

拖动的时候改变transfrom: translate(x, y)来改变元素的位置（使用transform移动元素时会启用硬件加速，性能更好）

## 实现

### 实现样式

基本样式

1个swiper容器，宽度300px，溢出隐藏

1个swiper，宽度900px

3个swiper-item，宽度300px

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
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.swiper-wrapper {
			width: 300px;
			margin: 0 auto;
			border: indianred 1px solid;
			margin-top: 60px;
		}

		.swiper {
			width: 900px;
			display: flex;
		}

		.swiper-item {
			width: 300px;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: rgb(225, 235, 234);
			font-size: 60px;
			font-weight: bold;
		}

		.bg-color-2 {
			background-color: rgb(226, 236, 250);
		}
	</style>
</head>
<body>
	<div class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
		</div>
	</div>
</body>
</html>
```

### 

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628226473911-44c15208-5473-4bcd-b79f-6d1583c0835f.gif#alt=img)

父容器使用溢出隐藏

```css
.swiper-wrapper {
  width: 300px;
  margin: 0 auto;
  overflow: hidden;
  border: indianred 1px solid;
  margin-top: 60px;
}
```

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1628226531573-2e178a48-ec7d-498a-addd-3365df2a05e8.png#alt=img)

隐藏后就无法拖动了，接下来就需要用js实现拖动的效果了。

### 实现拖动效果

要实现拖动效果，这里通过改变css的transform的translateX属性的值的方式实现拖动效果。

整体思路，拿到滑动的起始点、滑动结束点、计算滑动的长度

实现拖动需要监听触摸的3个事件：touchstart、touchmove、touchend

给swiper添加触摸监听事件

```javascript
	<script>
		let swiper = document.getElementById('swiper');

		swiper.ontouchstart = e => {
			console.log('touchstart', e);
		}

		swiper.ontouchmove = e => {
			console.log('touchmove', e);
		}

		swiper.ontouchend = e => {
			console.log('touchend', e);
		}
	</script>
```

touchstart和touchend事件

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628226912323-6b2ccbe9-10c9-461e-8c37-08646fecda67.gif#alt=img)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1628227500379-76837912-8835-4418-9cd3-7fbe4c7a75ba.png#alt=img)

如上图所示，点击一下就会触发2个事件（touchstart和touchend），此时回调函数中打印了e的内容，我们只要拿到changedTouches或者targetTouches数组里的第一个Touch对象就行，这里我们取changedTouches数组的第一个对象，可以看到，这个对象包含了一些屏幕相关的属性，这里我们只处理横向拖动，所以我们只要拿clientX或者pageX的属性就可以了，这里我们去pageX的属性。

#### 拿到触摸起始点

```javascript
let start = 0; // 触摸起始点

swiper.ontouchstart = e => {
  start = e.changedTouches[0].pageX;
  console.log('start', start);
}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628228594468-0421f23f-4518-47a1-a761-442a9d64eaac.gif#alt=img)

通过touchstart，我们可以拿到第1次触摸的水平位置pageX/clientX

#### 计算滑动距离

接下来看下touchmove

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628227764229-6fd52bc6-09d2-41f1-9097-8e51ad830ae2.gif#alt=img)

可以看到，移动的时候会一直触发touchmove事件，每移动一个像素点就会触发一次，回调函数中拿到的是Touch对象，该对象中的pageX/clienX属性就是当前位置所在的像素位置。

滑动距离 = 最后1次move的pageX - 触摸起始点

```javascript
		let moveDistance = 0; // 滑动距离

		swiper.ontouchmove = e => {
			moveDistance = e.changedTouches[0].pageX - start;
			console.log('moveDistance', moveDistance);
		}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628228948597-42b7aa8d-fdb0-4864-a8c3-c95de703c360.gif#alt=img)

这个距离还可以判断滑动方向，从图中可以看到，往右滑动距离是正数，往左滑动，距离是负数。

通过js可以拿到滑动的距离了，接下来就需要动态改变元素的位置（transform: translateX(x)）了

#### 改变元素的位置

改变元素的位置，只要将移动的距离设置到translateX里就行了

```javascript
  let moveDistance = 0; // 滑动距离	
  let moveX = 0; // 元素需移动的距离	
	swiper.ontouchmove = e => {
			moveDistance = e.changedTouches[0].pageX - start;
			console.log('moveDistance', moveDistance);
      moveX = moveDistance;

			// 改变元素的位置
			swiper.style = `transform: translateX(${moveX}px);`;
		}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628229459488-d822bb86-b153-45aa-949a-b94d893293d9.gif#alt=img)

上面实现了元素跟随鼠标移动的效果，但是有个问题，就是每次重新滑动时都会回到原点，从原点开始滑。

现在解决从原点开始滑的问题，原理就是每次开始滑动时，获取到上一次滑动的位置。

1.标记是否滑动过

- 

   - 滑动过

下次滑动开始位置 = 上次滑动结束位置 + 本次滑动的距离

- 

   - 未滑动

下次滑动开始位置 = 本次滑动的距离

2.在touchstart的时候赋值上次滑动的距离

```javascript
	<script>
		let swiper = document.getElementById('swiper');

		let start = 0; // 触摸起始点
		let moveDistance = 0; // 滑动距离
		let moveX = 0; // 元素需移动的距离
		let lastMove = 0; // 上次移动的位置
		let isMoved = false; // 标记是否移动过

		swiper.ontouchstart = e => {
			start = e.changedTouches[0].pageX;
			// 拿到上次滑动的距离
			lastMove = moveX;
		}

		swiper.ontouchmove = e => {
			// 设置滑动的距离
			moveDistance = e.changedTouches[0].pageX - start;
			// 重新设置滑动的距离
			moveX = isMoved ? (lastMove + moveDistance) : moveDistance;
			// 改变元素的位置
			swiper.style = `transform: translateX(${moveX}px);`;
			// 标记已经滑动
			isMoved = true;
		}

		swiper.ontouchend = e => {
			console.log('touchend', e);
		}
	</script>
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628478668894-878d30c4-658d-4c35-aad3-3f2bd103b041.gif#alt=img)

到这里已经实现了下次滑动从原点开始滑的问题，但是这里还有个问题，就是边界的问题。

可以看到滑动左边或右边边界的时候会拉出白色的区域，并且停留在白色区域的位置，所以我们要做的是处理滑动边界的问题。

#### 处理滑动边界

先观察，swiper里有3个swiper-item，起始位置时0px，结束位置是-600px，往右滑动的时候translateX的值从小变大的，往左滑的时候translateX的值从大变小的。

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1628480621287-54d77dcc-0386-42c7-a96e-1145f33e9d6e.png#alt=img)

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1628481274624-9344163d-3d6f-4809-8e98-ffeded520df1.png#alt=img)

实现方式很简单，超出边界将滑动距离设置为边界即可。

```javascript
		swiper.ontouchend = e => {
			console.log('touchend', e);
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -600) {
				moveX = -600;
			}

			// 更新样式
			swiper.style = `transform: translateX(${moveX}px);`;

			// 滑动距离恢复为0
			moveDistance = 0;
		}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628484422624-eb047fa4-6fb7-4c03-b4dc-78d171eae7aa.gif#alt=img)

边界问题处理了，但是效果很生硬，接下来我们来实现边界回弹效果吧

边界回弹也很简单，只有加上过渡效果transition即可。

```javascript
		swiper.ontouchend = e => {
			console.log('touchend', e);
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -600) {
				moveX = -600;
			}

			// 更新样式
			swiper.style = `transform: translateX(${moveX}px); transition: transform 600ms`;

			// 滑动距离恢复为0
			moveDistance = 0;
		}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628484753974-b185d8ad-1033-4c54-b6b1-9906d3c5e77e.gif#alt=img)

加上`transition: transform 600ms`，边界回弹效果看起来就生动多了。这样边界问题处理好了，但是还有单个swiper-item之间的效果没有处理好。

接下来处理每个swiper-item之间的效果，实现放开拖动时加速滑到下一页效果。

#### 实现放开拖动时加速滑到下一页效果

先观察第2个swiper-item的边界

![](https://cdn.nlark.com/yuque/0/2021/png/743297/1628485352033-1a6f6bf7-6685-4704-a0ad-95fadc225f8b.png#alt=img)

我们还需要判断滑动方向

当moveDistance > 0时，从左往右滑动（→）

当moveDistance < 0时，从右往左滑动（←）

所以当滑动超出一定阈值时将translateX的值增加到上一个或下一个swiper-item即可。

例如：

当moveX > -200px时（从左往右滑动（→）），将moveX设置为0（即滑动到上一个swiper-item），否则将moveX设置为-300（原来的位置）。

当moveX < -400px时（从右往左滑动（←）），将moveX设置为-600（即滑动到下一个swiper-item），否则将moveX设置为-300（原来的位置）。

```javascript
		swiper.ontouchend = e => {
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -600) {
				moveX = -600;
			}
			
			// 处理中间swiper-item的边界
			if(moveDistance > 0) { // 从左往右滑动（→）
				if(moveX > -200) {
          // 滑到上一个swiper-item
					moveX = 0;
				}else {
          // 停留在当前swiper-item
					moveX = -300;
				}
			}else if(moveDistance < 0) { // 从右往左滑动（←）
				if(moveX < -400) {
          // 滑到下一个swiper-item
					moveX = -600;
				}else {
          // 停留在当前swiper-item
					moveX = -300;
				}
			}

			// 更新样式
			swiper.style = `transform: translateX(${moveX}px); transition: transform 600ms`;

			// 滑动距离恢复为0
			moveDistance = 0;
		}
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628487096671-f89ff138-51d0-429b-92b7-655bc2de0e8d.gif#alt=img)

### 完整代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Swiper</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.swiper-wrapper {
			width: 300px;
			margin: 0 auto;
			overflow: hidden;
			border: indianred 1px solid;
			margin-top: 60px;
		}

		.swiper {
			width: 900px;
			display: flex;
		}

		.swiper-item {
			width: 300px;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: rgb(225, 235, 234);
			font-size: 60px;
			font-weight: bold;
		}

		.bg-color-2 {
			background-color: rgb(226, 236, 250);
		}
	</style>
</head>
<body>
	<div class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
		</div>
	</div>

	<script>
		let swiper = document.getElementById('swiper');

		let start = 0; // 触摸起始点
		let moveX = 0; // 元素需移动的距离
		let moveDistance = 0; // 滑动距离
		let lastMove = 0; // 上次移动的位置
		let isMoved = false; // 标记是否移动过
		

		swiper.ontouchstart = e => {
			start = e.changedTouches[0].pageX;
			console.log('start', start);
			// 拿到上次滑动的距离
			lastMove = moveX;
		}

		swiper.ontouchmove = e => {
			// 设置滑动的距离
			moveDistance = e.changedTouches[0].pageX - start;
			// 重新设置滑动的距离
			moveX = isMoved ? (lastMove + moveDistance) : moveDistance;
			// 改变元素的位置
			swiper.style = `transform: translateX(${moveX}px);`;
			// 标记已经滑动
			isMoved = true;
		}

		swiper.ontouchend = e => {
			console.log('touchend', e);
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -600) {
				moveX = -600;
			}

			// 处理中间swiper-item的边界
			if(moveDistance > 0) { // 从左往右滑动（→）
				if(moveX > -200) {
          // 滑到上一个swiper-item
					moveX = 0;
				}else {
          // 停留在当前swiper-item
					moveX = -300;
				}
			}else if(moveDistance < 0) { // 从右往左滑动（←）
				if(moveX < -400) {
          // 滑到下一个swiper-item
					moveX = -600;
				}else {
          // 停留在当前swiper-item
					moveX = -300;
				}
			}

			// 更新样式
			swiper.style = `transform: translateX(${moveX}px); transition: transform 600ms`;

			// 滑动距离恢复为0
			moveDistance = 0;
		}
	</script>
</body>
</html>
```

## 

## 进阶

### 实现动态计算swiper宽度

把固定的数值换成动态计算的数字即可。

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Swiper</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.swiper-wrapper {
			width: 300px;
			margin: 0 auto;
			overflow: hidden;
			border: indianred 1px solid;
			margin-top: 60px;
			position: relative;
		}

		.swiper {
			/* width: 900px; */
			display: flex;
		}

		.swiper-item {
			width: 100%;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: rgb(225, 235, 234);
			font-size: 60px;
			font-weight: bold;
		}

		.bg-color-2 {
			background-color: rgb(226, 236, 250);
		}
	</style>
</head>

<body>
	<div id="swiper-wrapper" class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
		</div>
	</div>

	<script>

		let swiperWrapper = document.getElementById('swiper-wrapper'); // swiper容器
		let swiper = document.getElementById('swiper'); // swiper
		let swiperItems = document.getElementsByClassName('swiper-item'); // swiper-item数组
		let swiperItemCount = swiperItems.length; // swiper-item数量
		let swiperItemWidth = swiperWrapper.offsetWidth; // 单个swiper-item的宽度

		let swiperWidth = swiperWrapper.offsetWidth * swiperItems.length; // 整个swiper的宽度
		let swiperWidthStyle = `width: ${swiperWidth}px; `; // swiper宽度样式变量
		swiper.style = swiperWidthStyle; // 设置整个swiper的宽度
		let rightBound = swiperWrapper.offsetWidth * (swiperItems.length - 1); // 右边界（最后一个swiper-item的起始位置）
		let slideThreshold = swiperItemWidth / 4; // 滑动切换的阈值，这里取swiper-item宽度的1/4

		let start = 0; // 触摸起始点
		let moveX = 0; // 元素需移动的距离
		let moveDistance = 0; // 滑动距离
		let lastMove = 0; // 上次移动的位置
		let isMoved = false; // 标记是否移动过
		let currntItemIndex = 0; // 当前是第几个item

		swiper.ontouchstart = e => {
			start = e.changedTouches[0].pageX;
			// 拿到上次滑动的距离
			lastMove = moveX;
		}

		swiper.ontouchmove = e => {
			// 设置滑动的距离
			moveDistance = e.changedTouches[0].pageX - start;
			// 重新设置滑动的距离
			moveX = isMoved ? (lastMove + moveDistance) : moveDistance;
			// 改变元素的位置
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px);`;
			// 标记已经滑动
			isMoved = true;
		}

		swiper.ontouchend = e => {

			// 处理左边界
			if (moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if (moveX < -rightBound) {
				moveX = -rightBound;
			}

			// 处理中间swiper-item的边界
			if (moveDistance > 0) { // 从左往右滑动（→）
				if (moveX > -(swiperItemWidth * currntItemIndex) + slideThreshold) {
					// 滑到上一个swiper-item
					moveX = -(swiperItemWidth * (currntItemIndex - 1));
				} else {
					// 停留在当前swiper-item
					moveX = -(swiperItemWidth * currntItemIndex);
				}
			} else if (moveDistance < 0) { // 从右往左滑动（←）
				if (moveX < -(swiperItemWidth * currntItemIndex) - slideThreshold) {
					// 滑到下一个swiper-item
					moveX = -(swiperItemWidth * (currntItemIndex + 1));
				} else {
					// 停留在当前swiper-item
					moveX = -(swiperItemWidth * currntItemIndex);
				}
			}

			// 更新样式
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;

			// 计算当前index
			currntItemIndex = Math.abs(Math.round(moveX / swiperItemWidth));

			// 滑动距离恢复为0
			moveDistance = 0;
		}
	</script>
</body>

</html>
```

3个swiper-item

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628646586712-a5258962-f512-46c8-8db3-f428ceb44dde.gif#alt=img)

5个swiper-item

```html
	<div id="swiper-wrapper" class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
			<div class="swiper-item bg-color-2">4</div>
			<div class="swiper-item">5</div>
		</div>
	</div>
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628646716572-1184f75b-7d1e-45b0-8d4c-8f15b47860b8.gif#alt=img)

### 实现指示点

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Swiper</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.swiper-wrapper {
			width: 300px;
			margin: 0 auto;
			overflow: hidden;
			border: indianred 1px solid;
			margin-top: 60px;
      position: relative;
		}

		.swiper {
			/* width: 900px; */
			display: flex;
		}

		.swiper-item {
			width: 100%;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: rgb(225, 235, 234);
			font-size: 60px;
			font-weight: bold;
		}

		.bg-color-2 {
			background-color: rgb(226, 236, 250);
		}

    .indicator-wrapper {
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 0 4px;
    }

    .dot-active {
      background-color: rgba(255, 255, 255, 1);
    }
	</style>
</head>
<body>
	<div id="swiper-wrapper" class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
			<div class="swiper-item bg-color-2">4</div>
			<div class="swiper-item">5</div>
      <div class="swiper-item bg-color-2">6</div>
			<div class="swiper-item">7</div>
		</div>

    <div class="indicator-wrapper" id="indicator-wrapper"></div>
	</div>

	<script>

		let swiperWrapper = document.getElementById('swiper-wrapper'); // swiper容器
		let swiper = document.getElementById('swiper'); // swiper
		let swiperItems = document.getElementsByClassName('swiper-item'); // swiper-item数组
		let swiperItemCount = swiperItems.length; // swiper-item数量
		let swiperItemWidth = swiperWrapper.offsetWidth; // 单个swiper-item的宽度

		let swiperWidth = swiperWrapper.offsetWidth * swiperItems.length; // 整个swiper的宽度
		let swiperWidthStyle = `width: ${swiperWidth}px; `; // swiper宽度样式变量
		swiper.style = swiperWidthStyle; // 设置整个swiper的宽度
		let rightBound = swiperWrapper.offsetWidth * (swiperItems.length - 1); // 右边界（最后一个swiper-item的起始位置）
		let slideThreshold = swiperItemWidth / 4; // 滑动切换的阈值，这里取swiper-item宽度的1/4

		let start = 0; // 触摸起始点
		let moveX = 0; // 元素需移动的距离
		let moveDistance = 0; // 滑动距离
		let lastMove = 0; // 上次移动的位置
		let isMoved = false; // 标记是否移动过
		let currntItemIndex = 0; // 当前是第几个item

		// 创建指示点
    function createIndicator() {
      let dot = document.createElement('span');
      let indicatorWrapper = document.getElementById('indicator-wrapper');

      for(let i = 0; i < swiperItemCount; i++) {
        dot.setAttribute('class', `dot ${currntItemIndex === i ? 'dot-active' : ''}`);
        indicatorWrapper.appendChild(dot.cloneNode(true));
      }

    }
		// 创建指示点
    createIndicator();
		

		swiper.ontouchstart = e => {
			start = e.changedTouches[0].pageX;
			// 拿到上次滑动的距离
			lastMove = moveX;
		}

		swiper.ontouchmove = e => {
			// 设置滑动的距离
			moveDistance = e.changedTouches[0].pageX - start;
			// 重新设置滑动的距离
			moveX = isMoved ? (lastMove + moveDistance) : moveDistance;
			// 改变元素的位置
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px);`;
			// 标记已经滑动
			isMoved = true;
		}

		swiper.ontouchend = e => {
			
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -rightBound) {
				moveX = -rightBound;
			}

			// 处理中间swiper-item的边界
			if(moveDistance > 0) { // 从左往右滑动（→）
				if(moveX > -(swiperItemWidth * currntItemIndex) + slideThreshold) {
          // 上一个item
					moveX = -(swiperItemWidth * (currntItemIndex - 1)); 
				}else {
          // 停留在当前item
					moveX = -(swiperItemWidth * currntItemIndex); 
				}
			}else if(moveDistance < 0) { // 从右往左滑动（←）
				if(moveX < -(swiperItemWidth * currntItemIndex) - slideThreshold) {
          // 下一个item
					moveX = -(swiperItemWidth * (currntItemIndex + 1)); 
				}else {
          // 停留在当前item
					moveX = -(swiperItemWidth * currntItemIndex); 
				}
			}

			// 更新样式
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;

			// 计算当前index
			currntItemIndex = Math.abs(Math.round(moveX / swiperItemWidth));

			// 滑动距离恢复为0
			moveDistance = 0;

      let dots = document.getElementsByClassName('dot');
      for(let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('class', `dot ${currntItemIndex === i ? 'dot-active' : ''}`);
      }
		}
	</script>
</body>
</html>
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628646879199-da9da2d1-5bcd-48f0-b802-f98d08658dcd.gif#alt=img)

### 实现自动播放

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Swiper</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		.swiper-wrapper {
			width: 300px;
			margin: 0 auto;
			overflow: hidden;
			border: indianred 1px solid;
			margin-top: 60px;
      position: relative;
		}

		.swiper {
			/* width: 900px; */
			display: flex;
		}

		.swiper-item {
			width: 100%;
			height: 200px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: rgb(225, 235, 234);
			font-size: 60px;
			font-weight: bold;
		}

		.bg-color-2 {
			background-color: rgb(226, 236, 250);
		}

    .indicator-wrapper {
      position: absolute;
      left: 0;
      bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 0 4px;
    }

    .dot-active {
      background-color: rgba(255, 255, 255, 1);
    }
	</style>
</head>
<body>
	<div id="swiper-wrapper" class="swiper-wrapper">
		<div class="swiper" id="swiper">
			<div class="swiper-item">1</div>
			<div class="swiper-item bg-color-2">2</div>
			<div class="swiper-item">3</div>
			<div class="swiper-item bg-color-2">4</div>
			<div class="swiper-item">5</div>
      <div class="swiper-item bg-color-2">6</div>
			<div class="swiper-item">7</div>
		</div>

    <div class="indicator-wrapper" id="indicator-wrapper"></div>
	</div>

	<script>

		let swiperWrapper = document.getElementById('swiper-wrapper'); // swiper容器
		let swiper = document.getElementById('swiper'); // swiper
		let swiperItems = document.getElementsByClassName('swiper-item'); // swiper-item数组
		let swiperItemCount = swiperItems.length; // swiper-item数量
		let swiperItemWidth = swiperWrapper.offsetWidth; // 单个swiper-item的宽度

		let swiperWidth = swiperWrapper.offsetWidth * swiperItems.length; // 整个swiper的宽度
		let swiperWidthStyle = `width: ${swiperWidth}px; `; // swiper宽度样式变量
		swiper.style = swiperWidthStyle; // 设置整个swiper的宽度
		let rightBound = swiperWrapper.offsetWidth * (swiperItems.length - 1); // 右边界（最后一个swiper-item的起始位置）
		let slideThreshold = swiperItemWidth / 4; // 滑动切换的阈值，这里取swiper-item宽度的1/4

		let start = 0; // 触摸起始点
		let moveX = 0; // 元素需移动的距离
		let moveDistance = 0; // 滑动距离
		let lastMove = 0; // 上次移动的位置
		let isMoved = false; // 标记是否移动过
		let currntItemIndex = 0; // 当前是第几个item

		// 创建指示点
    function createIndicator() {
      let dot = document.createElement('span');
      let indicatorWrapper = document.getElementById('indicator-wrapper');

      for(let i = 0; i < swiperItemCount; i++) {
        dot.setAttribute('class', `dot ${currntItemIndex === i ? 'dot-active' : ''}`);
        indicatorWrapper.appendChild(dot.cloneNode(true));
      }

    }
		// 创建指示点
    createIndicator();
		

		swiper.ontouchstart = e => {
			start = e.changedTouches[0].pageX;
			// 拿到上次滑动的距离
			lastMove = moveX;
		}

		swiper.ontouchmove = e => {
			// 设置滑动的距离
			moveDistance = e.changedTouches[0].pageX - start;
			// 重新设置滑动的距离
			moveX = isMoved ? (lastMove + moveDistance) : moveDistance;
			// 改变元素的位置
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px);`;
			// 标记已经滑动
			isMoved = true;
		}

		swiper.ontouchend = e => {
			
			// 处理左边界
			if(moveX > 0) {
				moveX = 0;
			}
			// 处理右边界
			if(moveX < -rightBound) {
				moveX = -rightBound;
			}

			// 处理中间swiper-item的边界
			if(moveDistance > 0) { // 从左往右滑动（→）
				if(moveX > -(swiperItemWidth * currntItemIndex) + slideThreshold) {
          // 上一个item
					moveX = -(swiperItemWidth * (currntItemIndex - 1)); 
				}else {
          // 停留在当前item
					moveX = -(swiperItemWidth * currntItemIndex); 
				}
			}else if(moveDistance < 0) { // 从右往左滑动（←）
				if(moveX < -(swiperItemWidth * currntItemIndex) - slideThreshold) {
          // 下一个item
					moveX = -(swiperItemWidth * (currntItemIndex + 1)); 
				}else {
          // 停留在当前item
					moveX = -(swiperItemWidth * currntItemIndex); 
				}
			}

			// 更新样式
			swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;

			// 计算当前index
			currntItemIndex = Math.abs(Math.round(moveX / swiperItemWidth));

			// 滑动距离恢复为0
			moveDistance = 0;

      let dots = document.getElementsByClassName('dot');
      for(let i = 0; i < dots.length; i++) {
        dots[i].setAttribute('class', `dot ${currntItemIndex === i ? 'dot-active' : ''}`);
      }
		}

		let timer = null;
		// 自动切换
		function autoplay() {
			if(timer) clearInterval(timer);

			timer = setInterval(() => {
				moveX -= swiperItemWidth;
				if(moveX < -rightBound) {
					moveX = 0;
				}
				swiper.style = `${swiperWidthStyle} transform: translateX(${moveX}px); transition: transform 600ms;`;
        // 计算当前index
			  currntItemIndex = Math.abs(Math.round(moveX / swiperItemWidth));

        let dots = document.getElementsByClassName('dot');
        for(let i = 0; i < dots.length; i++) {
          dots[i].setAttribute('class', `dot ${currntItemIndex === i ? 'dot-active' : ''}`);
        }

			}, 2000);
		}

		// 自动切换
		autoplay();
	</script>
</body>
</html>
```

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1628647309672-00399c71-eb1e-40e4-88e8-476932d1b54a.gif#alt=img)
