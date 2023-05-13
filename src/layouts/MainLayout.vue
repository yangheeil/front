<template>
  <q-layout view="hHh lpR fFr">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> WithJK </q-toolbar-title>

        <q-btn icon="menu" @click="toggleRightDrawer" class="glossy" dense />
      </q-toolbar>
    </q-header>

    <q-drawer :show-if-above="!$q.screen.xs" v-model="drawerRight" side="right" elevated :breakpoint="0" :width="250">
      <q-list>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
      <div class="q-px-sm q-py-sm q-gutter-x-sm">
        <q-btn to="/login" color="white" text-color="black" label="로그인" rounded class="text-caption glossy" />
        <q-btn to="/signup" color="primary" label="회원가입" rounded class="text-caption glossy" />
        <q-toggle
          v-model="darkmode"
          checked-icon="dark_mode"
          color="primary"
          size="lg"
          unchecked-icon="wb_sunny"
          @click="toggleDarkMode"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();

const darkmode = ref(false);
const drawerRight = ref(false);
const essentialLinks = linksList;
const toggleRightDrawer = () => {
  drawerRight.value = !drawerRight.value;
};
const toggleDarkMode = () => $q.dark.toggle();
</script>

<script>
const linksList = [
  {
    title: 'Q&A',
    caption: '기술, 커리어, 기타',
    icon: 'question_answer',
    to: '/questions',
  },
  {
    title: '지식',
    caption: 'Tech, 팁, 칼럼',
    icon: 'school',
    to: '/knowledge',
  },
  {
    title: '커뮤니티',
    caption: '사는얘기, 스터디',
    icon: 'groups',
    to: '/community',
  },
  {
    title: '공지사항',
    caption: '공지사항',
    icon: 'campaign',
    to: '/notice',
  },
];
</script>

<style lang="scss" scoped>
</style>


