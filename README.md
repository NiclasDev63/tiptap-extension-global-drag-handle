# Tiptap Extension: GlobalDragHandle

## Install

NPM
```
$ npm install tiptap-extension-global-drag-handle
```

Yarn
```
$ yarn add tiptap-extension-global-drag-handle
```

## Usage

```js
import GlobalDragHandle from 'tiptap-extension-global-drag-handle'

new Editor({
  extensions: [
    GlobalDragHandle,
  ],
})
```

It is recommended to use this extension together with the [AutoJoiner](https://github.com/NiclasDev63/tiptap-extension-auto-joiner) extension to get the expected behavior for lists.

## Configuration

Optionally, you can also configure the drag handle.

```js
import GlobalDragHandle from 'tiptap-extension-global-drag-handle'

new Editor({
  extensions: [
    GlobalDragHandle.configure{(
        dragHandleWidth: 20,
        scrollTreshold: 100
    )},
  ],
})
```

## Styling
By default the drag handle is headless, which means it doesn't contain any css.
If you want to apply styling to the drag handle, use the class "drag-handle" in your css file.