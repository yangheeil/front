<template>
  <router-view />
</template>

<script setup>
</script>

<style lang="scss">
a {
  text-decoration-color: none;
  color: $primary;
}
.line {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: $grey-7;
}
.line::before {
  content: '';
  flex-grow: 1;
  background-color: $grey-7;
  height: 1px;
  line-height: 0px;
  margin-right: 14px;
}
.line::after {
  content: '';
  flex-grow: 1;
  background-color: $grey-7;
  height: 1px;
  line-height: 0px;
  margin-left: 14px;
}
</style>
