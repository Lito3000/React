import React from "react";
import Editor from '@toast-ui/editor';

class MarkdownEditor extends React.Component {

    componentDidMount() {
        const {onContentChange} = this.props;
        const editor = new Editor({
            el: document.querySelector('#editor'),
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            onContentChange(content)
        });
    }
    render() {
        return (
            <div>
                <div id="editor"></div>
            </div>
        );
    }
}

export default MarkdownEditor;