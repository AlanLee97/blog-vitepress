<template>
  <div class="page--apps">
    <div class="app-list-wrapper">
      <div class="list-item app-item" v-for="(item, index) in appList" :key="'tool_' + index" @click="toPage(item)">
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
      border-radius: 4px;
      padding: 1rem;
      width: 24rem;
      height: 12rem;
      &:hover {
        border-color: #00EAFF;
      }
    }
  }
}
</style>
