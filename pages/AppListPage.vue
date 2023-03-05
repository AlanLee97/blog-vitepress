<template>
  <div class="page--home">
    <h1 class="title">AlanLee の APP</h1>
    <div class="app-list-wrapper">
      <div class="app-item" v-for="(item, index) in appList" :key="'tool_' + index" @click="toPage(item)">
        <div class="app-item-bg"></div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const list = [
  {
    name: '语你晚安',
    poster: '',
    path: '/good-night'
  },
  {
    name: 'AlanLeeの工具箱',
    poster: '',
    path: '',
    link: 'http://alanlee.top/app/toolbox'
  },
  {
    name: 'el-dragmove',
    poster: '',
    path: '',
    link: 'https://github.com/AlanLee97/el-dragmove'
  },
  {
    name: '核酸批量查询',
    poster: '',
    path: '/detection-batch-query',
    link: 'https://github.com/AlanLee97/electron-detection-batch-query'
  },
  {
    name: 'U-UI-D',
    poster: '',
    path: '/u-ui-d',
    link: 'https://gitee.com/U-UI-D'
  },
  {
    name: '熊猫约拍',
    poster: '',
    path: '',
    link: 'https://gitee.com/Panda_Appointment'
  },
  {
    name: '共享作业提醒APP',
    poster: '',
    path: '',
    link: 'https://github.com/AlanLee97/HomeworkReminder'
  },
  {
    name: '更多APP，待上线...',
    poster: '',
    path: ''
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
.page--home {
  padding: 2rem;

  .title {
    margin-bottom: 2rem;
  }
  .app-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .app-item {
      position: relative;
      background-color: #fff;
      border-radius: 1rem;
      border: solid .1rem #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14rem;
      height: 6rem;
      margin-right: 1.6rem;
      margin-bottom: 2rem;
      cursor: pointer;
      box-shadow: .2rem .2rem 1rem #eee;

      &:hover {
        color: #42b883ef;
        border-color: #42b88347;
        filter: drop-shadow(0 0 4rem #42b88325);
      }

      .app-item-bg {
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
        border-radius: 1rem;

        &:hover {
          background-color: #42b88310;
          filter: drop-shadow(0 0 4rem #42b88325);
        }
      }
      &:last-child {
        background: #f8f8f8;
        color: rgba(102, 102, 102, 0.593);
      }
    }
  }
}
</style>
