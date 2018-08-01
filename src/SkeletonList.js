import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classnames from "classnames";

import { Avatar, CircularProgress } from "material-ui";
import ListCard from "./ListCard";
import ListCardHeader from "./ListCardHeader";
import ListCardIdentity from "./ListCardIdentity";
import ListCardSummary from "./ListCardSummary";

const styles = {
    wrapper: {
        position: "relative",
        padding: "2px",
        margin: "-2px",
        maskImage: `gradient(linear, center top, center bottom,
                        color-stop(0.00,  rgba(0,0,0,1)),
                        color-stop(0.80,  rgba(0,0,0,.1)),
                        color-stop(1.00,  rgba(0,0,0,0)))`,
    },
    progress: {
        position: "absolute !important",
        marginRight: "auto",
        marginLeft: "auto",
        right: 0,
        left: 0,
        top: "50px",
    },
    avatar: {
        flexShrink: 0,
        marginRight: 16,
    },
};

const SkeletonTextStyles = {
    wrapper: {
        width: "100%",
        paddingRight: "32px",
    },
    text: {
        height: "16px",
        width: "100%",
        background: "#EFEFEF",
        borderRadius: "2px",
    },
};
const SkeletonText = withStyles(SkeletonTextStyles)(
    ({ classes, className }) => {
        const wrapperClasses = classnames(
            { [className]: className },
            "CY-SkelletonText",
            classes.wrapper
        );
        const firstLineClasses = classnames(
            "CY-SkelletonText-firstLine",
            "CY-SkelletonText-text",
            classes.firstLine,
            classes.text
        );
        return (
            <div className={wrapperClasses}>
                <div className={firstLineClasses} />
            </div>
        );
    }
);

/**
 * SkeletonLists are placeholders for MediaCards while they are loading. They help to inform the user that a list will show.
 */
const SkeletonList = ({ classes, className, cardCount }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "CY-SkelletonList",
        classes.wrapper
    );
    const avatarClasses = classnames(
        "CY-SkelletonCard-avatar",
        classes.avatar
    );
    const progressClasses = classnames(
        "CY-SkelletonCard-progress",
        classes.progress
    );

    let SkeletonCards = [];
    for (let i = 0; i < cardCount; i++) {
        SkeletonCards.push(
            <ListCard className="CY-SkelletonCard" key={i}>
                <ListCardHeader className="CY-SkelletonCard-header">
                    <ListCardIdentity className="CY-SkelletonCard-identity">
                        <Avatar
                            className={avatarClasses}
                            style={{ background: "#EFEFEF"}}
                        />
                        <SkeletonText />
                    </ListCardIdentity>
                    <ListCardSummary className="CY-SkelletonCard-summary">
                        <SkeletonText />
                    </ListCardSummary>
                </ListCardHeader>
            </ListCard>
        );
    }

    return (
        <div className={wrapperClasses}>
            {SkeletonCards}
            <CircularProgress size={75} className={progressClasses} />
        </div>
    );
};

SkeletonList.displayName = "SkeletonList";

SkeletonList.propTypes = {
    /**
     * Number of cards to render
     */
    cardCount: PropTypes.number,
};

SkeletonList.defaultProps = {
    cardCount: 5,
};

export default withStyles(styles)(SkeletonList);
