import React from 'react';
import { styles, variables } from 'troposphere-ui/styles';
import { PersonIcon } from '../icons';
import { MediaCard, Avatar, Badge, } from 'troposphere-ui';
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
                <MediaCard 
                    image={
                        <Avatar 
                            size={40} 
                            color="#de3894" 
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
                    contextualMenu = {[
                        {render: "red"},
                        {render: "yellow"},
                        {render: "green"}
                    ]}
                    color={"#0971AB"}
                    onExpand={this.onExpand} 
                    isExpanded={this.state.isExpanded}
                />
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
`<Div mb={ 4 }>
    <MediaCard 
        image={
            <Avatar 
                size={40} 
                color="#de3894" 
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
        contextualMenu = {[
            {render: "red"},
            {render: "yellow"},
            {render: "green"}
        ]}
        color={"#0971AB"}
        onExpand={this.onExpand} 
        isExpanded={this.state.isExpanded}
    />
</Div>`
                    /* Code string ends here */
                }/>
            </div>
        )
    }
});
