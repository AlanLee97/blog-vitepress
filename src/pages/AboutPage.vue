<template>
  <div class="page--about">
    <section class="page-content">
      <section class="header">
        <div class="bg"></div>
        <div class="avatar-wrapper">
          <img class="avatar" src="https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1664352491992-avatar/4b46886e-4206-4d16-89c2-64a0e349c9d2.jpeg?x-oss-process=image%2Fresize%2Cm_fill%2Cw_328%2Ch_328%2Fformat%2Cpng" />
        </div>
        <div class="intro-wrapper">
          <div class="nickname">AlanLee</div>
          <div class="sign">努力提升自己，比仰望别人有意义。</div>
          <div class="tag-list">
            <div class="tag-wrapper">
              <span class="icon"><svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-name="UserLocation" class="larkui-icon larkui-icon-user-location icon-svg index-module_size_wVASz" style="width: 16px; min-width: 16px; height: 16px;"><path d="M13.353 4.517a5.664 5.664 0 0 0-1.248-1.808A5.86 5.86 0 0 0 8 1.046c-.783 0-1.542.15-2.258.446a5.82 5.82 0 0 0-1.847 1.216 5.681 5.681 0 0 0-1.248 1.808 5.55 5.55 0 0 0-.46 2.218c0 1.104.265 2.202.783 3.261.417.852 1 1.682 1.735 2.47a13.955 13.955 0 0 0 2.943 2.391.686.686 0 0 0 .7 0c.374-.22 1.69-1.043 2.944-2.39.735-.788 1.317-1.62 1.735-2.47.521-1.059.786-2.155.786-3.26a5.55 5.55 0 0 0-.46-2.219ZM8 13.753c-1.03-.655-4.688-3.247-4.688-7.017 0-1.217.486-2.361 1.37-3.223A4.723 4.723 0 0 1 8 2.171c1.255 0 2.433.476 3.319 1.342a4.47 4.47 0 0 1 1.368 3.222c0 3.77-3.657 6.362-4.687 7.017ZM8 4.11a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm1.238 3.988c-.332.33-.77.512-1.238.512-.467 0-.906-.182-1.237-.512a1.744 1.744 0 0 1-.513-1.238c0-.467.183-.906.513-1.237.33-.331.77-.513 1.237-.513.467 0 .906.182 1.238.513.33.331.512.77.512 1.237 0 .468-.181.907-.512 1.238Z" fill="currentColor" fill-rule="evenodd"></path></svg></span>
              <div>深圳</div>
            </div>
            <div class="tag-wrapper">
              <span class="icon"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" data-name="UserJob" class="larkui-icon larkui-icon-user-job icon-svg index-module_size_wVASz" style="width: 16px; min-width: 16px; height: 16px;"><path d="M635.584 130.88c42.112 0 76.416 34.304 76.416 76.416v18.624l117.504.064c64.64 0 117.312 52.608 117.312 117.312V753.28c0 64.704-52.608 117.312-117.312 117.312h-622.4A117.376 117.376 0 0 1 89.792 753.28V343.296c0-64.64 52.608-117.312 117.312-117.312h117.248v-18.688c0-42.112 34.368-76.416 76.48-76.416H635.52zM518.272 630.272c-55.488 0-102.784-35.84-119.872-85.632H153.088v208.64c0 29.824 24.192 54.016 54.016 54.016h622.4a54.016 54.016 0 0 0 54.016-54.016V544.64H638.08a126.912 126.912 0 0 1-119.872 85.632zm0-190.08a63.36 63.36 0 1 0 0 126.72 63.36 63.36 0 0 0 0-126.72zM829.504 289.28h-622.4a54.016 54.016 0 0 0-54.016 54.016v137.856H393.6A126.848 126.848 0 0 1 518.272 376.96c62.272 0 114.112 45.056 124.8 104.32h240.384V343.232a54.016 54.016 0 0 0-53.952-54.016zm-193.792-94.976H400.896a13.248 13.248 0 0 0-13.12 12.992v18.624H648.64v-18.56a13.184 13.184 0 0 0-12.928-13.056z" fill="currentColor"></path></svg></span>
              <div>前端</div>
            </div>
          </div>
        </div>
      </section>

      <section class="description mt36">
        <div class="poster-wrapper">
          <img class="poster" src="https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1667970762623-9f76e6a8-7afa-4787-9822-96f6e379f616.jpeg?x-oss-process=image%2Fresize%2Cw_2016%2Climit_0%2Finterlace%2C1">
        </div>
        <div class="main-info-wrapper">
          <div class="main-info-item">
            <h3 class="title">AlanLee</h3>
            <div class="content">
              <div class="desc-item">城市 | 深圳</div>
              <div class="desc-item">学校 | 中山大学新华学院</div>
              <div class="desc-item">专业 | 软件工程</div>
              <div class="desc-item">年龄 | {{ new Date().getFullYear() - 1997 }}</div>
              <div class="desc-item">邮箱 | alanlee97@qq.com</div>
            </div>
          </div>
          <div class="main-info-item">
            <h3 class="title">工作</h3>
            <div class="content">
              <div class="desc-item">🧑‍💻 前端开发</div>
              <div class="desc-item"><span class="dot"></span>Vue.js</div>
              <div class="desc-item"><span class="dot"></span>React</div>
              <div class="desc-item"><span class="dot"></span>微信小程序</div>
              <div class="desc-item"><span class="dot"></span>···</div>
              
            </div>
          </div>
          <div class="main-info-item">
            <h3 class="title">生活</h3>
            <div class="content">
              <div class="desc-item">🪴 养花</div>
              <div class="desc-item">🐈 养猫</div>
              <div class="desc-item">🏃‍♂️ 跑步</div>
              <div class="desc-item">💪 健身</div>
              <div class="desc-item">🏝️ 旅游</div>
            </div>
          </div>
        </div>
      </section>

      <section class="skill-tree mt36">
        <div class="title">技能树</div>
        <div class="img-wrapper">
          <img src="https://cdn.nlark.com/yuque/0/2023/jpeg/743297/1678603939562-48f9a74e-75ff-4afd-9fbc-1679d868fc97.jpeg" alt="技能树" />
        </div>
      </section>

      <section class="reading mt36">
        <div class="title-divider">
          <h3 class="title">读书</h3>
          <div class="divider"></div>
        </div>
        <div class="book-list">
          <div class="book-item" v-for="(book, i) in bookList" :key="i + '_' + book.poster">
            <img class="book-poster" :src="book.poster" />
          </div>
        </div>
      </section>

      <section class="other mt36">

      </section>
      

    </section>
  </div>
</template>

<script setup>
const bookList = [
  {
    title: '一往无前',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522167787-9eb1b989-bd78-4861-8757-cba65f2bb9a3.png'
  },
  {
    title: '小米创业思考',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522375926-269d6a6c-e229-49f4-99a2-64df046820b0.png'
  },
  {
    title: '富爸爸穷爸爸',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678521685627-b7d8df9e-5c88-42f7-84e4-0fff1510d55f.png'
  },
  {
    title: '人性的弱点',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522467293-5e63c42a-5913-4b9c-9e69-d11476084969.png'
  },
  {
    title: '软技能：代码之外生存指南',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522694464-36368d33-7e56-4274-8c83-221281b1860f.png'
  },
  {
    title: '亲密关系：通往灵魂的桥梁',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522578250-ce7a76f6-5242-4562-96e1-c7fd3c981b0c.png'
  },
  {
    title: '亲密关系续篇 : 无拘无束的关系',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522643574-7f5183ea-cee9-451c-9670-785987e66df6.png'
  },
  {
    title: '男人来自火星，女人来自金星',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522767724-5021d483-e359-4f83-b49a-2d3a3edd0373.png'
  },
  {
    title: '恋爱心理必修课',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522884457-44bf2ccf-fa85-4698-9397-7251cccb29d9.png'
  },
  {
    title: '价值 : 我对投资的思考',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678522822664-4797163d-d696-4e2d-ac79-a95df78c47fd.png'
  },
  {
    title: '论语',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678523108480-a4b8214b-703e-48d1-8752-52feb1730f59.png'
  },
  { 
    title: '黄渤说话有道',
    poster: 'https://cdn.nlark.com/yuque/0/2023/png/743297/1678523165839-22d0a149-bcaa-49f2-b74f-e197cfd4a0c1.png'
  }
]
</script>

<style lang="scss" scoped>
.page--about {
  .page-content {
    max-width: 1152px;
    margin: auto;
    margin-bottom: 8rem;

    .mt36 {
      margin-top: 3.6rem;
    }

    .header {
      margin-top: 2rem;
      display: flex;
      position: relative;
      background-image: unset;
      .avatar-wrapper {
        .avatar {
          border-radius: 16.4rem;
          width: 16.4rem;
          height: 16.4rem;
        }
      }

      .intro-wrapper {
        margin-left: 5.2rem;
        .nickname {
          font-size: 2.4rem;
          color: #000000aa;
          line-height: 3.2rem;
          font-weight: 600;
          margin-top: 1.2rem;
        }
        .sign {
          font-size: 1.4rem;
          color: #555555cc;
          line-height: 2.2rem;
          font-weight: 400;
          margin-top: 1.2rem;
        }

        .tag-list {
          display: flex;
          font-size: 1.4rem;
          color: #8a8f8D;
          display: flex;
          margin-top: 1.6rem;
          .tag-wrapper {
            display: flex;
            align-items: center;
            margin-right: 1.3rem;
            .icon {
              margin-right: .8rem;
            }
          }
        }
      }
    }

    .description {
      .poster-wrapper {
        .poster {
          width: 100%;
          border-radius: .4rem;
        }
      }

      .main-info-wrapper {
        display: flex;
        margin-top: 3rem;

        .main-info-item {
          width: calc(100% / 3);
          .title {
            font-size: 2.8rem;
            font-weight: bold;
            line-height: 3.8rem;
          }
          .content {
            margin-top: 2rem;
            .desc-item {
              padding-right: 1.8rem;
              margin-bottom: .8rem;
              line-height: 1.72;
              font-size: 1.5rem;
              display: flex;
              align-items: center;

              .dot {
                display: inline-block;
                width: .6rem;
                height: .6rem;
                border-radius: .6rem;
                background-color: #000;
                margin-left: 1.2rem;
                margin-right: .8rem;
              }
            }
          }
        }
      }
    }

    .skill-tree {
      .title {
        font-size: 2.8rem;
        line-height: 3.8rem;
        font-weight: bold;
        margin-bottom: 2rem;
      }
    }

    .reading {
      .title-divider {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        .title {
          color: #000000aa;
          font-size: 1.6rem;
          line-height: 2.4rem;
          font-weight: 500;
        }
        .divider {
          height: 1px;
          background-color: #f6f6f6;
          width: 100%;
          flex: 1;
          margin-left: .8rem;
        }
      }

      .book-list {
        display: flex;
        flex-wrap: wrap;
        .book-item {
          // margin-right: 2rem;
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: calc(100% / 5);
          .book-poster {
            width: 16rem;
            height: 22rem;
            object-fit: contain;
          }
        }
      }
    }
  }

  @media(max-width: 1152px) {
    .page-content {
      .header, .skill-tree, .description, .reading {
        padding: 0 6.4rem;
      }

      .reading {
        // padding: 0 4.8rem;
        .book-list {
          .book-item {
            width: calc(100% / 4);
            .book-poster {
              height: 14rem;
            }
          }
        }
      }
    }
  }

  @media(max-width: 768px) {
    .page-content {
      .header, .skill-tree, .description, .reading {
        padding: 0 6.4rem;
      }

      .reading {
        // padding: 0 4.8rem;
        .book-list {
          .book-item {
            width: calc(100% / 4);
            .book-poster {
              height: 14rem;
            }
          }
        }
      }
    }
  }

  @media(max-width: 640px) {
    .page-content {
      .header, .skill-tree, .description, .reading {
        padding: 0 4.8rem;
      }

      .header {
        z-index: 9;
        flex-direction: column;
        padding: 2rem 4.8rem;
        background-image: url('https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1664352491992-avatar/4b46886e-4206-4d16-89c2-64a0e349c9d2.jpeg?x-oss-process=image%2Fresize%2Cm_fill%2Cw_328%2Ch_328%2Fformat%2Cpng');
        .bg {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          backdrop-filter: blur(2.2rem);
          display: block;
          width: 100%;
          height: 100%;
        }

        .avatar-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .intro-wrapper {
          margin-left: 0;
          .nickname {
            text-align: center;
            color: #fff;
          }
          .sign {
            text-align: center;
            color: #ffffff88;
          }
          .tag-list {
            justify-content: center;
            align-items: center;
            color: #ffffffaa;
          }
        }
      }
      .description {
        padding: 0 4.8rem;
        .main-info-wrapper {
          flex-direction: column;
          .main-info-item {
            margin-top: 2rem;
            width: 100%;
          }
        }
      }
      .reading {
        padding: 0 4.8rem;
        .book-list {
          .book-item {
            width: calc(100% / 3);
            .book-poster {
              // width: 12rem;
              height: 8rem;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 640px) {
  .page {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .page {
    padding: 0 64px;
  }
}
</style>
