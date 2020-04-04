import React from "react";

export default function SampleMarkup() {
    return (
        <React.Fragment>
            <h1>h1 Heading 😎</h1>
            <h2>h2 Heading</h2>
            <h3>h3 Heading</h3>
            <h4>h4 Heading</h4>
            <h5>h5 Heading</h5>
            <h6>h6 Heading</h6>
            <h2>Horizontal Rules</h2>
            <hr />
            <hr />
            <hr />
            <h2>Typographic replacements</h2>
            <p>Enable typographer option to see result.</p>
            <p>© © ® ® ™ ™ § § ±</p>
            <p>test… test… test… test?.. test!..</p>
            <p>!!! ??? , – —</p>
            <p>“Smartypants, double quotes” and ‘single quotes’</p>
            <h2>Emphasis</h2>
            <p>
                <strong>This is bold text</strong>
            </p>
            <p>
                <strong>This is bold text</strong>
            </p>
            <p>
                <em>This is italic text</em>
            </p>
            <p>
                <em>This is italic text</em>
            </p>
            <p>
                <s>Strikethrough</s>
            </p>
            <h2>Blockquotes</h2>
            <blockquote>
                <p>Blockquotes can also be nested…</p>
                <blockquote>
                    <p>
                        …by using additional greater-than signs right next to
                        each other…
                    </p>
                    <blockquote>
                        <p>…or with spaces between arrows.</p>
                    </blockquote>
                </blockquote>
            </blockquote>
            <h2>Lists</h2>
            <p>Unordered</p>
            <ul>
                <li>
                    Create a list by starting a line with <code>+</code>,{" "}
                    <code>-</code>, or <code>*</code>
                </li>
                <li>
                    Sub-lists are made by indenting 2 spaces:
                    <ul>
                        <li>
                            Marker character change forces new list start:
                            <ul>
                                <li>Ac tristique libero volutpat at</li>
                            </ul>
                            <ul>
                                <li>Facilisis in pretium nisl aliquet</li>
                            </ul>
                            <ul>
                                <li>Nulla volutpat aliquam velit</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Very easy!</li>
            </ul>
        </React.Fragment>
    );
}
