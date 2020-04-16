import React from 'react';
import AceEditor from 'react-ace';
import styles from './App.module.css';

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/snippets/css"
import "ace-builds/src-noconflict/theme-github";

class Editor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    onChange(newValue) {
        this.setState({
            value: newValue
        })
        this.onLoad()
    }

    onLoad() {
        console.log('hello');
        chrome.tabs.insertCSS(null, { code: this.state.value })
    }

    render() {
        const { value } = this.state;
        return (
            <div className={styles.container}>
                <h1>CSSED.it by ZachyNative</h1>
                <AceEditor
                    placeholder="....use CSS to change the style of this page"
                    mode="css"
                    theme="github"
                    name="CSSEditor"
                    height="20em"
                    width="20em"
                    onChange={this.onChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={false}
                    highlightActiveLine={true}
                    value={value}
                    wrapEnabled={true}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                    }} />
            </div>
        )
    }
}

export default Editor;