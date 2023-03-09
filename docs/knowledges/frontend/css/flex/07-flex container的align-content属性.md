---


date: 2020-02-24

categories:

- 前端

tags:
- css弹性布局

---

# align-content

align-content决定了 flex items在cross axis上的对齐方式

- flex-start（默认值）：与cross start对齐

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: flex-start;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090400-834493.png#alt=20200214090334-7813)

- flex-end：与cross end对齐

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: flex-end;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090424-134033.png#alt=20200214090337-271583)

- center：居中对齐

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: center;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090457-856542.png#alt=20200214090338-37021)

- 
space-between：

   - flex items之间的距离相等
   - 与cross start、cross end两端对齐

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: space-between;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090525-761567.png#alt=20200214090504-951603)

- 
space-evenly：

   - flex items之间的距离相等
   - flex items与cross start、cross end之间的距离等于flex items之间的距离

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: space-evenly;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090544-710455.png#alt=20200214090529-718409)

- space-around：

   - flex items之间的距离相等
   - flex items与cross start、cross end之间的距离是flex items之间的距离的一半

```css
flex-flow: row wrap;
justify-content: space-evenly;

/*cross axis方向*/
align-content: space-around;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090600-68558.png#alt=20200214090551-615140)
