# electron-contextmenu-wrapper
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTheGoddessInari%2Felectron-contextmenu-wrapper.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FTheGoddessInari%2Felectron-contextmenu-wrapper?ref=badge_shield)


![](https://img.shields.io/npm/dm/electron-contextmenu-wrapper.svg)

electron-contextmenu-wrapper was forked from electron-spellchecker to provide
a robust context handling library that's also callable from inside of a webview preloader.

## Quick Start

```js
const {ContextMenuListener, ContextMenuBuilder} = require('electron-contextmenu-wrapper');

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

* Run `npm start` to start [the example application](https://github.com/TheGoddessInari/electron-contextmenu-wrapper/tree/master/example) and play around.



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTheGoddessInari%2Felectron-contextmenu-wrapper.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FTheGoddessInari%2Felectron-contextmenu-wrapper?ref=badge_large)