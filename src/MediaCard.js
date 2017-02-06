import React from 'react';
import Dimensions from 'react-dimensions';
import Scroll from 'react-scroll';
import VerticalMenu from './VerticalMenu';
import Hr from './Hr';
import Collapse from 'react-collapse';
import styles from './styles/styles';

const scroll = Scroll.animateScroll;

const MediaCard = React.createClass({
    getInitialState() {
        return {
            cardIsHovered: false,
        }
    },

    onCardEnter() {
        this.setState({
            cardIsHovered: true,
        }); 
    },

    onCardLeave() {
        this.setState({
            cardIsHovered: false,
        }); 
    },

    renderQuickLinks() {
        if ( this.props.quickLinks ) {
            return (
                <div style={ this.styles().quickLinks }>
                    { this.props.quickLinks.map( link => link ) }
                </div>
            )
        }
    },

    renderVericalMenu() {
        const { menuItems, isDisabledMenu } = this.props;
        if ( menuItems ) {
            return (
                <VerticalMenu
                    children={ menuItems }
                    disabled={ isDisabledMenu }
                />
            )
        }
    },

    onExpand() {
        this.props.onExpand();
        let scrollAmount = this.props.isExpanded ?
          -30 : 30;
        scroll.scrollMore(scrollAmount, {
            duration: 95,
        });
    },

    detail() {
        const { isExpanded, detail } = this.props;

        return isExpanded ? (
            <div style = { this.styles().detail }>
                <Hr style = {{ margin: "0px -20px 20px" }}/>
                { detail }
            </div>
        ) : null; 
    },

    render() {
        const { 
            image,
            title,
            subTitle,
            titleInfo,
            summary
        } = this.props;

        return (
            <div style = {this.styles().card} >
                <Collapse
                    isOpened={ true }
                    springConfig={{stiffness: 520, damping: 35, precision: .001}}
                >
                    <div 
                        style = { this.styles().header }
                        onMouseEnter = { this.onCardEnter }
                        onMouseLeave = { this.onCardLeave }
                        onClick = {this.onExpand}
                    >
                            <div style={ this.styles().identity}>
                                <div style={ this.styles().image }>
                                    { image }
                                </div>
                                <div>
                                    <div style={ this.styles().title }>
                                        { title }
                                    </div>

                                    <div style={ this.styles().subTitle }>
                                        { subTitle }
                                    </div>

                                    <div>
                                        { titleInfo }
                                    </div>
                                </div>

                            </div>

                            <div style={ this.styles().summary }>
                                {  summary }
                            </div>

                            <div style={ this.styles().menu } >
                                { this.renderQuickLinks() }
                                { this.renderVericalMenu() } 
                            </div>

                        </div>
                        { this.detail() }
                </Collapse>
            </div>
        )
    },

    styles() {
        let style = {};

        // card style
        let cardShadow = styles.boxShadow.li 
        let openStyle = {};
        if (this.props.isExpanded) {
            cardShadow = styles.boxShadow.lg
            openStyle = { margin: "50px -20px" };
        }
        style.card = {
            ...openStyle,
            position: "relative",
            transition: "all ease .1s",
            background: "white",
            ...cardShadow,
        };

        // header style
        style.header = {
            display: "flex",
            flexWrap: "nowrap",
            alignContent: "stretch",
            cursor: "pointer",
            padding: "10px",
            minHeight: "65px",
            alignItems: "center",
        };
        if (this.props.containerWidth <= 750) {
            style.header.display = "block"
        }

        // identety style
        style.identity = {
            display: "flex",
            alignItems: "center",
            minWidth: "250px",
        };
        if (this.props.containerWidth <= 750) {
            style.identity.marginRight = "50px";
        }


        // image style
        style.image = {
            flexShrink: "0",
            position: "relative",
            marginRight: "10px",
            alignSelf: "flex-start", 
            borderRadius: "50%", 
            overflow: "hidden",
        };
        
        // title style
        style.title = {
            ...styles.t.body2,
            marginRight: "20px",
            color: this.props.color,
        };

        // subtitle style
        style.subTitle = {
            ...styles.t.caption,
        };

        // summary style
        style.summary = {
            width: "100%",
            marginRight: "60px",
            opacity: "1",
            ...styles.t.body1,
        };
        if (this.props.containerWidth <= 750) {
            style.summary.marginTop = "30px";
            style.summary.marginRight = "0px";
        }
        if (this.props.isExpanded) {
            style.summary.display = "none";
        }

        // menu style
        style.menu = {
            background: "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 28%,rgba(255,255,255,1) 100%)",
            display: "flex",
            position: "absolute",
            right: "5px",
            top: "8px",
        };

        // quickMenu 
        style.quickLinks = {
            display: "none",
            padding: "5px 10px 5px 75px",
            alignItems: "center",
        };
        if ( this.state.cardIsHovered || this.props.isExpanded ) {
            style.quickLinks.display = "flex";
        }

        // detail style
        style.detail = {
            padding: "0px 20px 20px"
        };

        return style
    }
});

export default Dimensions({ 
    containerStyle: { height: 'auto' }
})(MediaCard);
