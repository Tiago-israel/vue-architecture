<template>
  <div class="card shadow mb-4">
    <!-- Card Header - Accordion -->
    <a
      :href="`#${idCard}`"
      class="d-block card-header py-3"
      data-toggle="collapse"
      role="button"
      aria-expanded="true"
      :aria-controls="idCard"
    >
      <h6 class="m-0 font-weight-bold text-primary">{{ title }}</h6>
    </a>
    <!-- Card Content - Collapse -->
    <div class="collapse show" :id="idCard">
      <div class="card-body">
        <slot name="card-body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapse-card",
  props: {
    idCard:{
      default:0,
      required: true,
    },
    title: {
      required: true,
      type: String
    }
  }
};
</script>

<style>
</style>
