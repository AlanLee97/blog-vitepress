<template>
  <div class="page--knowledge">
    <section class="page-content">
      <div class="list-wrapper">
        <div class="list-item card" v-for="(item, i) in knowledgeList" :key="item.index + '_' + i" @click="toPage(item.link)">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
    </section>


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
  position: relative;
  padding: 0 24px;
  .page-content {
    max-width: 1152px;
    margin: auto;
  }


  .list-wrapper {
    display: flex;
    flex-wrap: wrap;

    .list-item {
      margin-right: 1.6rem;
      &:nth-child(4n) {
        margin-right: 0;
      }
      margin-bottom: 2rem;
      cursor: pointer;

      .title {
        font-size: 1.8rem;
        line-height: 2;
        margin-bottom: 1rem;
        font-weight: bold;
      }
    }

    .card {
      border-radius: 1.2rem;
      background-color: #f6f6f6;
      padding: 2.4rem;
      width: calc((100% - 60px) / 4);
      border: #00EAFF00 1px solid;
      &:hover {
        border: #00EAFF 1px solid;
        background-color: #fff;
      }
    }
  }

  @media (max-width: 960px) {
    .list-wrapper {
      .list-item {
        &:nth-child(3n) {
          margin-right: 0;
        }
        &:nth-child(4n) {
          margin-right: 1.6rem;
        }
      }
      .card {
        width: calc((100% - 40px) / 3);
      }
    }
  }

  @media (max-width: 640px) {
    .list-wrapper {
      .list-item {
        margin-right: 0 !important;
      }
      .card {
        width: 100%;
        min-width: 28rem;
      }
    }
  }
}


@media (min-width: 640px) {
  .page--knowledge {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .page--knowledge {
    padding: 0 64px;
  }
}



</style>
