# v-tooltip
Vuejs tooltip directive powered by [tippy.js](https://atomiks.github.io/tippyjs/)

## Why develop this directive?
In several of my projects I use the el-tooltip component that incorporates [ElementUI](https://element.eleme.io/#/en-US) but when using it in lists or many elements I began to notice that the performance is greatly degraded because a new vue instance is created in each new tooltip.

So I ended up creating this small directive that used in any element associates an instance of tippy.js with it, resulting in much more performance. This was very useful for me in lists.

# Dependecies
This directive uses tippy.js, so you need to install it with the method your prefer
- npm i tippy.js 
- yarn add tippy.js


## Usage

Import
```javascript
import tooltip from '@/tooltip.js';
```

Declare it on the component
```javascript
export default {
  directives: {
    tooltip
  }
}
```

Template
```html
<template>
  <div>
    <button v-tooltip="{ content: 'hello' }"></button>
  </div>
</template>
```


