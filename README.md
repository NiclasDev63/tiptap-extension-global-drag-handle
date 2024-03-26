# Tiptap Extension: DragHandle

## Install

NPM
```
$ npm install tiptap-extension-drag-handle
```

Yarn
```
$ yarn add tiptap-extension-drag-handle
```

## Usage

```js
import DragHandle from 'tiptap-extension-drag-handle'

new Editor({
  extensions: [
    DragHandle,
  ],
})
```
It is recommended to use this extension together with the autojoiner extension to get the expected behavior for lists.
