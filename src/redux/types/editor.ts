import { EditorButtons } from "../../constants";

export type DeviceTyped = 'Desktop' | 'Tablet' | 'Mobile';

export type EditorElement = {
    id: string
    styles: React.CSSProperties
    name: string
    type: EditorButtons
    content: EditorElement[] | {}
}

export type Editor ={
    liveMode: boolean
    elements: EditorElement[]
    selectedElement: EditorElement
    device: DeviceTyped
    previewMode: boolean
    funnelPageId: string
}

export type HistoryState ={
    history: Editor[]
    currentIndex: number
}

export type EditorState = {
    editor: Editor
    history: HistoryState
}