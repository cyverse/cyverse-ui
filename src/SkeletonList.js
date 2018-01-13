import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";

import { Avatar, CircularProgress } from "material-ui";
import MediaCard from "./MediaCard";

const styleSheet = () =>
    createStyleSheet("Search", theme => ({
        wrapper: {
            position: "relative",
            padding: "2px",
            margin: "-2px",
            maskImage: `gradient(linear, center top, center bottom,
                        color-stop(0.00,  rgba(0,0,0,1)),
                        color-stop(0.80,  rgba(0,0,0,.1)),
                        color-stop(1.00,  rgba(0,0,0,0)))`,
        },
    }));

const SkeletonText = props => {
    return (
        <div>
            <div
                style={{
                    height: "10px",
                    width: "80%",
                    marginBottom: "10px",
                    background: "#EFEFEF",
                    borderRadius: "800px",
                }}
            />
            <div
                style={{
                    height: "10px",
                    width: "70%",
                    background: "#EFEFEF",
                    borderRadius: "800px",
                }}
            />
        </div>
    );
};

const SkeletonList = props => {
    /**
     * SkeletonLists are placeholders for MediaCards while they are loading. They help to inform the user that a list will show.
     */
    const classes = getStyleManager({}).render(styleSheet());

    const { cardCount } = props;
    let SkeletonCards = [];
    for (let i = 0; i < cardCount; i++) {
        SkeletonCards.push(
            <MediaCard
                key={i}
                image={<Avatar size={40} backgroundColor="#EFEFEF" />}
                title={<SkeletonText />}
                summary={<SkeletonText />}
            />
        );
    }

    return (
        <div className={classes.wrapper}>
            {SkeletonCards}
            <CircularProgress
                size={75}
                style={{
                    position: "absolute",
                    marginRight: "auto",
                    marginLeft: "auto",
                    right: 0,
                    left: 0,
                    top: "50px",
                }}
            />
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

export default SkeletonList;
