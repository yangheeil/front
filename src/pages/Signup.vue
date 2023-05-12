<template>
  <q-page class="text-center flex flex-center q-pa-xl">
    <div style="max-width: 1023px" class="q-gutter-y-md column">
      <div class="text-h5 text-weight-bold">WithJK에 오신것을 환영합니다.</div>
      <div class="text-subtilte1">WithJK는 오징어 꼴뚜기 대구명태 거북이 입니다.</div>
      <div class="line">SNS 회원가입</div>
      <div class="row q-gutter-x-md">
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/google-svg.svg" style="width: 20px" /></q-btn>
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/naver-svg.svg" style="width: 20px" /></q-btn>
        <q-btn class="col q-py-sm q-px-sm target"><img src="~assets/kakaotalk-svg.svg" style="width: 20px" /></q-btn>
      </div>
      <div class="line">회원가입에 필요한 기본정보를 입력해주세요.</div>
      <q-input v-model="userid" outlined type="text" label="아이디" />
      <q-input v-model="password" outlined :type="isPwd ? 'password' : 'text'" label="비빌번호">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
      <q-input v-model="email" outlined type="email" label="이메일" />
      <q-input v-model="username" outlined type="text" label="실명" />
      <q-input v-model="usernickname" outlined type="text" label="닉네임" />
      <div class="row flex flex-center">
        <router-link to="#" style="text-decoration-line: none" class="col">서비스이용약관</router-link>
        <q-separator vertical inset size="2px"></q-separator>
        <router-link to="#" style="text-decoration-line: none" class="col">개인정보처리방침</router-link>
      </div>
      <q-btn
        color="primary"
        label="회원가입"
        class="glossy"
        :disable="password && userid && username && email && usernickname"
      />
      <div>
        이미 회원이신가요?
        <router-link to="/login">로그인</router-link>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
const password = ref('');
const userid = ref('');
const username = ref('');
const email = ref('');
const usernickname = ref('');
const isPwd = ref(true);
</script>

<style lang="scss" scoped>
</style>
