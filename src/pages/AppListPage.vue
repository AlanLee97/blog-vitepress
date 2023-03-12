<template>
  <div class="page--apps page">
    <section class="page-content">
      <div class="app-list-wrapper">
        <div
          class="list-item app-item"
          v-for="(item, index) in appList"
          :key="'tool_' + index"
          @click="toPage(item.link)"
        >
          <div class="poster-wrapper">
            <img v-if="item.poster" class="poster" :src="item.poster" />
            <div v-else class="poster-bgcolor" :style="{backgroundColor: getRandomBgColor()}">
              <div class="name-poster">
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="card-content">
            <h3 class="title">
              {{ item.name }}
            </h3>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useData, useRouter } from "vitepress";
import { ref } from "vue";

const data = useData();


const router = useRouter();

const bgColors = [
  '#edf8ef',
  '#ecf6f9',
  '#fff2ef'
]

const list = [
  {
    name: "语你晚安",
    poster: "https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669559110991-734a4ac2-3149-421e-b148-8a2e7f813e26.jpeg",
    desc: "订阅晚安然后向你推送「晚安」的小程序",
    link: "apps/语你晚安",
  },
  {
    name: "AlanLeeの工具箱",
    poster: "",
    desc: "一些我自己常用的工具",
    link: "http://alanlee.top/app/toolbox",
  },
  {
    name: "el-dragmove",
    poster: "https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669554072209-49076c99-be57-495d-9704-6bf561387ba5.jpeg",
    desc: "我开源的轻量级的元素拖动js库",
    link: "https://github.com/AlanLee97/el-dragmove",
  },
  {
    name: "核酸批量查询",
    poster: "https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669555078763-6d79a003-dfc5-4e78-81b3-486fbb6d6341.jpeg",
    desc: "一个PC端的核酸批量查询工具",
    link: "apps/核酸批量查询",
  },
  {
    name: "U-UI-D",
    poster: "",
    desc: "大学毕业设计项目",
    link: "https://gitee.com/U-UI-D",
  },
  {
    name: "熊猫约拍",
    poster: "https://cdn.nlark.com/yuque/0/2022/jpeg/743297/1669559789853-c59d2bd6-4353-4f84-a4d2-263333f8763f.jpeg",
    desc: "大学参赛项目",
    link: "https://gitee.com/Panda_Appointment",
  },
  {
    name: "共享作业提醒APP",
    poster: "",
    desc: "大学参赛项目",
    link: "https://github.com/AlanLee97/HomeworkReminder",
  },
  {
    name: "更多APP，待上线...",
    poster: "",
    desc: "",
    link: "",
  },
];

const appList = ref(list);

function getBase() {
  return data.site.value.base || '';
}

function toPage(link = '') {
  if(link) {
    if(link.startsWith('http')) {
      window.open(link)
    } else {
      link = (getBase() + link + '').replaceAll('//', '/')
      router.go(link)
    }
  }
}

function getRandomBgColor() {
  let bgcolor = bgColors[Math.floor(Math.random() * bgColors.length)]
  console.log(bgcolor);
  return bgcolor
}
</script>

<style lang="scss" scoped>
.page--apps {
  margin: auto;

  .page-content {
    max-width: 1152px;
    margin: auto;
  }

  .title {
    margin-bottom: 2rem;
  }
  .desc {
    color: #00000088;
    font-size: 1.4rem;
  }
  .app-list-wrapper {
    max-width: 1152px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    .list-item {
      margin-right: 1.6rem;
      margin-bottom: 1.6rem;
      cursor: pointer;
    }

    .app-item {
      border: 1px solid #eee;
      background-color: #fff;
      border-radius: 8px;
      width: calc((100% - 66px) / 4);
      height: 26rem;
      overflow: hidden;
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover {
        border-color: #00eaff;

        .title {
          color: var(--vp-x-theme-primary-color);
        }
      }
      .poster-wrapper {
        width: 100%;
        height: 14rem;

        .poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .poster-bgcolor {
          width: 100%;
          height: 100%;

          .name-poster {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
            font-size: 2.4rem;
            font-weight: bold;
            padding: 2rem;
            font-style: oblique;
            color: #fff;
            line-height: 1.6;
            // text-shadow: #00000088 1px 2px 8px;
          }
        }
      }

      .card-content {
        padding: 1rem;
        .title {
          font-weight: 600;
          font-size: 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;

          &:hover {
            color: var(--vp-x-theme-primary-color);
          }
        }
      }
    }
  }

  @media(max-width: 960px) {
    .app-list-wrapper {
      .app-item {
        // margin: auto !important;
        margin-bottom: 2rem !important;
        width: calc((100% - 44px) / 3);
        &:nth-child(4n) {
          margin-right: 1.6rem;
        }
        &:nth-child(3n) {
          margin-right: 0rem;
        }
      }
    }
  }


  @media(max-width: 768px) {
    .app-list-wrapper {
      .app-item {
        display: flex;
        flex-direction: row;
        min-width: 80vw;
        margin: auto !important;
        margin-bottom: 2rem !important;
        padding: 1.2rem;
        max-height: 18rem;

        .poster-wrapper {
          width: 22rem;
          min-width: 22rem;
          max-width: 22rem;
          // height: 12rem;
          align-self: stretch;
          height: 100%;
          border-radius: .8rem;
          overflow: hidden;

          .poster {
            height: 100%;
          }
        }

        .card-content {
          padding: 0 1rem;
        }
      }
    }
  }

  @media(max-width: 480px) {
    .app-list-wrapper {
      .app-item {
        .poster-wrapper {
          width: 12rem;
          min-width: 12rem;
          max-width: 12rem;
          // height: 12rem;
          align-self: stretch;
          height: 100%;
          border-radius: .8rem;
          overflow: hidden;

          .poster {
            height: 100%;
          }
        }

        .card-content {
          padding: 0 1rem;
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
    margin-top: 10rem;
  }
}
</style>
