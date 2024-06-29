import {useEffect, useRef} from "react";
import Editor, {toastui} from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = () => {

    const { Editor } = toastui;
    const { chart } = Editor.plugin;

    const textEditor = useRef(null)
    useEffect(() => {
        const editor = new Editor({
            el: textEditor.current,
            hideModeSwitch: true,
            previewStyle: 'vertical',
            height: '500px',
            initialValue: chartContent,
            plugins: [[chart, chartOptions]]
        });
        console.log(editor)

        const viewer = Editor.factory({
            el: document.querySelector('#viewer'),
            viewer: true,
            height: '500px',
            initialValue: chartContent,
            plugins: [[chart, chartOptions]]
        });
    },[]);

    return (
        <>
            <div ref={textEditor}></div>
        </>
    );
};

export default MarkdownEditor;