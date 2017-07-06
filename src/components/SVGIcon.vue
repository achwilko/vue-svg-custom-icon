<template>
  <span class="icon" v-html="svg"></span>
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
      svg() {
        return `<svg style="width: ${ this.size }px; height: ${ this.size }px"><use xlink:href="${ this.basePath }/icons.svg#${ this.name }"></use></svg>`
      }
    }
  }
</script>

<style scoped>
  .icon {
    color: inherit;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
