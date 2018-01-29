import React from 'react';
import { Element } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Card, CardText } from 'material-ui';

const ElementEx = props => (
    <Element>
        <Element
            root="h1"
            typography="display1"
            color="primary1Color"
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
            background="gold"
            elevation={3}
            whitespace={["mb3", "p3" ]}
            children={`Whitespace, background colors, and elevation!`}
        />
        <Element
            typography="body2"
            background="white"
            whitespace={[ "p3" ]}
            elevation={2}
            children="An elevation of 2 is used for cards placed together as a list"
        />
        <Element
            typography="body2"
            background="white"
            whitespace={[ "p3" ]}
            elevation={2}
            children="You get the idea. Use the source!"
        />
    </Element>
);

export default ElementEx;
