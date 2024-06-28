import {useEffect, useRef} from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style

const MarkdownEditor = () => {
    // null – начальное значение
    const textArea = useRef(null);

    // const onButtonClick = () => {
    //     // `current` указывает на смонтированный элемент `input`
    //     inputEl.current.focus();
    // };

    useEffect(() => {
        const editor = new Editor({
            el: textArea.current,
            height: '500px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
        });
    }, [])


    return (
        <>
            <textarea ref={textArea}></textarea>
        </>
    );
}

export default MarkdownEditor;