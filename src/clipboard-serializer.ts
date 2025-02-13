import { Slice } from '@tiptap/pm/model';
import { EditorView } from '@tiptap/pm/view';

export function serializeForClipboard(view: EditorView, slice: Slice) {
  // Newer Tiptap/ProseMirror
  // @ts-ignore
  if (view && typeof view.serializeForClipboard === 'function') {
    return view.serializeForClipboard(slice);
  }

  // Older version fallback
  // @ts-ignore
  const pmView = require('@tiptap/pm/view');
  if (pmView && typeof pmView.__serializeForClipboard === 'function') {
    // @ts-ignore
    return pmView.__serializeForClipboard(view, slice);
  }

  throw new Error('No supported clipboard serialization method found.');
}
