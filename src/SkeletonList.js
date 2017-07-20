import React from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import getStyleManager from "./styles/getStyleManager";
import muiThemeable from "material-ui/styles/muiThemeable";

import { Avatar, CircularProgress } from 'material-ui';
import MediaCard from './MediaCard';

const styleSheet = () => (
    createStyleSheet('Search',
        theme => ({
            wrapper: {
                position: "relative",
                padding: "2px",
                margin: "-2px",
                maskImage: `gradient(linear, center top, center bottom,
                        color-stop(0.00,  rgba(0,0,0,1)),
                        color-stop(0.80,  rgba(0,0,0,.1)),
                        color-stop(1.00,  rgba(0,0,0,0)))`
            }
        }
    ))
);

const SkeletonText = props => (
    <div>
        <div
            style={{
                height: "10px",
                width: "80%",
                marginBottom: "10px",
                background: "#EFEFEF"
            }}
        />
        <div
            style={{
                height: "10px",
                width: "70%",
                background: "#EFEFEF"
            }}
        />
    </div>
)

export default props => {
    const classes = getStyleManager({})
	.render(styleSheet());

    const { cardCount = 5 } = props;
    let SkeletonCards = [];
    for(let i=0;i<cardCount;i++) {
        SkeletonCards.push(
            <MediaCard
		key={ i }
                image={
                    <Avatar
                        size={ 40 }
                        backgroundColor="#EFEFEF"
                    />
                }
                title={
                    <SkeletonText/>
                }
                summary={
                    <SkeletonText/>
                }
            />
        )
    }

    return (
        <div className={ classes.wrapper }>
            { SkeletonCards }
            <CircularProgress
                size={ 75 }
                style={{
                    position: "absolute",
                    marginRight: "auto",
                    marginLeft: "auto",
                    right: 0,
                    left: 0,
                    top: "50px"
                }}
            />
        </div>
    );
};
