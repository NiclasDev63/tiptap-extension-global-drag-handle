import * as pmView from '@tiptap/pm/view';
import { Slice } from '@tiptap/pm/model';

export function serializeForClipboard(view: pmView.EditorView, slice: Slice) {
  // Newer Tiptap/ProseMirror
  // @ts-ignore
  if (typeof view.serializeForClipboard === 'function') {
    // @ts-ignore
    return view.serializeForClipboard(slice);
  }

  // Older version fallback
  // @ts-ignore
  if (typeof pmView.__serializeForClipboard === 'function') {
    // @ts-ignore
    return pmView.__serializeForClipboard(view, slice);
  }

  throw new Error('No supported clipboard serialization method found.');
}
