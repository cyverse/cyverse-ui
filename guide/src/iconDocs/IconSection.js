import React from 'react';
import Scroll from 'react-scroll';
import R from 'ramda';
import {  Hr, P, Title, Div, Section } from 'cyverse-ui'; 
import * as icons from 'cyverse-ui/icons';

import theme from '../theme';
import { Figure } from '../components/';
import CodeBlock from '../components/CodeBlock';
import IconEx from './IconEx';
import IconExCode from '!raw-loader!./IconEx';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

const IconSection = React.createClass({
    IconCell(icon) {
        const Icon = icon[1];
        const style = {
            cell: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "150px",
                height: "150px"
            }
        }
        return (
            <Div
                key={ icon[0] }
                style={style.cell}
            >
                <Div mb={3}>
                    <Icon size={ 50 }/>
                </Div>
                <P>
                    { icon[0] }
                </P>
            </Div>
        );
    },

    render() {
        return (
            <Section>
                <ScrollAnchor
                    name="svg-icons"
                    style={{
                        position: "absolute", 
                        top:"-50px" 
                    }}
                />
                <Title
                    h2
                    display1
                    color={ theme.color.primary }
                >
                    SVG Icons
                </Title>
                <Div mb={ 5 }>
                    <P>
                        SVG Icons are an extention to the material-ui svg icons. They can be used in all material-ui components that take an icon as a prop or children.
                    </P>
                    <Figure
                        caption={ `SVG Icon Example` }
                        color={ theme.color.primary }
                    >
                        <IconEx/>
                        <CodeBlock
                            style={{
                                overflow: "scroll",
                            }}
                            text={ IconExCode }
                        />
                    </Figure>
                </Div>
                <Title
                    h3
                    title
                >
                    Icon List
                </Title>
                <Div style={{ display: "flex", flexWrap: "wrap" }}>
                    { R.toPairs(icons).map(this.IconCell) }
                </Div>
            </Section>
        );
    }
})

export default IconSection
