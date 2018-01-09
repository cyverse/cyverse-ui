import React from "react";
import PropTypes from "prop-types";
import filterDomProps from 'filter-react-dom-props';
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import muiThemeable from "material-ui/styles/muiThemeable";

import * as events from "./utils/events";
import { marg, pad } from "./styles";

/**
 * Element is the building block for creating other components. All of CyVerse-UI is built with Element.
 * It has the core functionality that is common across the CY-UI world. These features let you access global values for whitespace and typography to maintain consistency throughout your components.
 *
 * Render the html tag you want by a string to the el prop and pass any html attributes as you would with any other element.
 **/
class Element extends React.Component {
    // Define static styles here.
    // Each key of the returned object will be available as a className below.
    // TODO: Move styles from inline to here and compose classNames
    styleSheet = () =>
        createStyleSheet("Element", theme => ({
            wrapper: {}
        }));

    componentWillMount() {
        // Generate classes object and render corresponding style definitions in header.
        this.classes = getStyleManager({}).render(this.styleSheet());
    }

    clickHandler = e => {
        const { stopPropagation, onClick } = this.props;
        stopPropagation ? events.stopPropagation(e) : null;
        onClick ? onClick(e) : null;
    };

    render() {
        const {
            style,
            tag = "div",
            ...rest
        } = this.props;
        const Tag = tag;

        return (
            <Tag
                {...filterDomProps(rest)}
                style={{ ...style, ...this.styles()}}
                onClick={this.clickHandler}
            >
                {this.props.children}
            </Tag>
        );
    }

    styles = () => {
        const {
            muiTheme = {},
            color: colorProp,
            whiteSpace = {},
            typography = "body1",
            background: backgroundProp,
            hide,
            display: displayProp = "block"
        } = this.props;
        const { palette, typography: themeTypography } = muiTheme;

        // Throw an error if not using a CY-UI compatible theme
        if ( !themeTypography ) {
            throw(`Error: Missing theme field "typography"\n\ncyverse-ui requires that the material-ui base theme be extended with "cyverseTheme". Please refer to the cyverse-ui guide for instructions on theming`);
        }

        const display = hide ? "none" : displayProp;
        const background = palette[backgroundProp]
            ? palette[backgroundProp]
            : backgroundProp;

        const color = palette[colorProp]
            ? palette[colorProp]
            : colorProp;

        const fontStyle = themeTypography[typography];

        return {
            color,
            background,
            display,
            ...fontStyle,
            ...marg(whiteSpace),
            ...pad(whiteSpace)
        };
    };
}

Element.displayName = "Element";

Element.propTypes = {
    /**
     * As a primitive Element excepts any DOM node or component.
     */
    children: PropTypes.node
};

export default muiThemeable()(Element);
