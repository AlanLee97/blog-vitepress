---


date: 2020-02-24

categories:

- 前端

tags:
- css弹性布局

---

# flex container的align-items属性

align-items决定了flex items在cross axis上的对齐方式

- normal：在弹性布局中，效果和stretch一样

```css
align-items: normal;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200211212159-423616.png#alt=image-20200211212156148)

- stretch：当flex items在cross axis方向的size为auto时，会自动拉伸值填充flex container

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200211212159-423616.png#alt=image-20200211212156148)

- flex-start：与cross start对齐

```css
align-items: flex-start;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090007-859253.png#alt=20200214085950-195395)

- flex-end：与cross end对齐

```css
align-items: flex-end;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090057-585615.png#alt=20200214085942-7818)

- center：居中对齐

```css
align-items: center;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090125-151807.png#alt=20200214090009-803998)

- baseline：与基准线对齐

```css
align-items: baseline;
```

![](https://alanlee-image-bed.oss-cn-shenzhen.aliyuncs.com/note_images/20200214090156-577811.png#alt=20200214090107-722490)
