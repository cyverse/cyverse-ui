import React from 'react';
import { Element } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Card, CardText } from 'material-ui';

const ElementEx = props => (
    <Element>
        <Element
            root="h1"
            typography="display1"
            whitespace="mb5"
            children={`Control Typography`}
        />
        <Element
            root="h2"
            typography="title"
            children={`Like Titles`}
        />
        <Element
            typography="caption"
            whitespace="mb5"
            children={`And Captions`}
        />
        <Element
            root="p"
            typography="title"
            style={{background: "white"}}
            elevation={3}
            whitespace={["mb3", "p3" ]}
            children={`Whitespace, and elevation!`}
        />
        <Element
            typography="body2"
            whitespace={[ "p3" ]}
            style={{background: "white"}}
            elevation={2}
            children="An elevation of 2 is used for cards placed together as a list"
        />
        <Element
            style={{background: "white"}}
            whitespace={[ "p3" ]}
            elevation={2}
            children="You get the idea. Use the source!"
        />
         <Element
            hide={true}
            children="I'm hidden from everything"
        />
        <Element
            hideReadable={true}
            children="Screen readers and search engines can see me but you can't"
        />

    </Element>
);

export default ElementEx;
