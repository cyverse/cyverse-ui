import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { styles, variables } from 'cyverse-ui/styles';
import { PersonIcon } from '../icons';
import { MediaCard, Avatar, Badge, MediaCardGroup} from 'cyverse-ui';
import { Code, P, Div } from '../components';

const v = variables;

export default React.createClass({
    getInitialState() {
        return {
            isExpanded: false
        }
    },

    onExpand() {
       let isExpanded = this.state.isExpanded ? false : true;
       this.setState({
           isExpanded
       })
    },

    Example() {
        return (
            <Div mb={ 4 }>
                <MediaCardGroup>
                    <MediaCard 
                        image={
                            <Avatar 
                                size={40} 
                                name={"MediaCard Example"}
                            />
                        }
                        title={"MediaCard Example"}
                        subTitle={"So much to say"}
                        titleInfo= { 
                            <div>
                                <Badge mr={ 2 }>Featured</Badge>
                                <Badge>23</Badge>
                                <PersonIcon 
                                    size={ 15 }
                                    color={ v.c.grey.xDark }
                                />
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
                            <MenuItem primaryText="Refresh" />,
                            <MenuItem primaryText="Send feedback" />,
                            <MenuItem primaryText="Settings" />,
                            <MenuItem primaryText="Help" />,
                            <MenuItem primaryText="Sign out" />,
                        ]}
                        color={"#0971AB"}
                    />
                    <MediaCard 
                        image={
                            <Avatar 
                                size={40} 
                                name={"Without Menu"}
                            />
                        }
                        title={"Without Menu"}
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
                        color={"#0971AB"}
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
                size={40} 
                name={"MediaCard Example"}
            />
        }
        title={"MediaCard Example"}
        subTitle={"So much to say"}
        titleInfo= {
            <div>
                <Badge mr={ 2 }>Featured</Badge>
                <Badge>23</Badge>
                <PersonIcon
                    size={ 15 }
                    color={ v.c.grey.xDark }
                />
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
        contextualMenu = {[
            {render: "red"},
            {render: "yellow"},
            {render: "green"}
        ]}
        color={"#0971AB"}
        onExpand={this.onExpand}
        isExpanded={this.state.isExpanded}
        menuItems = {[
            <MenuItem primaryText="Refresh" />,
            <MenuItem primaryText="Send feedback" />,
            <MenuItem primaryText="Settings" />,
            <MenuItem primaryText="Help" />,
            <MenuItem primaryText="Sign out" />,
        ]}
        color={"#0971AB"}
    />
    <MediaCard 
        image={
            <Avatar 
                size={40} 
                name={"Without Menu"}
            />
        }
        title={"Without Menu"}
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
        color={"#0971AB"}
    />
</MediaCardGroup>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
