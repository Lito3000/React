import React from "react";

class MarkdownEditor extends React.Component {

    render() {
        const editor = new Editor({
            el: element,
            hideModeSwitch: true,
        });

        editor.addHook('change', () => {
            const content = editor.getMarkdown();
            // код который будет вызван при изменении содержимого редактора
        });
        const { onContentChange } = this.props;
        return (
            <h1>{onContentChange}</h1>
        );
    }
}

MarkdownEditor.defaultProps = {
    text: 'Header Component!',
};

export default MarkdownEditor;