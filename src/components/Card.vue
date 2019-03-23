<template>
  <div class="col-12 mt-2">
    <div :class="`card ${color} shadow h-100 py-2`">
      <div class="card-body">
        <div class="row no-gutters align-items-center">
          <div class="col mr-2">
            <slot name="card-body"></slot>
          </div>
          <div class="col-auto">
            <slot name="card-icon"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    color: {
      type: String,
      default: "border-left-primary"
    }
  }
};
</script>

<style>
</style>
