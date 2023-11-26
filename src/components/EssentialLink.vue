<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: { name: 'explore' }
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <RouterLink
    class="link | flex no-wrap items-center justify-start text-grey-10"
    clickable
    :to="link"
    style="height: 48px; padding-inline: 16px 20px"
    :title="caption">
    <div
      v-if="icon"
      style="margin-inline: 18px 24px">
      <q-icon
        :name="icon"
        size="24px" />
    </div>

    <div>
      <span>{{ title }}</span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped></style>
