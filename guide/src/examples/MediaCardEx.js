import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { styles, variables } from 'cyverse-ui/styles';
import Avatar from 'material-ui/Avatar';
import randomcolor from 'randomcolor';
import { PersonIcon } from '../icons';
import { MediaCard, Pill, MediaCardGroup, Div, P } from 'cyverse-ui';
import { Code } from '../components';

const v = variables;

export default React.createClass({
    getInitialState() {
        return {
            batchMode: true,
            checked: [],
        }
    },

    onCheck( e ) {
        let list = this.state.checked;
        let curr = e.props.uid;
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
    },

    Example() {
        return (
            <Div mb={ 4 }>
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
                        title={"MediaCard Example"}
                        subTitle={"So much to say"}
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

                        detail={ this.state.isExpanded ? 
                            (
                                <div>
                                    <P>
                                        Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                                    </P>
                                    <P>
                                        Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                                    </P>
                                </div>
                            ) : 
                            (
                                <span style={styles.t.body1}>
                                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak
                                </span>
                            )
                        } 
                        menuItems = {[
                            <MenuItem key="1" primaryText="Refresh" />,
                            <MenuItem key="2" primaryText="Send feedback" />,
                            <MenuItem key="3" primaryText="Settings" />,
                            <MenuItem key="4" primaryText="Help" />,
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
                        title={"Without Menu"}
                        summary="I don't have any subtitle data either"

                        detail={ this.state.isExpanded ? 
                            (
                                <div>
                                    <P>
                                        Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                                    </P>
                                    <P>
                                        Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                                    </P>
                                </div>
                            ) : 
                            (
                                <span style={styles.t.body1}>
                                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak
                                </span>
                            )
                        } 
                    />
                </MediaCardGroup>
            </Div>
        )
    },

    render() {
        return (
            <div>
                { this.Example() }
                <Code children={
                    /* This is a string for our code snippt. 
                     * It is not indented because it messes up the formating in render.     
                     * Initially used `toJSX(Example())` which was an awesome solution but it renders the Radium wrapper instead of Button :( */
`<MediaCardGroup>
    <MediaCard 
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
        title={"MediaCard Example"}
        subTitle={"So much to say"}
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

        detail={ this.state.isExpanded ? 
            (
                <div>
                    <P>
                        Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                    </P>
                    <P>
                        Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                    </P>
                </div>
            ) : 
            (
                <span style={styles.t.body1}>
                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak
                </span>
            )
        } 
        menuItems = {[
            <MenuItem key="1" primaryText="Refresh" />,
            <MenuItem key="2" primaryText="Send feedback" />,
            <MenuItem key="3" primaryText="Settings" />,
            <MenuItem key="4" primaryText="Help" />,
        ]}
    />
    <MediaCard 
        image={
            <Avatar
                children="W"
                backgroundColor={ 
                    randomcolor({
                        seed: "Without Menu"
                    })}
                color="rgba(255,255,255,.7)"
            />

        }
        title={"Without Menu"}
        summary="I don't have any subtitle data either"

        detail={ this.state.isExpanded ? 
            (
                <div>
                    <P>
                        Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak. Cupim bresaola brisket beef pork belly turkey meatball ground round beef ribs tenderloin ham hock shankle swine chuck. Andouille short loin tail doner leberkas chicken cow venison shankle cupim hamburger beef ribs. Pastrami doner bacon, spare ribs prosciutto capicola andouille boudin.
                    </P>
                    <P>
                        Turkey biltong filet mignon meatloaf picanha. Turkey rump swine cupim porchetta beef shoulder shank beef ribs pork. Turducken corned beef ground round leberkas strip steak beef rump. Biltong swine corned beef, shankle andouille bacon tenderloin cow ball tip pancetta salami. Alcatra beef picanha short ribs chicken turducken ground round flank shankle pancetta. Meatball bacon biltong turducken.
                    </P>
                </div>
            ) : 
            (
                <span style={styles.t.body1}>
                    Bacon ipsum dolor amet turkey landjaeger ground round sausage flank strip steak
                </span>
            )
        } 
    />
</MediaCardGroup>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
