import React from 'react';
import Scroll from 'react-scroll';
import R from 'ramda';
import {  Hr, P, Element, Section } from 'cyverse-ui';
import * as icons from 'cyverse-ui/icons';

import { Figure } from '../components/';
import CodeBlock from '../components/CodeBlock';
import IconEx from './IconEx';
import IconExCode from '!raw-loader!./IconEx';

const scroller = Scroll.scroller;
const ScrollAnchor = Scroll.Element;

class IconSection extends React.Component {
    IconCell = (icon) => {
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
            <Element
                key={ icon[0] }
                style={style.cell}
            >
                <Element whitespace="mb3">
                    <Icon size={ 50 }/>
                </Element>
                <P>
                    { icon[0] }
                </P>
            </Element>
        );
    };

    render() {
        return (
            <Section style={{ position: "relative" }}>
                <ScrollAnchor
                    name="svg-icons"
                    style={{
                        position: "absolute",
                        top:"-50px"
                    }}
                />
                <Element
                    root="h2"
                    whitespace="mb3"
                    typography="display1"
                    color="primary1Color"
                >
                    SVG Icons
                </Element>
                <Element whitespace="mb5">
                    <P>
                        SVG Icons are an extention to the material-ui svg icons. They can be used in all material-ui components that take an icon as a prop or children.
                    </P>
                    <Figure
                        caption={ `SVG Icon Example` }
                    >
                        <IconEx/>
                        <CodeBlock
                            style={{
                                overflow: "scroll",
                            }}
                            text={ IconExCode }
                        />
                    </Figure>
                </Element>
                <Element
                    root="h3"
                    typography="title"
                    whitespace="pb3"
                >
                    Icon List
                </Element>
                <Element style={{ display: "flex", flexWrap: "wrap" }}>
                    { R.toPairs(icons).map(this.IconCell) }
                </Element>
            </Section>
        );
    }
}

export default IconSection
