# Tiptap Extension: GlobalDragHandle
<a href="https://www.npmjs.com/package/tiptap-extension-global-drag-handle"><img alt="NPM Downloads" src="https://img.shields.io/npm/dw/tiptap-extension-global-drag-handle"></a>


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

In order to enjoy all the advantages of the drag handle, it is recommended to install the [AutoJoiner](https://github.com/NiclasDev63/tiptap-extension-auto-joiner) extension as well, which allows you to automatically join various nodes such as 2 lists that are next to each other.

## Configuration

Optionally, you can also configure the drag handle.

```js
import GlobalDragHandle from 'tiptap-extension-global-drag-handle'

new Editor({
  extensions: [
    GlobalDragHandle.configure({
        dragHandleWidth: 20, // default

        // The scrollTreshold specifies how close the user must drag an element to the edge of the lower/upper screen for automatic 
        // scrolling to take place. For example, scrollTreshold = 100 means that scrolling starts automatically when the user drags an 
        // element to a position that is max. 99px away from the edge of the screen
        // You can set this to 0 to prevent auto scrolling caused by this extension
        scrollTreshold: 100, // default

        // The css selector to query for the drag handle. (eg: '.custom-handle').
        // If handle element is found, that element will be used as drag handle. 
        // If not, a default handle will be created
        dragHandleSelector: ".custom-drag-handle", // default is undefined


        // Tags to be excluded for drag handle
        // If you want to hide the global drag handle for specific HTML tags, you can use this option.
        // For example, setting this option to ['p', 'hr'] will hide the global drag handle for <p> and <hr> tags.
        excludedTags: [], // default

        // Custom nodes to be included for drag handle
        // For example having a custom Alert component. Add data-type="alert" to the node component wrapper.
        // Then add it to this list as ['alert']
        //
        customNodes: [],
    }),
  ],
})
```

## Styling
By default the drag handle is headless, which means it doesn't contain any css. If you want to apply styling to the drag handle, use the class "drag-handle" in your css file.
Take a look at [this](https://github.com/steven-tey/novel/blob/main/apps/web/styles/prosemirror.css#L131) example, to see how you can apply styling.
