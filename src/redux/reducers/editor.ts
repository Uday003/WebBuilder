import { EditorAction } from "../actions/editor";
import { EditorState } from "../types/editor";

export type ReduxAction = {
  type: string;
  payload?: any;
};

const intialEditorState: EditorState["editor"] = {
  liveMode: false,
  elements: [
    {
      id: "__body",
      styles: {},
      name: "__body",
      type: "__body",
      content: [],
    },
  ],
  selectedElement: {
    id: "",
    styles: {},
    name: "",
    type: "__body",
    content: [],
  },
  device: "Desktop",
  previewMode: false,
  funnelPageId: "",
};
const intialHistoryState: EditorState["history"] = {
  history: [intialEditorState],
  currentIndex: 0,
};

const intialState: EditorState = {
  editor: intialEditorState,
  history: intialHistoryState,
};
export const editorReducer = (
  state = intialState,
  action: EditorAction
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT":

    default:
      return state;
  }
};
