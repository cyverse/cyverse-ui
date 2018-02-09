import React from "react";
import PropTypes from "prop-types";
import injectSheet, { withTheme } from "react-jss";
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

const SkeletonTextStyles = theme => ({
    wrapper: {
        width: "100%",
        paddingRight: "32px",
    },
    text: {
        height: "8px",
        width: "100%",
        background: "#EFEFEF",
        borderRadius: "800px",
    },
    firstLine: {
        width: "100%",
        marginBottom: "12px",
    },
    secondLine: {
        width: "80%",
    },
});
const SkeletonText = withTheme(
    injectSheet(SkeletonTextStyles)(({ classes, className }) => {
        const wrapperClasses = classnames(
            { [className]: className },
            "SkelletonText",
            classes.wrapper
        );
        const firstLineClasses = classnames(
            "SkelletonText-firstLine",
            "SkelletonText-text",
            classes.firstLine,
            classes.text
        );
        const secondLineClasses = classnames(
            "SkelletonText-secondLine",
            "SkelletonText-text",
            classes.secondLine,
            classes.text
        );
        return (
            <div className={wrapperClasses}>
                <div className={firstLineClasses} />
                <div className={secondLineClasses} />
            </div>
        );
    })
);

/**
 * SkeletonLists are placeholders for MediaCards while they are loading. They help to inform the user that a list will show.
 */
const SkeletonList = ({ classes, className, cardCount }) => {
    const wrapperClasses = classnames(
        { [className]: className },
        "SkelletonList",
        classes.wrapper
    );
    const avatarClasses = classnames(
        "SkelletonCard-avatar",
        classes.avatar
    );
    const progressClasses = classnames(
        "SkelletonCard-progress",
        classes.progress
    );

    let SkeletonCards = [];
    for (let i = 0; i < cardCount; i++) {
        SkeletonCards.push(
            <ListCard className="SkelletonCard" key={i}>
                <ListCardHeader className="SkelletonCard-header">
                    <ListCardIdentity className="SkelletonCard-identity">
                        <Avatar
                            className={avatarClasses}
                            backgroundColor="#EFEFEF"
                        />
                        <SkeletonText />
                    </ListCardIdentity>
                    <ListCardSummary className="SkelletonCard-summary">
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

export default injectSheet(styles)(SkeletonList);
