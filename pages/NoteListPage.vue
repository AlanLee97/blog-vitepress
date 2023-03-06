<template>
  <div class="page--note-list">
    <h1 class="title-bar">最近更新</h1>
    <div class="note-list-wrapper">
      <div class="note-list-item" v-for="(note, i) in noteList" :key="'note_' + i" @click="toDetail(note.link)">
        <div>
          <h4 class="note-title">{{ note.title }}</h4>
          <div class="note-desc">{{ note.desc }}</div>
          <div class="note-date">{{ formatDate(note.updateTime) }}</div>
        </div>
        <div class="note-poster" v-if="note.poster">
          <img :src="note.poster">
        </div>
      </div>
    </div>
    <Pagination :total="noteList.length" />
  </div>
</template>

<script setup>

import { useData, useRouter } from 'vitepress'
import Pagination from '../components/Pagination.vue';
const data = useData()
const router = useRouter()
// console.log(data);

const noteList = data.theme.value.localData.files
console.log('alan->noteList', noteList)


function toDetail(path) {
  console.log('alan->path', path)
  if(path) {
    router.go(path)
  }
}

function formatDate(date) {
  date = new Date(date);
  return date.toISOString().replace('T', ' ').split('.')[0]
}
</script>

<style lang="scss" scoped>
.page--note-list {
  width: 100%;

  .title-bar {
    line-height: 2;
    margin-bottom: 20px;
  }
  .note-list-wrapper {
    width: 100%;
    .note-list-item {
      width: 100%;
      padding: 1.2rem;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eee;
      cursor: pointer;
      &:hover {
        background-color: #eeeeee55;
      }
      .note-title {
        margin-bottom: 1.2rem;
        line-height: 2;
      }
      .note-poster {
        max-width: 30%;
      }
      .note-date {
        font-size: 1.2rem;
        color: #00000088;
        margin-top: 1rem;
      }
    }
  }
}
</style>
