import { Slice } from '@tiptap/pm/model';
import { EditorView } from '@tiptap/pm/view';
import * as pmView from '@tiptap/pm/view';

function getPmView() {
  try {
      return pmView;
  } catch (error) {
      return null;
  }
}


export function serializeForClipboard(view: EditorView, slice: Slice) {
  // Newer Tiptap/ProseMirror
  // @ts-ignore
  if (view && typeof view.serializeForClipboard === 'function') {
    return view.serializeForClipboard(slice);
  }

  // Older version fallback
  const proseMirrorView = getPmView();
  // @ts-ignore
  if (proseMirrorView && typeof proseMirrorView?.__serializeForClipboard === 'function') {
    // @ts-ignore
    return proseMirrorView.__serializeForClipboard(view, slice);
  }

  throw new Error('No supported clipboard serialization method found.');
}
