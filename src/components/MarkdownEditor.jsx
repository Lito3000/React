import {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import PropTypes from "prop-types";

const MarkdownEditor = (item) => {


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

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            item.textView(content)
        });
    }, [])

    return (
        <>
            <div ref={textEditor}></div>

        </>
    );
}
MarkdownEditor.propTypes = {
   textView: PropTypes.func.isRequired,
};
export default MarkdownEditor;