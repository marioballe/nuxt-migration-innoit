<template>
  <div>
    {{ $t('This is the projects page!') }}
  </div>
</template>

<script setup>
import { useHead } from 'vue-head';
import { useI18n } from 'vue-i18n';

useHead({
  title: useI18n().t('Project page'),
});
</script>

<i18n lang="yaml">
vi:
  Project page: Trang sản phẩm
  This is the projects page!: Đây là trang dự án!
</i18n>
