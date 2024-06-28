import React, {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

const MarkdownEditor = (props) => {


    const textRef = useRef(null)
    useEffect(() => {
        const {textView} = props
        const editor = new Editor({
            el: textRef.current,
            hideModeSwitch: true,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            textView(content)
        });
    }, [])

    return (
        <>
            <div ref={textRef}></div>

        </>
    );
}

export default MarkdownEditor;