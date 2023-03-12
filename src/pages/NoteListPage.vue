<template>
  <div class="page--note-list page">
    <section class="page-content">
      <h1 class="title-bar">最近更新</h1>
      <div class="note-list-wrapper">
        <div class="note-list-item" v-for="(note, i) in currentNoteList" :key="'note_' + i" @click="toDetail(note.link)">
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
      <Pagination :total="noteList.length" @change="handlePageChange" />
    </section>
  </div>
</template>

<script setup>

import { useData, useRouter } from 'vitepress'
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue';

const data = useData()
const router = useRouter()

const noteList = ref(data.theme.value.localData.files)
const currentNoteList = ref([])
currentNoteList.value = noteList.value.slice(0, 5)

function toDetail(path) {
  if(path) {
    path = (data.site.value.base || '') + path
    path = path.replaceAll('//', '/')
    router.go(path)
  }
}

function formatDate(date) {
  date = new Date(new Date(date).getTime() + 8 * 60 * 60 * 1000);
  return date.toISOString().replace('T', ' ').split('.')[0]
}

function handlePageChange(i) {
  let start = i * 5
  currentNoteList.value = noteList.value.slice(start, start + 5)
}
</script>

<style lang="scss" scoped>
.page--note-list {
  width: 100%;

  .page-content {
    max-width: 1152px;
    margin: auto;
  }

  .title-bar {
    line-height: 2;
    margin-bottom: 20px;
    font-size: 2.8rem;
    font-weight: bold;
  }
  .note-list-wrapper {
    width: 100%;
    .note-list-item {
      width: 100%;
      padding: 1.2rem;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eee;
      // height: 160px;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        background-color: #eeeeee55;
      }
      .note-title {
        margin-bottom: 1.2rem;
        line-height: 2;
        font-size: 1.8rem;
        font-weight: bold;
      }
      .note-poster {
        max-width: 30%;
      }
      .note-desc {
        word-break: break-all;
        overflow: hidden;
      }
      .note-date {
        font-size: 1.2rem;
        color: #00000088;
        margin-top: 1rem;
      }
    }
  }
}

@media (max-width: 640px) {
  .page {
    padding: 0 36px;
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
