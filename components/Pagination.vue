<template>
  <div class="cpn--pagination">
    <div class="list-wrapper">
      <div class="list-item" :class="[currentPage === (i) ? 'current-item' : '']" 
      v-for="(page, i) in getTotalPage(props.total)" 
      :key="'cpn_pagination_i_' + i" @click="setCurrentPage(i)">{{ page }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  curent: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 5
  }
})

const currentPage = ref(0)

function getTotalPage(count = 0) {
  return Math.ceil(count / props.size)
}

function setCurrentPage(i) {
  currentPage.value = i
}
</script>

<style lang="scss" scoped>
.cpn--pagination {
  margin: 2rem 0;

  .list-wrapper {
    display: flex;

    .list-item {
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 3rem;
      border: 1px solid #eee;
      border-radius: .4rem;
      cursor: pointer;
      &:hover {
        border-color: #00EAFF;
        color: #00EAFF;
      }
    }

    .current-item {
      color: #00EAFF;
      border-color: #00EAFF;
    }
  }
}
</style>
