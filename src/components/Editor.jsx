import React, {useState} from 'react';

const Editor = () => {

    //Sets state variable 'changes' where we will be storing text on change
    const [changes, setChanges] = useState(``);

    //uses the chrome.tabs API function to insertCSS into the active tab
    const changeTabCSS = () => {
        chrome.tabs.insertCSS(null, {code: changes});
    };

    //uses a textarea for allowing use of return key and creating new lines
    //contains the style tag which will be our target for submitting css selectors/changes
    return (
        <div className={'editor-container'}>

            <textarea placeholder={'...begin typing.'} id="editor" cols="30" rows="10" onChange={(e) => {
                setChanges(e.target.value);
                changeTabCSS();
            }} value={changes}/>

            <style dangerouslySetInnerHTML={{
                __html: changes
            }}/>
        </div>
    );
};

export default Editor;

