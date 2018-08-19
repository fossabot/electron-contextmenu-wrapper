# electron-contextmenu-handler

![](https://img.shields.io/npm/dm/electron-contextmenu-handler.svg)

electron-contextmenu-handler was forked from electron-spellchecker to provide
a robust context handling library that's also callable from inside of a webview preloader.

## Quick Start

```js
const {ContextMenuListener, ContextMenuBuilder} = require('electron-contextmenu-handler');

let contextMenuBuilder = new ContextMenuBuilder();
let contextMenuListener = new ContextMenuListener((event, info) => {
  contextMenuBuilder.showPopupMenu(info);
});
```

Additionally, there are
```js
ContextMenuBuilder.prependContextMenuItem(new MenuItem(label: "Work!"))
```
 and
 ```js
 ContextMenuBuilder.appendContextMenuItem(new MenuItem(label: "Smarter!"))
 ```
to customize the context menus.

## Learning more

* Run `npm start` to start [the example application](https://github.com/TheGoddessInari/electron-contextmenu-handlerr/tree/master/example) and play around.

