import React, {useState, useEffect, useMemo} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link} from 'react-router-dom';
import Editor from './components/Editor.jsx';

const App = () => {

    //Uses some syntax for React-Router functionality, but I didn't get to that stretch goal
    return (
        <div className={'main-container'}>
                <div className={'navigation'}>
                    <div className={'nav-wrapper'}>
                        <div className={'main-title'}>Kytra's Live CSS Editor</div>
                        <div className={'nav-links-wrapper'}>
                            <div className={'nav-links'}>
                                <Link to={'/'}>Editor</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'content-container'}>
                    <div className={'editor-wrapper'}>
                        <Editor/>
                    </div>
                </div>
        </div>
);

};

//Stretch Goals were to add an 'About the Extension Author' section, so I included React-Router and wrapped the
//App inside HashRouter, but I never got to using this portion
ReactDOM.render(
    <HashRouter><App/></HashRouter>
, document.getElementById('root'));
