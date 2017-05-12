# vue-svg-custom-icon
A lightweight component with no dependecy to allow use of custom SVG icons in your Vue.js application based on SVG sprite.

## Installation
Using NPM:
```
npm install vue-svg-custom-icon --save
```

## Requirements
 - [Vue.js](https://github.com/vuejs/vue) (2.x+)
 - [svgxuse](https://github.com/Keyamoon/svgxuse) polyfill to support IE9-11 version
 - SVG sprite file ([example](https://github.com/achwilko/vue-svg-icon/blob/master/static/icons.svg?short_path=e2fe5f7)) that should be available in /static folder by default (can be changed, more details in configuration section)


## Usage
In your main.js file:
```js
import VueSVGCustomIcon from 'vue-svg-custom-icon'
Vue.use(VueSVGCustomIcon)
```

In your components:
```html
  <svg-icon name="svg_icon_name" :size="64"></svg-icon>
```
- **name** - SVG sprite symbol id value (note below)
- **size** - icon size in px (16 is default)


> NOTE: Assuming your SVG sprite looks like below:
```xml
<!-- SVG sprite example -->
<?xml version="1.0" encoding="utf-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <symbol style="isolation:isolate" viewBox="0 0 20 22" id="alarm">
    <path d="M2.143 17.6l2.143-4.4V7.333c0-3.24 2.558-5.866 5.714-5.866 3.156 0 5.714 2.626 5.714 5.866V13.2l2.143 4.4H2.143zM10 20.533c-.932 0-1.716-.613-2.011-1.466h4.022c-.295.853-1.079 1.466-2.011 1.466zm7.143-7.333V7.333C17.143 3.283 13.944 0 10 0S2.857 3.284 2.857 7.333V13.2L0 19.067h6.5C6.832 20.74 8.273 22 10 22s3.169-1.26 3.5-2.933H20L17.143 13.2z" fill-rule="evenodd"/>
  </symbol>
</svg>
```
```html
  <!-- Alarm icon usage based on above SVG sprite -->
  <svg-icon name="alarm" :size="32"></svg-icon>
```


## Configuration
By default, SVGIcon component will look for SVG sprite in */static* folder. Use "basePath" options to change the default path:
```js
import VueSVGCustomIcon from 'vue-svg-custom-icon'
Vue.use(VueSVGCustomIcon, { basePath: '/assets' })
```
