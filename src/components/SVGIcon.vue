<template>
  <svg class="icon" :style="{ width: `${ size }px`, height: `${ size }px`}">
    <use :xlink:href="`${ basePath }/icons.svg#${ name }`"></use>
  </svg>
</template>

<script>
  export default {
    name: 'svgIcon',
    props: {
      basePath: {
        type: String,
        default: '/static'
      },
      name: {
        type: String,
        required: true
      },
      size: {
        default: 16
      }
    }
  }
</script>

<style scoped>
  .icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
