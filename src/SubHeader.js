import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
import classnames from "classnames";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import VerticalMenu from "./VerticalMenu";
import ActionGroup from "./ActionGroup";
import Element from "./Element";

const styles = theme => ({
    wrapper: {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
    },

    titleGroup: {
        display: "flex",
        flex: "1",
        alignItems: "center",
    },

    backButton: {
        float: "left",
        cursor: "pointer",
        position: "relative",
        marginRight: "10px",
    },
});
/**
 * SubHeader is the contextual header located at the top of a sub-view. A Sub-view is a view that one would navigate to from a main-view. For example clicking on a list item might open a sub-view detail of that list item. The SubHeader has a back button to navigate back to the main-view and some top level controls or actions for the particular sub-view.
 */
const SubHeader = ({
    classes,
    className,
    name,
    quickActions,
    menuItems,
    onBack,
}) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "SubHeader",
        classes.wrapper
    );

    const titleGroupClasses = classnames(
        "SubHeader-titleGroup",
        classes.titleGroup
    );

    const renderOptionGroup = () => {
        let renderQuickActions = (option, i) => {
            return <div key={option + i}>{option}</div>;
        };

        if (quickActions || menuItems) {
            return (
                <ActionGroup className="SubHeader-Actions">
                    {quickActions
                        ? quickActions.map(renderQuickActions)
                        : null}
                    {menuItems ? (
                        <VerticalMenu children={menuItems} />
                    ) : null}
                </ActionGroup>
            );
        }
    };

    return (
        <div className={wrapperClasses}>
            <div className={titleGroupClasses}>
                <IconButton
                    className="SubHeader-backBtn"
                    onTouchTap={onBack}
                >
                    <ArrowBack />
                </IconButton>
                <Element
                    className="SubHeader-title"
                    root="h1"
                    typography="title"
                >
                    {name}
                </Element>
            </div>
            {renderOptionGroup()}
        </div>
    );
};

SubHeader.displayName = "SubHeader";

SubHeader.propTypes = {
    /**
     * The name of the view.
     */
    name: PropTypes.string,
    /**
     * The exposed actions on the right, expects MUI IconButtons.
     */
    quickActions: PropTypes.array,
    /**
     * The Actions within the verical menu on the right, expects MUI MenuItems.
     */
    menuItems: PropTypes.array,
    /**
     * Callback when the back button is pressed.
     */
    onBack: PropTypes.func,
};

export default withTheme(injectSheet(styles)(SubHeader));
