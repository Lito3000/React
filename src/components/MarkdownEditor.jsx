import {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

const MarkdownEditor = (item) => {


    const textRef = useRef(null)
    useEffect(() => {
        const editor = new Editor({
            el: textRef.current,
            hideModeSwitch: true,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
        });
        console.log(editor)

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            item.textView(content)
        });
    }, [])

    return (
        <>
            <div ref={textRef}></div>

        </>
    );
}

export default MarkdownEditor;