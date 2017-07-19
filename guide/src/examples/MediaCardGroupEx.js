import React, { Component } from 'react';
import randomcolor from 'randomcolor';
import { Avatar, FlatButton } from 'material-ui';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import { MediaCardGroup, MediaCard, P, Title } from 'cyverse-ui';
import { marg } from 'cyverse-ui/styles';

export default class MediaCardGroupEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        }
    }

    // Handler for refreshing the list
    onRefresh = () => {
        this.setState({
            refreshing: true
        });

        setTimeout( () => {
            this.setState({
                refreshing: false
            })
        }, 1);
    }

    render() {
        const { refreshing } = this.state;

        // Genaric data for MediaCards
        const summary="Include the 'stagger' prop to enable staggering"
        const description = (
            <P>
                Include the 'stagger' prop to enable staggering. The scroll animation is default, to disable it include the 'noScroll' prop
            </P>
        )
        
        // Build our MedaCard list to render
        const MediaCards = () => {
            let arr =[]
            for (var i = 0; i < 4; i++) {
                arr.push(
                    <MediaCard
                        key={ i }
                        image={
                            <Avatar
                                backgroundColor={
                                    randomcolor({
                                        seed: i + 20
                                    })
                                }
                                children="I"
                            />
                        }
                        title="I am a MediaCard"
                        summary={ summary }
                        detail={ description }
                    />
                )
            }

            return arr
        };

        return (
            <div>
                <FlatButton
                    style={ marg({ mb: 4 }) }
                    icon={<RefreshIcon/>}
                    label="Replay Stagger"
                    onTouchTap={ this.onRefresh }
                />
                <Title
                    h2
                    title
                >
                    With stagger and scroll animations
                </Title>
                <div style={{ height: "300px" }}>
                    { refreshing ? null : (
                        <MediaCardGroup
                            stagger
                            mb={ 5 }
                        >
                            { MediaCards() }
                        </MediaCardGroup>
                    ) }
                </div>

                <Title
                    h2
                    title
                >
                    No stagger or scroll animations
                </Title>
                <div style={{ height: "300px" }}>
                    { refreshing ? null : (
                        <MediaCardGroup
                            noScroll
                        >
                            { MediaCards() }
                        </MediaCardGroup>
                    ) }
                </div>
            </div>
        );
    }
}
