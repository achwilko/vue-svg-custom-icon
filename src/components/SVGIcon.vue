<template>
  <svg class="icon" :style="{ 'width': iconSize, 'height': iconSize }">
    <use :xlink:href="iconLink"></use>
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
    },

    computed: {
      /**
       * Computed icon link
       */
      iconLink() {
        return `${ this.basePath }/icons.svg#${ this.name }`
      },

      /**
       * Computed icon size
       */
      iconSize() {
        return `${ this.size }px`
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
