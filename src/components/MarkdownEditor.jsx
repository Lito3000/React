import React from "react";
import Editor from '@toast-ui/editor';
import PropTypes from "prop-types";

class MarkdownEditor extends React.Component {

    componentDidMount() {
        const {onContentChange} = this.props;
        const editor = new Editor({
            el: document.querySelector('#editor'),
            hideModeSwitch: true,
            height: '600px',
            initialEditType: 'markdown',
            previewStyle: 'vertical'
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
MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};
export default MarkdownEditor;