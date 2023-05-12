<template>
  <q-page class="text-center flex flex-center q-pa-xl">
    <div style="max-width: 1023px" class="q-gutter-y-md column">
      <div class="text-h5 text-weight-bold">WithJK에 오신것을 환영합니다.</div>
      <div class="text-subtilte1">WithJK는 오징어 꼴뚜기 대구명태 거북이 입니다.</div>
      <div class="line">SNS 로그인</div>
      <div class="row q-gutter-x-md">
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/google-svg.svg" style="width: 20px" /></q-btn>
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/naver-svg.svg" style="width: 20px" /></q-btn>
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/kakaotalk-svg.svg" style="width: 20px" /></q-btn>
      </div>
      <div class="line">WithJK 아이디로 로그인</div>
      <q-input v-model="userid" outlined type="text" label="아이디" />
      <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" label="비빌번호">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <div class="flex justify-end">
        <router-link to="#" style="text-decoration-line: none">계정찾기</router-link>
      </div>
      <q-btn color="primary" label="로그인" class="glossy" :disable="password && userid" />
      <div>
        아직 회원이 아닌신가요?
        <router-link to="/signup">회원가입</router-link>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const password = ref('');
const userid = ref('');
const isPwd = ref(true);
</script>


<style lang="scss" scoped>
</style>
