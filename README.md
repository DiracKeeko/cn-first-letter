# cn-first-letter

**Tools commonly used in front-end development financial scenarios**

[![npm version](https://img.shields.io/npm/v/cn-first-letter.svg)](https://www.npmjs.com/package/cn-first-letter)

## 特性 Features

- 获取中文字符串拼音首字母,支持多音字模式.
  Get the first letter of pinyin of Chinese string, support polyphonic mode.
- 支持ESM, CJS, <script> reference三种导入模式.
  Support ESM, CJS, <script> reference three import modes.
- 无依赖
  No dependencies


## 安装 Install

```bash
$ npm install cn-first-letter
```

## 引入文件 Import

### Node.js

CommonJS:

```javascript
const cnFirstLetter = require('cn-first-letter');
```

ES module:

```javascript
import cnFirstLetter from 'cn-first-letter';
```

### Browsers
通过<script>标签引入,将cnFirstLetter添加到全局作用域:
Import via <script> tag, Add cnFirstLetter to global scope:

```html
<script src='path/to/cn-first-letter.js'></script>
```

## Use
JS库导出一个名为`cnFirstLetter`的对象,获取首字母的方法getFirstLetter是这个对象的属性.
The library exports a single object, `cnFirstLetter`,
the method getFirstLetter is a property of this object.

使用getFirstLetter方法来获取中文字符串拼音首字母.
Use the getFirstLetter method to get the first letter of pinyin of Chinese string. 

getFirstLetter(cnStr[, isPolyphoneMode])

```javascript
const cnStr1 = "中国"; // "中国"不包含多音字. String "中国" does not contain polyphonic characters.
const res1a = cnFirstLetter.getFirstLetter(cnStr1);
console.log(res1a); // ZG

const res1b = cnFirstLetter.getFirstLetter(cnStr1, true);
console.log(res1b); // ZG

const cnStr2 = "银行"; // "银行"包含一个多音字. String "银行" contain one polyphonic characters.
const res2a = cnFirstLetter.getFirstLetter(cnStr2);
console.log(res2a); // YH

const res2b = cnFirstLetter.getFirstLetter(cnStr2, true);
console.log(res2b); // YX-YH
```

