import {useEffect, useRef} from "react";
import Editor, {toastui} from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({textView}) => {

    const { Editor } = toastui;
    const { chart } = Editor.plugin;

    const textEditor = useRef(null)
    useEffect(() => {
        const editor = new Editor({
            el: textEditor.current,
            hideModeSwitch: true,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
        });
        console.log(editor)

    },[]);

    return (
        <>
            <div ref={textEditor}></div>
        </>
    );
};

export default MarkdownEditor;