<template>
  <h1 class="text-4xl font-bold font-display">{{ i18n.t("about") }}</h1>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const i18n = useI18n();
</script>
