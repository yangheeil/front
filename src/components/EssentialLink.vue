<template>
  <q-item clickable tag="a" :to="to">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label lines class="text-subtitle1">{{ title }}</q-item-label>
      <q-item-label caption lines>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  caption: {
    type: String,
    default: '',
  },

  to: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
});
</script>
