import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
        var sheet = document.createElement('style')
        style.addAttribute("id", "editStyle")
        document.head.appendChild(sheet);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
        function removeElement(elementId) {
            // Removes an element from the document.
            var element = document.getElementById(elementId);
            element.parentNode.removeChild(element);
        }
        removeElement("editStyle");
    }

    handleEnter() {
        
    }
    handleKeyPress(event) {
        if (event.key === "Enter") {
            this.handleEnter();
        }
    }

    onChange(newValue) {
        this.setState({
            value: newValue
        })
    }

    onLoad(editor) {
        console.log('hello', editor)
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <h1>Sample Text</h1>
                <AceEditor
                    placeholder="Placeholder Text"
                    mode="css"
                    theme="monokai"
                    name="CSSEditor"
                    height='250px'
                    width='500px'
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    fontSize={10}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={value}
                    defaultValue={
                        `* {
    {/* enter your css below this line */}
                    };`
                    }
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }} />
            </div>
        )
    }
}

export default Editor;