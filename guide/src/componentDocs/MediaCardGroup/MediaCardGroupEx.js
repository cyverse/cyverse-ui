import React, { Component } from 'react';
import randomcolor from 'randomcolor';
import { Avatar, FlatButton } from 'material-ui';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import { MediaCardGroup, MediaCard, P, Element} from 'cyverse-ui';

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
                    style={{marginBottom: "32px"}}
                    icon={<RefreshIcon/>}
                    label="Replay Stagger"
                    onTouchTap={ this.onRefresh }
                />
                <Element
                    root="h2"
                    typography="title"
                    whitespace="mb3"
                >
                    With stagger and scroll animations
                </Element>
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

                <Element
                    root="h2"
                    typography="title"
                    whitespace="mb3"
                >
                    No stagger or scroll animations
                </Element>
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
