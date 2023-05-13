<template>
  <q-page class="q-pa-md">
    <div style="max-width: 723px" class="column q-mx-auto" :class="$q.screen.xs ? 'q-gutter-y-sm' : 'q-gutter-y-md'">
      <q-banner rounded :class="$q.dark.isActive ? 'target' : 'bg-grey-4'">
        <div class="text-subtitle1 text-weight-bold text-left">지식</div>
        <div class="text-caption text-left">지식과 새로운 아이디어</div>
      </q-banner>
      <div class="row q-gutter-y-sm text-grey-6 justify-between" v-if="!$q.screen.xs">
        <div>
          <q-btn flat icon="edit" class="bg-primary" color="white" label="질문하기" />
        </div>
        <div class="q-gutter-x-sm">
          <q-btn v-for="(a, i) in MenuBtn" :key="i" flat :label="a" />
        </div>
        <div>
          <q-select color="teal" outlined v-model="SortSelect" :options="SortBtn" dense>
            <template v-slot:prepend>
              <q-icon name="sort" />
            </template>
          </q-select>
        </div>
      </div>
      <div class="text-grey-6 q-gutter-y-xs" v-if="$q.screen.xs">
        <div class="q-gutter-x-sm">
          <q-btn v-for="(a, i) in MenuBtn" :key="i" flat :label="a" />
        </div>
        <div class="q-gutter-x-sm">
          <q-btn flat icon="edit" class="bg-primary float-left" color="white" label="작성하기" />
          <q-btn outline icon="sort" class="float-right">
            <q-menu>
              <q-list>
                <q-item clickable v-for="(a, i) in SortBtn" :key="i">
                  <q-time-section>
                    <q-item-label>{{ a }}</q-item-label>
                  </q-time-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn outline icon="search" class="float-right" @click="toggleSearchScr" />
        </div>
      </div>
      <q-separator></q-separator>
      <div v-if="searchScr || !$q.screen.xs">
        <q-input rounded outlined dense v-model="searchText" icon="search" label="검색">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div>
        <q-list separator bordered>
          <Dashboard></Dashboard>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import Dashboard from 'components/Dashboard.vue';
const SortBtn = ['최신순', '추천순', '답변순', '조회순'];
const SortSelect = ref('최신순');
const MenuBtn = ['Tech', '팁', '칼럼', '전체'];
const $q = useQuasar();
console.log('$q.screen', $q.screen);
const searchText = ref('');
const searchScr = ref(false);

const toggleSearchScr = () => {
  searchScr.value = !searchScr.value;
};
</script>

<style lang="scss" scoped>
</style>
