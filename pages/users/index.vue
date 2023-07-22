<template>
  <div>
    {{ $t('This is the users page!') }}
  </div>
</template>

<script setup>
import { useHead } from 'vue-head';
import { useI18n } from 'vue-i18n';

useHead({
  title: useI18n().t('User page'),
});
</script>

<i18n lang="yaml">
vi:
  User page: Trang người dùng
  This is the users page!: Đây là trang người dùng!
</i18n>
