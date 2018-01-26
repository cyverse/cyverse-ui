import React from "react";
import PropTypes from "prop-types";
import InformationIcon from "material-ui/svg-icons/action/info";
import WarningIcon from "material-ui/svg-icons/alert/warning";
import Element from "./Element";
import injectSheet from "react-jss";

const styles = theme => {
    return {
        wrapper: {
            display: "flex",
        },
        Icon: {
            minWidth: "30px",
            ...theme.whitespace.mr3,
        },
    };
};

/**
 * The InfoBlock is used everywhere information is displayed to the user that isn't part of an input or title. Usually at the top of a view to explain the purpose of said view. The icon helps isolate the information from the UI.
 */
const InfoBlock = ({ warning, classes, text, ...rest }) => {
    const icon = () => {
        const classNames = `${classes.Icon} InfoBlock-icon`;

        if (warning) {
            return <WarningIcon className={classNames} />;
        }
        return <InformationIcon className={classNames} />;
    };
    return (
        <Element {...rest} className={`${classes.wrapper} InfoBlock`}>
            {icon()}
            {text}
        </Element>
    );
};

InfoBlock.displayName = "InfoBlock";
InfoBlock.propTypes = {
    /**
     * The information text that will be displayed.
     */
    text: PropTypes.node,
    /**
     * Show the warning icon over the default info icon
     */
    warning: PropTypes.bool,
};

InfoBlock.defaultProps = {
    warning: false,
};

export default injectSheet(styles)(InfoBlock);
