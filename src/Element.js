import React from "react";
import PropTypes from "prop-types";
import filterDomProps from "filter-react-dom-props";
import * as R from "ramda";
import classnames from "classnames";
import injectSheet, { withTheme } from "react-jss";
import * as events from "./utils/events";

// Each key of the returned styles object will be available as a className below.
const styles = theme => ({
    ...R.mergeAll(R.toPairs(theme.palette).map( color => (
        { ["background_" + color[0]]: { background: color[1] } }
    ))),
    ...R.mergeAll(R.toPairs(theme.palette).map( color => (
        { ["color_" + color[0]]: { color: color[1] } }
    ))),
    ...theme.utility,
    ...theme.typography,
    ...theme.whitespace,
    ...theme.elevation,
});

/**
 * All of CyVerse-UI is built with "Element". It is the same basic idea as MUI's "Paper" with the core features that are common across the CY-UI world. These features let you access global utilities for whitespace and typography to maintain consistency throughout your components without leaking global variables.
 *
 * Render the html tag you want using the root prop and pass any html attributes that element accepts.
 **/
class Element extends React.Component {
    clickHandler = e => {
        const { stopPropagation, onClick } = this.props;
        stopPropagation ? events.stopPropagation(e) : null;
        onClick ? onClick(e) : null;
    };

    onKeyDown = e => {
        if (e.keyCode === 13) {
            this.clickHandler(e);
        }
    };

    render() {
        const {
            theme,
            root = "div",
            className,
            classes,
            hide = false,
            hideReadable = false,
            themeBackground,
            themeColor,
            typography = "body1",
            whitespace = [],
            elevation = 0,
            tabindex,
            onClick,
            ...rest
        } = this.props;

        // Throw an error if not using a CY-UI compatible theme
        const { typography: themeTypography } = theme;
        if (!themeTypography) {
            throw `missing "cyverse-ui" dependency\n\nThe theme field "typography" is missing. "cyverse-ui" requires that the material-ui base theme be extended with "cyverseTheme". Visit https://cyverse.github.io/cyverse-ui/ to learn more about cyverse-ui theming.`;
        }

        const Root = root;
        const whitespaceClass = Array.isArray(whitespace)
            ? whitespace.map(i => classes[i]).join(" ")
            : classes[whitespace];
        const elevationClass = [classes["elevation" + elevation]];

        const wrapperClasses = classnames(
            { [className]: className },
            "Element",
            { [classes.hide]: hide },
            { [classes.hideReadable]: hideReadable },
            { [elevationClass]: elevation > 0 },
            { [classes["background_" + themeBackground]]: themeBackground },
            { [classes["color_" + themeColor]]: themeColor },
            classes.wrapper,
            classes[typography],
            whitespaceClass
        );

        return (
            <Root
                {...filterDomProps(rest)}
                tabIndex={tabindex ? tabindex : onClick ? "0" : null}
                className={wrapperClasses}
                onClick={this.clickHandler}
                onKeyDown={this.onKeyDown}
            >
                {this.props.children}
            </Root>
        );
    }
}

Element.displayName = "Element";

Element.propTypes = {
    /**
     * As a primitive Element excepts any DOM node or component.
     */
    children: PropTypes.node,
    /**
     * The html tag to render, For example, "p", "div", "span". All html atrributes like "title", "src" etc.. are passed down.
     */
    root: PropTypes.string,
    /**
     * The color of the text. You can use theme palette names like "primary1Color"
     */
    color: PropTypes.string,
    /**
     * The color of the background. You can use theme palette names like "primary1Color"
     */
    background: PropTypes.string,
    /**
     * The typography styles from the theme like "title" or "body1"
     */
    typography: PropTypes.string,
    /**
     * Whitespace can be a string or an array of strings representing a spacing property followed by a spacing unit ranging 0 - 20. The expected values are shorthand "mb1" is "margin-bottom" with a unit of 1 so "mt1" is top "ml1" is left etc..., Padding is the same with a "p" instead of an "m". Other values are: top and bottom "mv1" for vertical, right and left "ms1" for sides, and all directions "m1" see example above or in the theme documentation on whitespace for a list of values. It is good to use whitespace units (multiples of 8px) over other values for margin or padding for consistancy and best alignment. See the Material Design specs for guidence.
     */
    whitespace: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    /**
     * Elevation is how high the element comes off the page visually through shadow depth. Expects values between 0 and 24.
     */
    elevation: PropTypes.number,
};

Element.defaultProps = {
    root: "div",
    typography: "body1",
    whitespace: ["m0", "p0"],
};

export default withTheme(injectSheet(styles)(Element));
