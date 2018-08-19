window.ItWorked = true;

const {ContextMenuBuilder, ContextMenuListener} = require('../src/index');


window.contextMenuBuilder = new ContextMenuBuilder();
window.contextMenuListener = new ContextMenuListener((event, info) => { window.contextMenuBuilder.showPopupMenu(info); });
