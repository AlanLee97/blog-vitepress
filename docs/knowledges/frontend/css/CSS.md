![](https://cdn.nlark.com/yuque/0/2021/jpeg/743297/1638770560609-c496ad58-344c-4946-ad69-3798934a56d2.jpeg)
# 盒子模型
盒子模型由四个部分组成：

1. 内容content
2. 内边距padding
3. 边界border
4. 外边距margin

![](https://cdn.nlark.com/yuque/0/2021/gif/743297/1638322523278-0c431714-3d12-4115-88ae-78d2f7ae156a.gif#clientId=uceefe2d6-8069-4&from=paste&id=u18f50fa5&originHeight=289&originWidth=536&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ubf379934-fbc4-430b-8d25-30bde584478&title=)

盒子模型主要有2种

1. IE盒子模型
2. 标准盒子模型
## IE盒子模型
计算方式：width = content + padding + border
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638329562971-620f09ca-32db-4781-8391-38fdb55225e3.png#clientId=ufa91db9b-52d3-4&from=paste&height=584&id=u7ca8271d&name=image.png&originHeight=584&originWidth=954&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34344&status=done&style=none&taskId=udd25e8e6-5b50-4d25-8d41-5ae6521511a&title=&width=954)
## 标准盒子模型
计算方式：width = content
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638329504678-758a8bb1-de97-4469-8918-c5153996a011.png#clientId=ufa91db9b-52d3-4&from=paste&height=585&id=WUn78&name=image.png&originHeight=585&originWidth=953&originalType=binary&ratio=1&rotation=0&showTitle=false&size=34411&status=done&style=none&taskId=u27acda65-38d7-47c3-9658-681dc0481cb&title=&width=953)
# 元素类型
## 行内元素
特点：元素宽度由内容的宽度撑开
如：span、i、em等

## 块级元素
特点：元素宽度独占一行
如：p、div等

# 单位

- rem，rem 是根 em（root em）的缩写，相对于根元素字体大小，1rem = 16px
- em，相对于应用在当前元素的字体尺寸， 1em = 16px
- vw，viewpoint width，视窗宽度，1vw=视窗宽度的1%
- vh，viewpoint height，视窗高度，1vh=视窗高度的1%
- vmin，vw和vh中较小的那个
- vmax，vw和vh中较大的那个
- px，像素单位

# 继承
1、字体系列属性

- font：组合字体
- font-family：规定元素的字体系列
- font-weight：设置字体的粗细
- font-size：设置字体的尺寸
- font-style：定义字体的风格
- font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
- font-stretch：允许你使文字变宽或变窄。所有主流浏览器都不支持。
- font-size-adjust：为某个元素规定一个 aspect 值，字体的小写字母 "x" 的高度与"font-size" 高度之间的比率被称为一个字体的 aspect 值。这样就可以保持首选字体的 x-height。

2、文本系列属性

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高
- word-spacing：增加或减少单词间的空白（即字间隔）
- letter-spacing：增加或减少字符间的空白（字符间距）
- text-transform：控制文本大小写
- direction：规定文本的书写方向
- color：文本颜色

3、元素可见性

- visibility

4、表格布局属性

- caption-side、
- border-collapse、
- border-spacing、
- empty-cells、
- table-layout

5、列表属性

- list-style-type、
- list-style-image、
- list-style-position、
- list-style

6、生成内容属性

- quotes

7、光标属性

- cursor

8、页面样式属性

- page、
- page-break-inside、
- windows、
- orphans

9、声音样式属性

- speak、
- speak-punctuation、
- speak-numeral、
- speak-header、
- speech-rate、
- volume、
- voice-family、
- pitch、
- pitch-range、
- stress、
- richness、
- azimuth、
- elevation

所有元素可以继承的属性

- 元素可见性：visibility、opacity
- 光标属性：cursor

内联元素可以继承的属性

- 字体系列属性
- 除text-indent、text-align之外的文本系列属性

块级元素可以继承的属性

- text-indent、text-align
# 定位方式
position

1. relative，相对定位，相对于自身原位置进行定位
2. absolute，绝对定位，绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`。
- 定位使元素的位置与文档流无关，因此不占据空间。
3. fixed，固定定位，元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动
4. static，静态定位（默认值），即没有定位，静态定位的元素不会受到 top, bottom, left, right影响。
5. sticky，粘性定位，粘性定位的元素是依赖于用户的滚动。
- 在 position:relative 与 position:fixed 定位之间切换。
- 原位置在视口区域时，它的值为position:relative; 而当页面滚动超出目标区域时，它的值为 position:fixed;，
# 选择器

1. ID 选择器， 如 #id{}
2. 类选择器， 如 .class{}
3. 属性选择器， 如 a[href="baidu.com"]{}
4. 伪类选择器， 如 :hover{}
5. 伪元素选择器， 如 ::before{}
6. 标签选择器， 如 span{}
7. 通配选择器， 如 *{}
8. 相邻选择器，如：div + p {}
9. 子选择器，如：div > p {}
10. 后代选择器，如：div  p {}

## CSS选择器优先级（权重）
### 权重排序
!important **>** 行内样式 **>** ID **>** 类 = 属性 = 伪类 **>** 标签 = 伪元素 **>** 通配符 **>** 继承 **>** 浏览器默认属性

### 权重值

- 1000 - 行内样式style
- 100 - ID
- 10 - 类样式class、属性、伪类
- 1 - 元素、伪元素、通配符

> 使用!important是一个**坏习惯**，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找bug变得更加困难了。


# 伪类
伪类选择元素基于的是当前元素处于的状态，或者说元素当前所具有的特性，而不是元素的id、class、属性等静态的标志。由于状态是动态变化的，所以一个元素达到一个特定状态时，它可能得到一个伪类的样式；当状态改变时，它又会失去这个样式。由此可以看出，它的功能和class有些类似，但它是基于文档之外的抽象，所以叫伪类。
语法
```css
a:hover
```
常用的伪类

- :hover
- :visited
- :link
- :active
- :foucs
- :not()
- ...

| 选择器 | 示例 | 示例说明 |
| --- | --- | --- |
| :checked | input:checked | 选择所有选中的表单元素 |
| :disabled | input:disabled | 选择所有禁用的表单元素 |
| :empty | p:empty | 选择所有没有子元素的p元素 |
| :enabled | input:enabled | 选择所有启用的表单元素 |
| :first-of-type | p:first-of-type | 选择的每个 p 元素是其父元素的第一个 p 元素 |
| :in-range | input:in-range | 选择元素指定范围内的值 |
| :invalid | input:invalid | 选择所有无效的元素 |
| :last-child | p:last-child | 选择所有p元素的最后一个子元素 |
| :last-of-type | p:last-of-type | 选择每个p元素是其母元素的最后一个p元素 |
| :not(selector) | :not(p) | 选择所有p以外的元素 |
| :nth-child(n) | p:nth-child(2) | 选择所有 p 元素的父元素的第二个子元素 |
| :nth-last-child(n) | p:nth-last-child(2) | 选择所有p元素倒数的第二个子元素 |
| :nth-last-of-type(n) | p:nth-last-of-type(2) | 选择所有p元素倒数的第二个为p的子元素 |
| :nth-of-type(n) | p:nth-of-type(2) | 选择所有p元素第二个为p的子元素 |
| :only-of-type | p:only-of-type | 选择所有仅有一个子元素为p的元素 |
| :only-child | p:only-child | 选择所有仅有一个子元素的p元素 |
| :optional | input:optional | 选择没有"required"的元素属性 |
| :out-of-range | input:out-of-range | 选择指定范围以外的值的元素属性 |
| :read-only | input:read-only | 选择只读属性的元素属性 |
| :read-write | input:read-write | 选择没有只读属性的元素属性 |
| :required | input:required | 选择有"required"属性指定的元素属性 |
| :root | root | 选择文档的根元素 |
| :target | #news:target | 选择当前活动#news元素(点击URL包含锚的名字) |
| :valid | input:valid | 选择所有有效值的属性 |
| :link | a:link | 选择所有未访问链接 |
| :visited | a:visited | 选择所有访问过的链接 |
| :active | a:active | 选择正在活动链接 |
| :hover | a:hover | 把鼠标放在链接上的状态 |
| :focus | input:focus | 选择元素输入后具有焦点 |
| :lang(language) | p:lang(it) | 为`<p>`元素的lang属性选择一个开始值 |


# 伪元素
伪元素是对元素中的特定内容进行操作，它所操作的层次比伪类更深了一层，也因此它的动态性比伪类要低得多。实际上，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。它控制的内容实际上和元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

语法
```css
element:after  { style properties }  /* CSS2 语法 */

element::after { style properties }  /* CSS3 语法 */
```
> ::after表示法是在CSS 3中引入的，::符号是用来区分伪类和伪元素的。支持CSS3的浏览器同时也都支持CSS2中引入的表示法:after。


常用的伪元素

- ::after
- ::before
- ::last-child(nth)
- ::first-child
- ::first-letter
- ...

| 选择器 | 示例 | 示例说明 |
| --- | --- | --- |
| ::first-letter | p:first-letter | 选择每个`<p>` 元素的第一个字母 |
| ::first-line | p:first-line | 选择每个`<p>` 元素的第一行 |
| ::first-child | p:first-child | 选择器匹配属于任意元素的第一个子元素的 `<p>` 元素 |
| ::before | p:before | 在每个`<p>`元素之前插入内容 |
| ::after | p:after | 在每个`<p>`元素之后插入内容 |
| ::lang(language) | p:lang(it) | 为`<p>`元素的lang属性选择一个开始值 |

# BFC
BFC的中文意思是块级格式化上下文。简单的理解BFC，其从样式上和普通盒子没有什么区别，其从功能上可以将其看作是隔离了的独立容器，容器里面的元素布局不会影响到外面的元素（如浮动、首元素的margin-top加到了父元素上等），并且BFC容器具有普通容器没有的一些特点，如包含浮动元素解决内容塌陷等。

## 常见的触发BFC的方式

- 根元素（`<html>`）
- 浮动元素（元素的[float](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)不是 none）
- 绝对定位元素（元素的 [position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)为 absolute 或 fixed）
- 行内块元素（元素的 [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 inline-block）
- 元素的 [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- [overflow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)计算值(Computed)不为 visible的块元素
- 弹性元素（[display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 flex 或 inline-flex 元素的直接子元素）

## BFC的作用

1. 解决高度塌陷
2. 解决margin边缘合并

### 示例

1. 解决高度塌陷

**高度塌陷现象**
```html
<style>
  .container {
    border: 1px solid red;
    padding: 20px;
  }
  .float-left {
    width: 200px;
    height: 200px;
    background-color: yellow;
    float: left;
  }
  .float-right {
    width: 200px;
    height: 200px;
    background-color: orangered;
    float: right;
  }
</style>

<div class="container">
  <div class="float-left"></div>
  <div class="float-right"></div>
</div>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638681247192-41cf6316-3de0-488d-9017-59997370e959.png#clientId=ue6386c2d-1280-4&from=paste&height=285&id=u483f0ade&name=image.png&originHeight=285&originWidth=818&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7937&status=done&style=none&taskId=u1827efe8-776c-46da-9e0b-4706de74942&title=&width=818)

**解决高度塌陷 - 清除浮动**
```html
<style>
  .container {
    border: 1px solid red;
    padding: 20px;
  }
  .float-left {
    width: 200px;
    height: 200px;
    background-color: yellow;
    float: left;
  }
  .float-right {
    width: 200px;
    height: 200px;
    background-color: orangered;
    float: right;
  }
  .clear-float-1::after {
    content: " ";
    clear: both;
    display: block;
  }
  .clear-float-2 {
    overflow: hidden;
  }
</style>

<h2>方式1（推荐）</h2>
<div class="container clear-float-1">
  <div class="float-left"></div>
  <div class="float-right"></div>
</div>

<h2>方式2</h2>
<div class="container clear-float-2">
  <div class="float-left"></div>
  <div class="float-right"></div>
</div>

<h2>方式3</h2>
<div class="container">
  <div class="float-left"></div>
  <div class="float-right"></div>
  <div style="clear: both;"></div>
</div>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638681365011-813a1f54-786c-403a-be20-fb7048337863.png#clientId=ue6386c2d-1280-4&from=paste&height=930&id=uf2f50851&name=image.png&originHeight=930&originWidth=812&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30138&status=done&style=none&taskId=uec7f823c-f58a-4837-8a57-6db7ec24553&title=&width=812)

2. 解决margin边缘合并

**margin边缘合并现象**
```html
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .row1 {
    width: 100%;
    height: 100px;
    background-color: yellow;
    margin-bottom: 30px;
  }
  .row2 {
    width: 100%;
    height: 100px;
    background-color: orangered;
    margin-top: 20px;
  }
</style>

<body>
  <div class="row1"></div>
  <div class="row2"></div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638679302735-b55952a5-458a-4238-8702-b6e344d68198.png#clientId=ue6386c2d-1280-4&from=paste&height=231&id=XIG2o&name=image.png&originHeight=231&originWidth=883&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6223&status=done&style=none&taskId=ue6206f9e-688b-4535-9538-01ab1ed2ca4&title=&width=883)
**解决margin边缘合并**
使用BFC容器分别包裹对应的元素
```html
<style>
  .row1 {
    width: 100%;
    height: 100px;
    background-color: yellow;
    margin-bottom: 30px;
  }
  .row2 {
    width: 100%;
    height: 100px;
    background-color: orangered;
    margin-top: 20px;
  }
  .bfc-container {
    display: flex;
  }
</style>

<body>
  <div class="bfc-container">
    <div class="row1"></div>
  </div>
  <div class="bfc-container">
    <div class="row2"></div>
  </div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638679656274-2209d0dc-298f-46e6-b742-347a5bfd6e81.png#clientId=ue6386c2d-1280-4&from=paste&height=251&id=u0e0ceb2c&name=image.png&originHeight=251&originWidth=885&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7181&status=done&style=none&taskId=u27490ff5-5a55-4174-8b42-59e47b8740e&title=&width=885)
## 外边距合并
块的上外边距(margin-top)和下外边距(margin-bottom)有时合并(折叠)为单个边距，其大小为单个边距的最大值(或如果它们相等，则仅为其中一个)，这种行为称为边距折叠。
```html
<style>
  .row1 {
    width: 100%;
    height: 100px;
    background-color: yellow;
    margin-bottom: 30px;
  }
  .row2 {
    width: 100%;
    height: 100px;
    background-color: orangered;
    margin-top: 20px;
  }
</style>

<body>
  <div class="row1"></div>
  <div class="row2"></div>
</body>
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638679302735-b55952a5-458a-4238-8702-b6e344d68198.png#clientId=ue6386c2d-1280-4&from=paste&height=231&id=u8d24651e&name=image.png&originHeight=231&originWidth=883&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6223&status=done&style=none&taskId=ue6206f9e-688b-4535-9538-01ab1ed2ca4&title=&width=883)

出现外边距合并的情况

1. 同一层相邻元素之间
2. 没有内容将父元素和后代元素分开
3. 空的块级元素

外边距合并取值

1. 都是整数取最大的边距值
2. 其他情况取相加值
# IFC
行内格式化上下文（Inline formatting context）
各行内框（inline boxes）一个接一个地排列，其排列顺序根据书写模式（writing-mode）的设置来决定：

- 对于水平书写模式，各个框从左边开始水平地排列
- 对于垂直书写模式，各个框从顶部开始水平地排列

布局规则：

1. 在一个IFC里，盒是一个接一个从顶部水平放置。
2. 摆放这些框，它们水平方向的margin,padding,border所占空间会被计算在内。
3. 行盒的高度由行盒内最高的inline boxes决定。
4. 垂直方向，可通过vertical-align设置文本基线，取值可以是具体像素值，也可以是middle等方向词。
5. 当内部的容器盒子太多了一个line box装不下来，他们折行之后会变成两个或者多个line box， line box们垂直方向无间隔地堆叠，但不能重叠
6. 浮动后IFC内部的浮动元素宽高参与IFC的line-box宽高计算并且从换行后的行开始排列

![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638408037371-dd5989d5-5f4d-45f0-b6b5-ab2311cd3728.png#clientId=uc570bf2c-47aa-4&from=paste&height=200&id=u8c575e1d&name=image.png&originHeight=200&originWidth=688&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25444&status=done&style=none&taskId=u776397ed-7ad6-4c48-9b0d-42a13062d13&title=&width=688)

```html
span {
  border: 5px solid rebeccapurple;
}

<div class="example">
    Before that night—<span>a memorable night, as it was to prove—hundreds of millions of people</span> had watched the rising smoke-wreaths of their fires without drawing any special inspiration from the fact.”
</div>
```

# Flex布局
## 轴线

- 主轴，默认水平方向
- 交叉轴，垂直与主轴的方向
## Flex容器
元素设置为display:flex之后就是flex的容器

作用于flex容器的属性有

- flex-basis
- flex-wrap
- flex-direction
- flex-flow
## Flex元素
在Flex容器下的子元素就是Flex元素
作用于flex元素的属性有

- align-items
- align-content
- justify-content
- justify-items
# CSS居中方式
水平居中

1. margin: 0 auto
2. text-align: center
3. padding + text-align: center
4. flex布局，justify-content: center

垂直居中

1. margin: auto 0
2. line-height的值 = height的值
3. position + transform
4. flex布局，align-items: center
5. 父元素display: table-cell; vertical-align: middle; 

水平+垂直居中

1. margin: auto
2. text-align: center; line-height: 父元素height
3. padding + text-align: center
4. flex布局，justify-content: center; align-items: center
5. postion: relative + postion: absolute; top: 0; right: 0; bottom: 0; left: 0
6. 父元素display: table-cell; vertical-align: middle; 子元素margin: auto

# CSS3新增的内容

- **边框 **
   - border-radius
   -  border-image
   - box-sizing
- **圆角** 
   - border-radius
- **背景** 
   - background-image
   - background-size
   - background-origin
   - background-clip
- **渐变**
   - background-image: linear-gradient(angle, color-stop1, color-stop2);
   - background-image: radial-gradient(shape size at position, start-color, ..., last-color);
- **文本效果**
   - text-shadow
   - box-shadow
   - text-overflow
   - word-wrap
   - word-break
- **字体**
   - @font-face
- **2D转换**
   - transform: translate()
   - transform: rotate()
   - transform: scale()
   - transform: skew()
   - transform: matrix()
- **3D转换**
   - transform: rotateX()
   - transform: rotateY()
- **过渡**
   - transition
   - transition-delay
   - transition-duration
   - transition-property
   - transition-timing-function
- **动画**
   - @keyframes
   - animation
- **多列**
   - column-count
   - column-gap
   - column-rule-style
   - column-rule-width
   - column-rule-color
   - column-rule
   - column-span
   - column-width
- **弹性盒子**
   - display: flex
- **媒体查询**
   - @media

# CSS动画


requestAnimationFrame

- 让视觉更新按照浏览器的最优时间来安排计划: 60fps
- 取代 setTimeout 和 setInterval hack
- 和pageVisibility的冲突

# 实践
## 布局
### 三栏布局
todo
### 圣杯布局
todo
### 双飞翼布局
todo
## 样式
### 绘制三角形
### 文本溢出显示省略号
### 清除浮动

1. 在父元素上设置样式属性overflow: auto(或hidden)
2. 在子元素中增加一个空的元素，设置样式属性clear: both
3. 父元素增加伪元素after/before, 设置属性clear: both; display: block; content: "";

# CSS处理器
## 预处理器
CSS 预处理器通过自己独有的语法来生成CSS的代码。市面上有很多CSS预处理器可供选择，且绝大多数CSS预处理器会增加一些原生CSS不具备的特性，例如代码混合，嵌套选择器，继承选择器等。这些特性让CSS的结构更加具有可读性且易于维护。

> 要使用CSS预处理器，你必须在web服务中服务器安装CSS编译工具。


常用的CSS预处理有

- sass
- less
- stylus

## 后置处理器
postcss，利用JS插件对对CSS进行处理，例如自动添加浏览器厂商前缀。
### 常用的postcss

- autoprefixer
### Postcss原理
在构建项目的时候，通过webpack会把css文件的内容传送给postcss-loader， postcss-loader会解析postcss.config中的插件，传输给 Postcss，Postcss 会解析传入的css，将其转换为一个AST，然后通过各种不同的插件来对这个AST进行操作，最终序列化新的 css，最后将结果返回到 postcss-loader，进行 webpack 下一个 loader 的操作。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1638494163422-ef50d674-1ccc-4ec2-a491-4c20a98f03a5.png#clientId=uf202d28b-972c-4&from=paste&id=u1ce4f550&name=image.png&originHeight=726&originWidth=1828&originalType=url&ratio=1&rotation=0&showTitle=false&size=196681&status=done&style=none&taskId=ud65ae15a-9fa5-413e-9f26-57f26c5020f&title=)

> 参考文章：[如果你不会Postcss，那么你就真的不会Postcss](https://zhuanlan.zhihu.com/p/269051473)

# CSS性能优化

1. 使用简写，减小 CSS 文件的大小。
2. 删除不必要的部分 CSS，显然会加快网页的加载速度。
3. 将关键的样式内联到head的style中
4. 尽量不用@import导入样式，@import会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时而且多个@import可能会导致下载顺序紊乱。
5. 使用CSS替换一些用CSS可实现效果的图片，例如给图片加透明度
6. 颜色使用简写，如#ffffff写成#fff
7. 删除不必要的0和单位，如0.1px可写成.1px；0px直接写0；
8. 最后一个属性可不写分号
9. 使用雪碧图，用CSS定位图片
10. 上线时可删除CSS注释
11. 减少重排和重绘
12. 动画启用GPU加速，transform: translate(x,y,z)，带上第3个参数z，转换为3D即可开启GPU加速
13. 慎重选择高消耗的样式
- box-shadows
- border-radius
- transparency
- transforms
- filters（性能杀手）
14. 使用requestAnimationFrame代替js的setTimeout和setInterval
15. scss的嵌套层数不宜过深，建议不超过4层
16. 合并CSS文件，减少http请求
17. 压缩CSS代码
18. 异步加载CSS
- `<link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">`

> **参考文章**
> [CSS 性能优化笔记](https://segmentfault.com/a/1190000007336987)
> [CSS性能优化](https://juejin.cn/post/6994059570469404686)
> [CSS性能优化的8个技巧](https://juejin.cn/post/6844903649605320711)

# 重排和重绘
## 重排（reflow）
渲染层内的元素布局发生修改，都会导致页面重新排列，比如窗口的尺寸发生变化、删除或添加DOM元素，修改了影响元素盒子大小的CSS属性（诸如：width、height、padding）。

### 常见重排元素
| width | height | padding | margin |
| --- | --- | --- | --- |
| display | border-width | border | top |
| position | font-size | float | text-align |
| overflow-y | font-weight | overflow | left |
| font-family | line-height | vertical-align | right |
| clear | white-space | bottom | min-height |


## 重绘（repaint）
绘制，即渲染上色，所有对元素的视觉表现属性的修改，都会引发重绘。

重排一定会引发重绘，而重绘不一定会引发重排。

### 常见的重绘元素
| color | border-style | visibility | background |
| --- | --- | --- | --- |
| text-decoration | background-image | background-position | background-repeat |
| outline-color | outline | outline-style | border-radius |
| outline-width | box-shadow | background-size |  |

