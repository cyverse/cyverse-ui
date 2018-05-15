import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "material-ui/styles";
import Element from "./Element";

// Each key of the returned object will be available as a className below.
const styles = theme => ({
    wrapper: {
        width: "0%",
        flex: "1",
    },
});

/** ListCardSummary is the area in ListCardHeader between ListCardIdentity and ListCardActions. Used to display a short summary or overview information at a birds eye view. Works well with SummaryText for truncating / previewing large blocks of text into a single line. For to display more information make the card expandable and render the additional information in ListCardDetail.
 *
 * For a more "automagic" solution or to see an example of how ListCardSummary and ListCardDetail work together on expandable cards see `MediaCard`.
 */
const ListCardSummary = ({
    classes,
    className,
    children,
    ...rest
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ListCardSummery",
        classes.wrapper
    );
    return (
        <Element
            {...rest}
            whitespace="mr3"
            className={wrapperClasses}
        >
            {children}
        </Element>
    );
};

ListCardSummary.displayName = "ListCardSummary";

ListCardSummary.propTypes = {
    /**
     * Pass anything you want to render within ListCardSummary as children.
     *
     * If a text summary is desired `SummaryText` is recommended.
     */
    children: PropTypes.node,
};

export default withStyles(styles)(ListCardSummary);
