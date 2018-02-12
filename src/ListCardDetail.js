import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Element from "./Element";
import Hr from "./Hr";

/**
 * ListCardDetail is the area below ListCardHeader where the details on the ListCard lives.
 *
 * Typically the details are only shown on an "expanded" ListCard while at the same time hiding ListCardSummary. This is done by manually controlling these components by setting the `hide` prop to `true`.
 *
 * ListCardDetail is a primitive component that needs to be controlled but is more flexible. For a more "automagic" solution see `MediaCard`.
 */
const ListCardDetail = ({ children, className, ...rest }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-ListCardDetail"
    );

    return (
        <Element className={wrapperClasses} {...rest}>
            <Hr className="CY-ListCardDetail-Hr" whitespace="mb3" />
            <Element
                className="CY-ListCardDetail-content"
                whitespace="p3"
            >
                {children}
            </Element>
        </Element>
    );
};
ListCardDetail.displayName = "ListCardDetail";

ListCardDetail.propTypes = {
    /**
     * Pass any content you would like to render in the ListCard detail as children.
     */
    children: PropTypes.node,
};

export default ListCardDetail;
