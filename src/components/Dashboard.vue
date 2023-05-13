<template>
  <q-item v-for="a in 15" :key="a" dense>
    <q-item-section>
      <q-list>
        <q-item dense class="flex items-center">
          <router-link
            to="#"
            style="text-decoration-line: none"
            class="text_target"
          >
            이제부터시작
          </router-link>
        </q-item>
        <q-item clickable dense class="flex items-center">
          <q-item-label>앞으로 어떻게 코딩을 할까요?</q-item-label>
        </q-item>
        <q-item clickable dense class="flex items-center">
          <q-item-label caption lines="2"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            cum expedita dignissimos facilis. Ipsum delectus nesciunt, rerum
            vero voluptatibus saepe consectetur officia eum vitae sit a expedita
            quibusdam voluptatem. Tempore!</q-item-label
          >
        </q-item>
      </q-list>
    </q-item-section>
  </q-item>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
