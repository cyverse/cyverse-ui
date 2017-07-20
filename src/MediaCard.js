import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Dimensions from 'react-dimensions';
import VerticalMenu from './VerticalMenu';
import Hr from './Hr';
import styles from './styles/styles';
import marg from './styles/marg';

const MediaCard = React.createClass({
    getInitialState() {
        return {
            cardIsHovered: false,
            avatarIsHovered: false,
        }
    },

    onCardEnter() {
        this.setState({
            avatarIsHovered: true,
            cardIsHovered: true,
        }); 
    },

    onCardLeave() {
        this.setState({
            avatarIsHovered: false,
            cardIsHovered: false,
        }); 
    },

    onExpand() {
        this.props.onExpand();
    },

    onCheck(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        this.props.onBatchClick(e, this);
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

    renderAvatar() {
        const { image, batchMode, onBatchClick } = this.props;
        const { avatarIsHovered } = this.state;
        const styles = this.styles();

        let avatar = image;

        if ( onBatchClick && ( batchMode || avatarIsHovered ) ) {
            avatar = ( 
                <Checkbox
                    onClick = { this.onCheck }
                    checked = { this.props.checked }
                    style = {{ margin: "auto", width: "60%" }}
                    color = { this.props.primaryColor }
                />
            )
        }
        
        if (image) {
            return (
                <div style={ styles.image }>
                    { avatar }
                </div>
            )
        }
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
        
        const styles = this.styles();

        return (
            <div style = {this.styles().card} >
                <div 
                    style = { styles.header }
                    onMouseEnter = { this.onCardEnter }
                    onMouseLeave = { this.onCardLeave }
                    onClick = {this.onExpand}
                >
                    <div style={ styles.identity}>
                        { this.renderAvatar() }
                        <div style={ styles.titleInfo }>
                            <div style={ styles.title }>
                                { title }
                            </div>

                            <div style={ styles.subTitle }>
                                { subTitle }
                            </div>

                            <div>
                                { titleInfo }
                            </div>
                        </div>

                    </div>

                    <div style={ styles.summary }>
                        {  summary }
                    </div>

                    <div style={ styles.menu } >
                        { this.renderQuickLinks() }
                        { this.renderVericalMenu() } 
                    </div>

                </div>
                { this.detail() }
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
            ...marg({ mr: 3 }),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "40px",
            minWidth: "40px",
            flexShrink: "0",
            position: "relative",
            marginRight: "10px",
            alignSelf: "flex-start", 
            borderRadius: "50%", 
        };

        // titleInfo style
        style.titleInfo = {
            width: "100%"
        }
        
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
            height: "48px",
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
