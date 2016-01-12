# karma-ubuntu-browser-launcher

> Launcher for the Ubuntu Browser App.

## Installation
```bash
npm install karma-ubuntu-browser-launcher --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['UbuntuBrowser']
  });
};
```

You can pass the Ubuntu Browser as a Karma CLI argument too:
```bash
karma start --browsers UbuntuBrowser
```