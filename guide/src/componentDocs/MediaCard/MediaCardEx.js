import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { styles, variables } from 'cyverse-ui/styles';
import Avatar from 'material-ui/Avatar';
import randomcolor from 'randomcolor';
import { PersonIcon } from '../../icons';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import EditIcon from 'material-ui/svg-icons/image/edit';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';
import FavoriteBorderIcon from 'material-ui/svg-icons/action/favorite-border';

import { MediaCard, Pill, MediaCardGroup, Div, P } from 'cyverse-ui';
import { Code } from '../../components';

const v = variables;

export default class extends React.Component {
    state = {
        batchMode: true,
        checked: [],
    };

    onCheck = (e, item) => {
        let list = this.state.checked;
        // We can set or use any prop we want for this check
        let curr = item.props.uid;

        let checked;
        if ( list.indexOf( curr ) !== -1 ) {
            checked = list.filter( item => curr !== item);
        } else {
            checked = [
                ...list,
                curr
            ];
        };

        this.setState({ checked });
    };

    render() {
        return (
            <MediaCardGroup>
                <MediaCard
                    uid = "1"
                    batchMode = { this.state.checked.length > 0 }
                    checked = { this.state.checked.indexOf("1") !== -1 }
                    onBatchClick = { this.onCheck }
                    image={
                        <Avatar
                            children="M"
                            backgroundColor={
                                randomcolor({
                                    seed: "MediaCard Example"
                                })}
                            color="rgba(255,255,255,.7)"
                        />
                    }
                    title="I'm a MediaCard"
                    subTitle="So much to say"
                    titleInfo= {
                        <div>
                            <Pill>
                                Featured
                            </Pill>
                            <Pill
                                icon = { <PersonIcon/> }
                            >
                                23
                            </Pill>
                        </div>
                    }
                    summary="Bacon ipsum dolor amet turkey landjaeger ground round sausage"

                    detail={ <div>
                                <P>
                                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                                </P>
                                <P>
                                    Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                                </P>
                            </div>
                    }
                    menuItems = {[
                        <MenuItem key="1" primaryText="Refresh" />,
                        <MenuItem key="2" primaryText="Send feedback" />,
                        <MenuItem key="3" primaryText="Settings" />,
                        <MenuItem key="4" primaryText="Help" />,
                    ]}
                    quickLinks = {[
                        <IconButton><FavoriteIcon color="red"/></IconButton>,
                        <IconButton><EditIcon/></IconButton>,
                        <IconButton><DeleteIcon/></IconButton>,
                    ]}
                    activeQuickLinks = {[
                        <IconButton><FavoriteIcon color="red"/></IconButton>
                    ]}
                />
                <MediaCard
                    uid = "2"
                    batchMode = { this.state.checked.length > 0 }
                    checked = { this.state.checked.indexOf("2") !== -1 }
                    onBatchClick = { this.onCheck }
                    image={
                        <Avatar
                            children="W"
                            backgroundColor={
                                randomcolor({
                                    seed: "WithoutMenu"
                                })}
                            color="rgba(255,255,255,.7)"
                        />

                    }
                    title="I have no Menu"
                    summary="I don't have any subtitle data either"

                    detail={ <div>
                                <P>
                                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                                </P>
                                <P>
                                    Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                                </P>
                            </div>
                    }
                />
            </MediaCardGroup>
        )
    }
}
