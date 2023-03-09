---


date: 2020-02-24

categories:

- 前端

tags:
- css弹性布局

---

# flex container的justify-content属性

justify-content决定了 flex items在main axis上的对齐方式

- flex-start（默认值）：与main start对齐

```css
justify-content: flex-start;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085659-736239.png#alt=20200214085639-317266)

- flex-end：与main end对齐

```css
justify-content: flex-end;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085748-15894.png#alt=20200214085703-471034)

- center：居中对齐

```css
justify-content: center;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085815-645854.png#alt=20200214085751-676322)

- space-between：

   - flex items之间的距离相等
   - 与main start、main end两端对齐

```css
justify-content: space-between;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085837-870054.png#alt=20200214085819-71423)

- space-evenly：

   - flex items之间的距离相等
   - flex items与main start、main end之间的距离等于flex items之间的距离

```css
justify-content: space-evenly;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085917-516926.png#alt=20200214085844-497265)

- space-around：

   - flex items之间的距离相等
   - flex items与main start、main end之间的距离是flex items之间的距离的一半

```css
justify-content: space-around;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214085933-806001.png#alt=20200214085841-847112)
