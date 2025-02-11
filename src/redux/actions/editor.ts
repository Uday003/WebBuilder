import { DeviceTyped, EditorElement } from "../types/editor"

export declare type EditorAction =
  | {
      type: "ADD_ELEMENT";
      payload: {
        elementDetails: EditorElement;
        containerId: string;
      };
    }
  | {
      type: "DELETE_ELEMENT";
      payload: {
        elementDetails: EditorElement;
      };
    }
  | {
      type: "UPDATE_ELEMENT";
      payload: {
        elementId: string;
        elementDetails: EditorElement;
      };
    }
  | {
      type: "CHANGE_CLICKED_ELEMENT";
      payload: {
        elementDetails: {
          styles: {};
          name: "";
          id: "";
          type: null;
          content: [];
        };
      };
    }
  | {
      type: "CHANGE_DEVICE";
      payload: {
        device: DeviceTyped;
      };
    }
    |
    {
        type: "TOGGLE_PREVIEW_MODE";
        payload: {
            previewMode: boolean;
    }
}
