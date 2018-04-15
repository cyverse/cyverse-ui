import React from 'react';
import { Element } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import { Card, CardText } from 'material-ui';

const ElementEx = props => (
    <Card>
        <CardText>
            <Element
                tag="h1"
                typography="display1"
                color="primary1Color"
                whiteSpace={{ mb:3 }}
                children="Hello World"
            />
            <Element
                tag="p"
                typography="title"
                color="primary1color"
                background="#EAEAEA"
                whiteSpace={{ mb: 3, p: 3 }}
                children="Hello World"
            />
            <Element
                tag="div"
                typography="body1"
                color="white"
                background="primary1Color"
                whiteSpace={{ p: 3 }}
                children="Hello World"
            />
        </CardText>
    </Card>
);

export default ElementEx;
