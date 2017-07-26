import React from 'react';
import Checkbox from 'material-ui/Checkbox';
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

    stopPropagation(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
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
        const { onExpand } = this.props;
        if (onExpand) {
            onExpand();
        }
    },

    onCheck(e) {
        e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        e.stopPropagation();
        this.props.onBatchClick(e, this);
    },

    renderQuickLinks() {
        const { quickLinks } = this.props;
        if ( quickLinks ) {
            return (
                <div
                    onClick={ this.stopPropagation }
                    style={ this.styles().quickLinks }>
                    { quickLinks.map( link => link ) }
                </div>
            )
        }
    },

    renderActiveQuickLinks() {
        const { activeQuickLinks } = this.props;
        if ( activeQuickLinks ) {
            return (
                <div
                    onClick={ this.stopPropagation }
                    style={ this.styles().activeQuickLinks }>
                    { activeQuickLinks.map(link => link ) }
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
            );
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
            title,
            subTitle,
            titleInfo,
            summary,
            className
        } = this.props;

        const styles = this.styles();

        return (
            <div className={ className } style = {this.styles().card} >
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
                        { this.renderActiveQuickLinks() }
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
            openStyle = {
                margin: "40px -20px",
                borderLeft: "solid 5px #0971ab"
            };
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

        // identety style
        style.identity = {
            display: "flex",
            alignItems: "center",
            minWidth: "300px",
        };

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
            width: "100%",
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

        style.activeQuickLinks = {
            display: "flex",
            padding: "5px 10px",
            alignItems: "center",
        };
        if ( this.state.cardIsHovered || this.props.isExpanded ) {
            style.activeQuickLinks.display = "none";
            style.quickLinks.display = "flex";
        }

        // detail style
        style.detail = {
            padding: "0px 20px 20px"
        };

        return style
    }
});

export default MediaCard
