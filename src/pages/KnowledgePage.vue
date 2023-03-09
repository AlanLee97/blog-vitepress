<template>
  <div class="VPHero page--knowledge">

    <div class="list-wrapper">
      <div class="list-item card" v-for="(item, i) in knowledgeList" :key="item.index + '_' + i" @click="toPage(item.link)">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRouter, useData } from 'vitepress';

const router = useRouter()
const data = useData()
const knowledgeList = [
  {
    id: Math.random(),
    title: '前端知识',
    icon: '',
    desc: '记录前端相关知识',
    updateTime: '',
    link: '/knowledges/frontend/index'
  },
  {
    id: Math.random(),
    title: '技术知识',
    icon: '',
    desc: '记录技术相关知识',
    updateTime: '',
    link: '/knowledges/tech/index'
  }
]

function toPage(path = '') {
  if(path) {
    path = (data.site.value.base || '') + path
    path = path.replaceAll('//', '/')
    console.log('alan->toPage path', path)
    router.go(path)
  }

}
</script>

<style lang="scss" scoped>
.page--knowledge {
  max-width: 1152px;
  margin: auto;
  margin-top: 10rem;


  .list-wrapper {
    display: flex;
    flex-wrap: wrap;

    .list-item {
      margin-right: 16px;
      cursor: pointer;

      .title {
        font-size: 1.8rem;
        line-height: 2;
        margin-bottom: 1rem;
        font-weight: bold;
      }
    }

    .card {
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 1rem;
      width: 240px;
      &:hover {
        border-color: #00EAFF;
      }
    }
  }
}
</style>
