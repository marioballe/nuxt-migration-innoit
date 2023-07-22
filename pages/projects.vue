<template>
  <div>
    <div>{{ $t('This is the project page wrapper') }}</div>
    {{ projectCount }}
    <nuxt-child /> <!--Quizas aqui usaria <router-view />-->
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted, onUnmounted } from 'vue';
import {projectStore } from '@/store-lazy/project';

const store = useStore();

store.registerModule('project', projectStore);

onMounted(() => {
  try {
    store.dispatch('project/getMany');
  } catch (e) {
    console.error(e);
  }
});

onUnmounted(() => store.unregisterModule('project'));

const projectCount = store.state.project.count;
</script>

<i18n lang="yaml">
vi:
  This is the project page wrapper: Đây là layout bọc ngoài trang dự án
</i18n>
