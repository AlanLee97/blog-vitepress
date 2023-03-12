

效果图
![image.png](https://cdn.nlark.com/yuque/0/2021/png/743297/1619495821135-6e8a6987-ed19-4764-9988-dacf395ecde8.png#clientId=u968d7197-a27f-4&from=paste&height=136&id=u1dbd5bfb&name=image.png&originHeight=136&originWidth=121&originalType=binary&size=3184&status=done&style=none&taskId=u63602ae2-acd1-4c7e-bfb2-6ba44393861&width=121)

代码
```javascript
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>优惠券样式</title>
  <style>
      .top {
          width: 100px;
          height: 80px;
          background:
                  radial-gradient(circle at left bottom, transparent 10px, #28A4F2 0) top left /60px 100% no-repeat,
                  radial-gradient(circle at right bottom, transparent 10px, #28A4F2 0) top right /60px 100% no-repeat;
          filter: drop-shadow(0px 3px 3px rgba(0,0,0,.3));
          border-radius: 4px;
      }
      .bottom {
          width: 100px;
          height: 40px;
          background:
                  radial-gradient(circle at left top, transparent 10px, #fff 0) bottom left /60px 100% no-repeat,
                  radial-gradient(circle at right top, transparent 10px, #fff 0) bottom right /60px 100% no-repeat;
          filter: drop-shadow(0px 3px 3px rgba(0,0,0,.3));
          border-radius: 4px;
          position: relative;
          display: flex;
          justify-content: center;
      }
      .bottom::after {
          position: absolute;
          content: "";
          top: -3px;
          width: calc(100% - 24px);
          border-top: 6px dotted #fff;
      }
  </style>
</head>
<body>

<div class="coupon">
  <div class="top"></div>
  <div class="bottom"></div>
</div>

</body>
</html>
```
