# require-hot

> ``require`` wrapper for NodeJS which clears cache of required module when the module file is changed

As you know NodeJS caches files values returned by ``require`` function. When you call ``require('foo')`` twice or more it returns the same object. **require-hot** is super-tiny wrapper of ``require`` function which clears cache (``require.cache[moduleName]``) when the file of the module is modified.

```
npm install --save require-hot
```

```js
const requireHot = require('require-hot');

function foo() {
    const bar = requireHot('./bar'); // returns another vale only if ./bar is changed
    bar();
}

// foo can be called by any async function
setInterval(() => {
    foo();
}, 500)
```
