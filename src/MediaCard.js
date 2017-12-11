import React from 'react';
import PropTypes from 'prop-types';
import VerticalMenu from './VerticalMenu';
import Identity from './Identity';
import CheckableAvatar from './CheckableAvatar';
import ListCard from './ListCard';
import ListCardHeader from './ListCardHeader';
import ListCardIdentity from './ListCardIdentity';
import ListCardSummary from './ListCardSummary';
import ListCardActions from './ListCardActions';
import ListCardDetail from './ListCardDetail';
import ActionGroup from './ActionGroup';

/**
* MediaCards are used for objects like Projects, Project Resources, and Images that have their own information and actions associated with them. They typically have a short description and a long description that can be seen by expanding the card. A contextual menu, attached to the card, contains all of the actions for that card.
 */
class MediaCard extends React.Component {
    static displayName = "MediaCard";

    static propTypes = {
        /**
         * Expects MUI Avatar
         */
        image: PropTypes.element,
        /**
         * The identity of the MediaCard
         */
        title: PropTypes.node,
        /**
         * Sub-information like creation date or caption
         */
        subTitle: PropTypes.node,
        /**
         * Additional meta or status info
         */
        titleInfo: PropTypes.node,
        /**
         * The space between the Identity and Actions. Only shown when card is collapsed. Will render any components or string passed.
         */
        summary: PropTypes.node,
        /**
         * The large space below the card header. Only shown when card is expanded. Will render any components or string passed.
         */
        detail: PropTypes.node,
        /**
         * The exposed actions that appear to right of card on hover or when open. Expects an array of components. Best used with MUI IconButtons
         */
        quickLinks: PropTypes.array,
        /**
         * Works with quicklinks but is visible when quickLinks is not. By having the same button in both props causes said button to always show while the others only show when card is hovered or active.
         */
        activeQuickLinks: PropTypes.array,
        /**
         * Actions under the vertical menu to the right of card
         */
        menuItems: PropTypes.array,
        /**
         * Callback when card is clicked
         */
        onExpand: PropTypes.func,
        /**
         * Callback when card is checked
         */
        onBatchClick: PropTypes.func,
        /**
         * When true the card is open
         */
        isExpanded: PropTypes.bool,
        /**
         * When true a checkbox replaces the Avatar
         */
        batchMode: PropTypes.bool,
        /**
         * If true the vertical menu shows but is disabled
         */
        isDisabledMenu: PropTypes.bool,
        /**
         * Classes applied to root element of card
         */
        className: PropTypes.string,
    };

    state = {
        cardIsHovered: false,
    };

    onCardEnter = () => {
        this.setState({
            cardIsHovered: true,
        });
    };

    onCardLeave = () => {
        this.setState({
            cardIsHovered: false,
        });
    };

    handleOnExpand = () => {
        const { onExpand } = this.props;
        onExpand ? onExpand() : null;
    };

    onCheck = (e) => {
        this.props.onBatchClick(e, this);
    };

    renderQuickLinks = () => {
        const { quickLinks, isExpanded } = this.props;
        const { cardIsHovered } = this.state;
        const isHidden = ( isExpanded ? false : !cardIsHovered )
        return quickLinks ? (
            <ActionGroup hide={ isHidden }>
                { quickLinks.map( link => link ) }
            </ActionGroup>
        ) : null
    };

    renderActiveQuickLinks = () => {
        const { activeQuickLinks, isExpanded } = this.props;
        const { cardIsHovered } = this.state;
        const isHidden = ( isExpanded ? true : cardIsHovered )
        return activeQuickLinks ? (
            <ActionGroup hide={ isHidden }>
                { activeQuickLinks.map(link => link ) }
            </ActionGroup>
        ) : null
    };

    renderVericalMenu = () => {
        const { menuItems, isDisabledMenu } = this.props;
        return menuItems ? (
            <VerticalMenu
                children={ menuItems }
                disabled={ isDisabledMenu }
            />
        ) : null
    };

    render() {
        const {
            title,
            image,
            subTitle,
            summary,
            detail,
            isExpanded,
            onBatchClick,
            checked,
            batchMode,
            ...rest,
        } = this.props;
        const { cardIsHovered } = this.state;
        const showCheck = onBatchClick && ( batchMode || cardIsHovered );

        return (
            <ListCard { ...rest }
                isExpanded={ isExpanded }
            >
                <ListCardHeader
                    onMouseEnter = { this.onCardEnter }
                    onMouseLeave = { this.onCardLeave }
                    onClick = { this.handleOnExpand }
                >
                    <ListCardIdentity>
                        <Identity
                            image = {
                                <CheckableAvatar
                                    image={image}
                                    isCheckable={ showCheck }
                                    onCheck={ this.onCheck }
                                    checked={ checked }
                                />
                             }
                            primaryText = { title }
                            secondaryText = { subTitle }
                        />
                    </ListCardIdentity>

                    <ListCardSummary hide={ isExpanded }>
                        { summary }
                    </ListCardSummary>

                    <ListCardActions stopPropagation>
                        { this.renderQuickLinks() }
                        { this.renderActiveQuickLinks() }
                        { this.renderVericalMenu() }
                    </ListCardActions>
                </ListCardHeader>

                <ListCardDetail hide={!isExpanded}>
                    { detail }
                </ListCardDetail>
            </ListCard>
        )
    }
}

export default MediaCard
