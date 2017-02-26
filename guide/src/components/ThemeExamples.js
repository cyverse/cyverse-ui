import React from 'react';
import Scroll from 'react-scroll';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {  Hr, P, Title, Div, Section } from 'cyverse-ui'; 
import Figure from './Figure';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

const ThemeExample = React.createClass({    
    render() {
        const { component, i, muiTheme } = this.props;
        const { name, desc } = component;
        const { 
            primary1Color
        } = muiTheme.palette;

        return (
            <Section
                mb={ 7 }
            >
                <ScrollAnchor
                    name={ name.replace(/\s+/g, '-') }
                    style={{
                        position: "absolute", 
                        top:"-50px" 
                    }}
                />

                <Hr mb={ 6 }/>
                <Title 
                    h1
                    headline
                > 
                    { name } 
                </Title>
                { desc } 
            </Section>
        )
    },
});

export default muiThemeable()(ThemeExample);
