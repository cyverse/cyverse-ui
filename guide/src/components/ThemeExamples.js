import React from 'react';
import Scroll from 'react-scroll';
import withTheme from 'material-ui/styles/withTheme';
import {  Hr, P, Element, Div, Section } from 'cyverse-ui';
import Figure from './Figure';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

class ThemeExample extends React.Component {
    render() {
        const { component, i, theme } = this.props;
        const { name, desc } = component;
        const {
            primary1Color
        } = theme.palette;

        return (
            <Section
                style={{ position: "relative" }}
                mb={ 7 }
            >
                <ScrollAnchor
                    id={ name.toLowerCase().split(" ").join("-") }
                    style={{
                        position: "absolute",
                        top:"-50px"
                    }}
                />
                <Element
                    root="h1"
                    typography="display1"
                    whitespace="mb3"
                >
                    { name }
                </Element>
                { desc }
            </Section>
        )
    }
}

export default withTheme()(ThemeExample);
