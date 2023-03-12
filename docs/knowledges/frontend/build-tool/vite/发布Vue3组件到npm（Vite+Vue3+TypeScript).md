> 本文仓库地址：[https://github.com/AlanLee97/vue3-flex-box](https://github.com/AlanLee97/vue3-flex-box)

# 初始化项目
```bash
npm create vue3-flex-box --template vue-ts
```
项目目录
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1641114271781-53ccf9e7-b643-45ff-b054-b94995117274.png#clientId=uc49bdccd-a714-4&from=paste&height=488&id=uda631096&name=image.png&originHeight=488&originWidth=770&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28640&status=done&style=none&taskId=u22289044-4ba0-4fa4-b224-835d6f247f1&title=&width=770)
# 编写组件
flex-box.vue
```vue
<script setup lang="ts">
import { ref } from 'vue'

const props= defineProps<{ 
  height?: string | number
  width?: string | number
  centerH?: boolean
  centerV?: boolean
  centerHV?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
  directionRow?: boolean
  directionColumn?: boolean
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  itemAlignStart?: boolean
  itemAlignEnd?: boolean
  flexNum?: number
 }>()

const className = ref('flex-box');
const style = ref('');

const {
  height,
  width,
  centerH,
  centerV,
  centerHV,
  spaceBetween,
  spaceAround,
  spaceEvenly,
  directionRow,
  directionColumn,
  direction,
  itemAlignStart,
  itemAlignEnd,
  flexNum,
} = props;


className.value += centerH ? ' center-h' : ''
className.value += centerV ? ' center-v' : ''
className.value += centerHV ? ' center-h-v' : ''
className.value += spaceBetween ? ' space-between' : ''
className.value += spaceAround ? ' space-around' : ''
className.value += spaceEvenly ? ' space-evenly' : ''
className.value += directionRow ? ' direction-row' : ''
className.value += directionColumn ? ' direction-column' : ''
className.value += itemAlignStart ? ' item-align-start' : ''
className.value += itemAlignEnd ? ' item-align-end' : ''


style.value = `
width: ${width ? width + 'px' : ''}; 
height: ${height ? height + 'px' : ''}; 
${flexNum ? 'flex: ' + flexNum + ';' : ''}
${direction ? 'flex-direction: ' + direction + ';' : ''}
`
</script>

<template>
  <div :class="className" :style="style">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.flex-box {
  display: flex;
}
.center-v {
  display: flex;
  align-items: center;
}

.center-h {
  display: flex;
  justify-content: center;
}

.center-h-v {
  display: flex;
  align-items: center;
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.space-evenly {
  justify-content: space-evenly;
}

.direction-column {
  flex-direction: column;
}

.direction-column-reverse {
  flex-direction: column-reverse;
}

.direction-row {
  flex-direction: row;
}

.direction-row-reverse {
  flex-direction: row-reverse;
}

.item-align-start {
  align-items: flex-start;
}

.item-align-end {
  align-items: flex-end;
}

</style>

```
# 发布前准备

1. 新建export.ts文件，将组件导出
```typescript
import FlexBox from './components/flex-box/flex-box.vue';
export default FlexBox;
```

2. 编辑vite.config.ts文件
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/export.ts'),
      name: 'FlexBox',
      fileName: (format) => `flex-box.${format}.ts`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

```
> 如果path报红，则安装一下`npm i -D @types/node`即可

3. 编辑package.json，增加version、files、module、main、exports字段的内容
```json
{
  "name": "@alanlee97/vue3-flex-box",
  "version": "0.0.1",
  "files": [
    "dist"
  ],
  "module": "./dist/flex-box.es.ts",
  "main": "./dist/flex-box.umd.ts",
  "exports": {
    ".": {
      "import": "./dist/flex-box.es.ts",
      "require": "./dist/flex-box.umd.ts"
    },
    "./dist/style.css": {
      "import": "./dist/style.css",
      "require": "./dist/style.css"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@types/node": "^17.0.6",
    "@vitejs/plugin-vue": "^2.0.0",
    "sass": "^1.45.2",
    "typescript": "^4.4.4",
    "vite": "^2.7.2",
    "vue-tsc": "^0.29.8"
  }
}

```
> 发布npm包后，每次修改发新包时，都有修改version字段，一般版本数加1即可


4. 在根目录下增加.npmignore文件，其作用就是忽略一些文件，不要上传到npm

.npmignore
```typescript
/.git/
/.vscode/
/node_modules/
.gitignore
.npmignore
.prettierrc
.editorconfig
tslint.json
tsconfig.json
note.md
*.log
```

5. 构建项目
```bash
npm run build
```
# 发布npm包

1. 登录，没有账号则去[npm官网](https://www.npmjs.com)注册一个账号
```bash
npm login
```
登录成功之后直接执行发布命令即可发布。

2. 发布
```bash
npm publish
```
> 这里我的包名使用了`@`开头，一般使用@符号开头的包都是私有包，npm需要收费
> 解决方法是加上`--access public`可直接发布组件，当成公有包，不需要支付费用。


# 使用自己发布的npm包
**安装**
```bash
npm i @alanlee97/vue3-flex-box
```
**引入组件**
在需要使用flex-box组件的地方引入
```typescript
import FlexBox from '@alanlee97/vue3-flex-box';
```
也可全局引入，在main.ts中引入组件
```typescript
import { createApp } from 'vue'
import FlexBox from '@alanlee97/vue3-flex-box';
import '@alanlee97/vue3-flex-box/dist/style.css';

const app = createApp(App);
app.component('flex-box', FlexBox);
app.mount('#app')

```

**引入样式**
在main.ts中引入样式
```typescript
import '@alanlee97/vue3-flex-box/dist/style.css';
```

**验证是否生效**
```vue
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import FlexBox from '@alanlee97/vue3-flex-box';
</script>

<template>
  <FlexBox space-between>
    <div>1</div>
    <div>2</div>
  </FlexBox>
</template>
```
可以看到效果，组件生效了
![image.png](https://cdn.nlark.com/yuque/0/2022/png/743297/1641115019075-3b20045c-ddc4-406b-9c79-e7e640f238b9.png#clientId=uc49bdccd-a714-4&from=paste&height=362&id=u1286ac67&name=image.png&originHeight=362&originWidth=1128&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33975&status=done&style=none&taskId=u3f28c0e0-18a9-42b2-bbfd-a1405d46f05&title=&width=1128)
# 参考文章
> [Vite | 构建生产版本-库模式](https://vitejs.cn/guide/build.html#library-mode)
> [vue3+ts+vite发布组件到npm](https://www.cnblogs.com/Hero-/p/15269982.html)

