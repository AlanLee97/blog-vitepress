<template>
  <div class="VPHero page--knowledge">

    <div class="list-wrapper">
      <div class="list-item card" v-for="(item, i) in knowledgeList" :key="item.index + '_' + i">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
const knowledgeList = [
  {
    id: Math.random(),
    title: '前端知识',
    icon: '',
    desc: '111',
    updateTime: ''
  },
  {
    id: Math.random(),
    title: '技术知识',
    icon: '',
    desc: '222',
    updateTime: ''
  }
]
</script>

<style lang="scss" scoped>
.page--knowledge {
  max-width: 1152px;
  margin: auto;

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
      }
    }

    .card {
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 1rem;
      width: 240px;
    }
  }
}
</style>
