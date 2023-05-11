<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> WithJK </q-toolbar-title>

        <q-btn icon="menu" @click="toggleRightDrawer" class="glossy" dense />
      </q-toolbar>
    </q-header>

    <q-drawer side="right" v-model="drawerRight" elevated>
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title> WithJK </q-toolbar-title>
        <q-btn
          icon="close"
          @click="toggleRightDrawer"
          class="bg-primary glossy"
          dense
        />
      </q-toolbar>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-separator></q-separator>
      <div class="q-px-md q-py-sm q-gutter-md">
        <q-btn
          color="white"
          text-color="black"
          label="로그인"
          rounded
          class="text-caption glossy"
        />
        <q-btn
          color="primary"
          label="회원가입"
          rounded
          class="text-caption glossy"
        />
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
const toggleRightDrawer = () => (drawerRight.value = !drawerRight.value);
const toggleDarkMode = () => $q.dark.toggle();
</script>

<script>
const linksList = [
  {
    title: 'Q&A',
    caption: '기술, 커리어, 기타',
    icon: 'question_answer',
    to: '',
  },
  {
    title: '지식',
    caption: 'Tech, 팁, 칼럼',
    icon: 'school',
    to: '',
  },
  {
    title: '커뮤니티',
    caption: '사는얘기, 스터디',
    icon: 'groups',
    to: '',
  },
  {
    title: '공지사항',
    caption: '공지사항',
    icon: 'campaign',
    to: '',
  },
];
</script>


