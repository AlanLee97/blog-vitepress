<template>
  <div class="cpn--pagination">
    <div class="list-wrapper pc center-v">
      <div class="center-v">当前页：{{(currentPage + 1) + ` / ${getTotalPage()}`}}</div>
      <div class="center-v">
        <div class="list-item fix-btn" v-show="currentPage !== 0" @click="setCurrentPage(0)">首页</div>
        <div class="list-item fix-btn" v-show="currentPage > 0" @click="setCurrentPage(currentPage - 1)">上一页</div>
        
        <!-- <div class="list-item" :class="[currentPage === (i) ? 'current-item' : '']" 
        v-for="(page, i) in getTotalPage(props.total)" 
        :key="'cpn_pagination_i_' + i" @click="setCurrentPage(i)">{{ page }}</div> -->

        <div class="list-item fix-btn" v-show="currentPage < getTotalPage() - 1" @click="setCurrentPage(currentPage + 1)">下一页</div>
        <div class="list-item fix-btn" v-show="currentPage !== getTotalPage() - 1" @click="setCurrentPage(getTotalPage() - 1)">尾页</div>
      </div>
    </div>
    <div class="list-wrapper mobile">
      <div class="center-v current-page">
        当前页：{{(currentPage + 1) + ` / ${getTotalPage()}`}}
      </div>
      <div class="center-v">
        <div class="list-item" v-show="currentPage !== 0" @click="setCurrentPage(0)">首页</div>
        <div class="list-item" v-show="currentPage > 1" @click="setCurrentPage(currentPage - 1)">上一页</div>
        <div class="list-item" v-show="currentPage < getTotalPage() - 1" @click="setCurrentPage(currentPage + 1)">下一页</div>
        <div class="list-item" v-show="currentPage !== getTotalPage() - 1" @click="setCurrentPage(getTotalPage() - 1)">尾页</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['change'])

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

function getTotalPage(count = props.total) {
  return Math.ceil(count / props.size)
}

console.log('total', props.total);

function setCurrentPage(i) {
  if(i > getTotalPage() - 1) return;
  if(i < 0) return;
  currentPage.value = i
  emit('change', i)
  window && window.scrollTo(0, 0)
}
</script>

<style lang="scss" scoped>
.cpn--pagination {
  margin: 2rem 0;

   .mobile {
     display: none;
   }

   .pc {
     justify-content: space-between;
   }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;

    .list-item {
      margin-right: 1rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 3rem;
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
    .fix-btn {
      width: fit-content;
      max-width: fit-content;
      min-width: fit-content;
      padding: 0 1rem;
      margin-bottom: 0;
      margin-left: 0;
    }

    .current-item {
      color: #00EAFF;
      border-color: #00EAFF;
    }
  }
}

.center-v {
  display: flex;
  align-items: center;
}

@media (min-width: 640px) {
.cpn--pagination {
    .mobile {
      display: none;
    }
  }
}

@media (max-width: 640px) {
  .cpn--pagination {
    .mobile {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .current-page {
        margin-bottom: 1.2rem;
      }
      .list-item {
        width: fit-content;
        max-width: fit-content;
        min-width: fit-content;
        padding: 0 1rem;
        margin-bottom: 0;
        margin-left: 0;
      }
    }
    .pc {
      display: none;
    }
  }
}
</style>
