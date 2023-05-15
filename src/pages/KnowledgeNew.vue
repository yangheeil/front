<template>
  <q-page class="q-pa-md">
    <div
      style="max-width: 723px"
      class="column q-mx-auto"
      :class="$q.screen.xs ? 'q-gutter-y-sm' : 'q-gutter-y-md'"
    >
      <div class="text-h5 flex flex-center text-weight-medium">
        지식 글 작성하기
      </div>
      <div class="q-gutter-y-xs">
        <div class="text-weight-medium">토픽</div>
        <q-select
          outlined
          v-model="select"
          :options="options"
          dense
          options-dense
          class="text-subtitle1"
          popup-content-class="text-subtitle1"
        >
        </q-select>
      </div>
      <div class="q-gutter-y-xs">
        <div class="text-weight-medium">제목</div>
        <q-input
          outlined
          dense
          v-model="title"
          placeholder="제목을 입력해주세요"
          class="text-subtitle1"
        >
          <template v-if="title" v-slot:append>
            <q-icon
              name="cancel"
              @click.stop.prevent="title = ''"
              class="cursor-pointer"
              size="sm"
            />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-xs" style="max-width: inherit">
        <div class="text-weight-medium">본문</div>
        <q-editor
          v-model="contents"
          min-height="300px"
          :definitions="{
            image: {
              icon: 'image',
            },
          }"
          :toolbar="[
            [
              {
                label: $q.lang.editor.fontSize,
                icon: $q.iconSet.editor.fontSize,
                fixedLabel: false,
                fixedIcon: true,
                list: 'no-icons',
                options: [
                  'size-1',
                  'size-2',
                  'size-3',
                  'size-4',
                  'size-5',
                  'size-6',
                  'size-7',
                ],
              },
            ],
            ['left', 'center', 'right', 'justify'],
            [
              'bold',
              'italic',
              'strike',
              'underline',
              'subscript',
              'superscript',
            ],
            ['quote', 'unordered', 'ordered'],
            ['token', 'hr', 'link', 'custom_btn'],
            ['viewsource', 'fullscreen', 'image'],
          ]"
        ></q-editor>
      </div>
      <div class="flex flex-center q-gutter-x-md">
        <q-btn class="q-px-lg" label="취소" to="/knowledge" />
        <q-btn class="q-px-lg" color="primary" label="등록" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('');
const contents = ref('');
const select = ref('토픽을 선택해주세요');
const options = ['Tech', '팁', '칼럼'];
</script>

<style lang="scss" scoped>
</style>
