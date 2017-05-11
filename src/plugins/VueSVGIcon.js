import SVGIcon from '../components/SVGIcon'

export default {
  install(Vue, options = {}) {

    // If basePath is defined then updated default prop value
    if (options.basePath) {
      SVGIcon.props.basePath.default = basePath
    }

    // Register component
    Vue.component(SVGIcon.name, SVGIcon)
  }
}
