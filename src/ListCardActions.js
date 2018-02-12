import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ActionGroup from "./ActionGroup";

/**
 * ListCardActions is the area on ListCard on the right where actions live.
 */
const ListCardActions = ({
    classes,
    className,
    children,
    ...rest
}) => {
    const ActionGroupClasses = classnames(
        { [className]: className },
        "CY-ListCardActions"
    );
    return (
        <ActionGroup
            {...rest}
            stopPropagation
            className={ActionGroupClasses}
        >
            {children}
        </ActionGroup>
    );
};
ListCardActions.displayName = "ListCardActions";

ListCardActions.propTypes = {
    /**
     * Pass anything you want to render within ListCardActions as children.
     *
     * For best results use `ActionGroup` with `IconButtons`.
     */
    children: PropTypes.node,
};

export default ListCardActions;
