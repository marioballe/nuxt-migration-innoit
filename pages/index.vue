<template>
  <div :class="abc">
    <transition name="slide-fade" mode="out-in">
      <el-button
        v-if="locale === 'en'"
        key="en-button"
        size="mini"
        type="primary"
        @click="changeLocale('vi')"
      >
        {{ $t('Change language') }}
      </el-button>
      <el-button
        v-else
        key="vi-button"
        size="mini"
        type="danger"
        @click="changeLocale('en')"
      >
        {{ $t('Change language') }}
      </el-button>
    </transition>
    <div>
      <span class="text-primary-300"> {{ $t('Hello world!') }}</span>
      <span class="text-warning-700">{{ $t('Hello world!') }}</span>
    </div>
    <ExampleBase />
  </div>
</template>

<script setup>
import { useHead } from 'vue-head';
import { useI18n, useStore } from 'vue-i18n';
import ExampleBase from './ExampleBase.vue'; // Entiendo que el ExampleBase estaria en el mismo dir

const store = useStore();
const locale = store.getters.locale;

const abc = {
  color: '--color-red',
};

useHead({
  title: useI18n().t('Home page'),
});

function changeLocale(newLocale) {
  store.dispatch('setLocale', newLocale);
}
</script>

<i18n lang="yaml">
vi:
  Home page: Trang chủ
  Hello world!: Xin chào thế giới!
  Change language: Đổi ngôn ngữ
</i18n>