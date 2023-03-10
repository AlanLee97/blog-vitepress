<template>
  <div class="page--apps">
    <div class="app-list-wrapper">
      <div class="list-item app-item" v-for="(item, index) in appList" :key="'tool_' + index" @click="toPage(item)">
        <div class="poster-wrapper">
          <img src="../assets/images/poster.png" />
        </div>
        <div class="card-content">
          <h3 class="title">
            {{ item.name }}
          </h3>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { ref } from 'vue'





const list = [
  {
    name: '语你晚安',
    poster: '',
    desc: '订阅晚安然后想你推送「晚安」的小程序',
    link: '/good-night'
  },
  {
    name: 'AlanLeeの工具箱',
    poster: '',
    desc: '一些我自己常用的工具',
    link: 'http://alanlee.top/app/toolbox'
  },
  {
    name: 'el-dragmove',
    poster: '',
    desc: '我开源的轻量级的元素拖动js库',
    link: 'https://github.com/AlanLee97/el-dragmove'
  },
  {
    name: '核酸批量查询',
    poster: '',
    desc: '一个PC端的核酸批量查询工具',
    path: '/detection-batch-query',
  },
  {
    name: 'U-UI-D',
    poster: '',
    desc: '大学毕业设计项目',
    link: 'https://gitee.com/U-UI-D'
  },
  {
    name: '熊猫约拍',
    poster: '',
    desc: '大学参赛项目',
    link: 'https://gitee.com/Panda_Appointment'
  },
  {
    name: '共享作业提醒APP',
    poster: '',
    desc: '大学参赛项目',
    link: 'https://github.com/AlanLee97/HomeworkReminder'
  },
  {
    name: '更多APP，待上线...',
    poster: '',
    desc: '',
    link: ''
  }
]

const appList = ref(list)

function toPage(item) {
  // if (item.path) {
  //   $router.push({path: item.path})
  // } else if (item.link) {
  //   window.open(item.link)
  // }
}
</script>

<style lang="scss" scoped>
.page--apps {
  // padding: 2rem;
  max-width: 1152px;
  margin: auto;
  margin-top: 10rem;

  .title {
    margin-bottom: 2rem;
  }
  .app-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .list-item {
      margin-right: 16px;
      margin-bottom: 16px;
      cursor: pointer;
    }

    .app-item {
      border: 1px solid #eee;
      background-color: #fff;
      border-radius: 8px;
      width: 28.2rem;
      height: 27.6rem;
      overflow: hidden;
      &:hover {
        border-color: #00EAFF;
      }
      .poster-wrapper {
        width: 100%;
        height: 15.9rem;
      }

      .card-content {
        padding: 1rem;

      }
    }
  }
}
</style>
