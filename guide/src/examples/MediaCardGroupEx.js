import React, { PropTypes } from 'react';
import { MediaCardGroup, MediaCard } from 'troposphere-ui';
import { Code } from '../components';
const MediaCardGroupEx = React.createClass({

    render() {
        return (
            <div>
                <MediaCardGroup mb={ 4 }>
                    <MediaCard
                        title="Card 1"
                        detail="sdsdsdsdsds"
                        contextualMenu = {[
                            {render: "red"},
                            {render: "yellow"},
                            {render: "green"}
                        ]}
                    />
                    <MediaCard
                        title="Card 2"
                        detail="sdsdsdsdsds"
                        contextualMenu = {[
                            {render: "red"},
                            {render: "yellow"},
                            {render: "green"}
                        ]}
                    />
                    <MediaCard
                        title="Card 2"
                        detail="sdsdsdsdsds"
                        contextualMenu = {[
                            {render: "red"},
                            {render: "yellow"},
                            {render: "green"}
                        ]}
                    />
                    <MediaCard
                        title="Card 2"
                        detail="sdsdsdsdsds"
                        contextualMenu = {[
                            {render: "red"},
                            {render: "yellow"},
                            {render: "green"}
                        ]}
                    />
                </MediaCardGroup>

                <Code children={
    `
    <MediaCardGroup mb={ 4 }>
        <MediaCard
            title="Card 1"
            detail="sdsdsdsdsds"
            contextualMenu = {[
                {render: "red"},
                {render: "yellow"},
                {render: "green"}
            ]}
        />
        <MediaCard
            title="Card 2"
            detail="sdsdsdsdsds"
            contextualMenu = {[
                {render: "red"},
                {render: "yellow"},
                {render: "green"}
            ]}
        />
        <MediaCard
            title="Card 2"
            detail="sdsdsdsdsds"
            contextualMenu = {[
                {render: "red"},
                {render: "yellow"},
                {render: "green"}
            ]}
        />
        <MediaCard
            title="Card 2"
            detail="sdsdsdsdsds"
            contextualMenu = {[
                {render: "red"},
                {render: "yellow"},
                {render: "green"}
            ]}
        />
    </MediaCardGroup>
                    ` 
                }
            />
        </div>
        );
    }
});

MediaCardGroupEx.propTypes = {
    className: PropTypes.string,
};

export default MediaCardGroupEx;
