import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Identity from './Identity';
import { events } from "./utils";
import CheckableAvatar from './Checkable';
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
         * The space between the Identity and Actions.
         * Only shown when card is collapsed. Will render any components or string passed.
         */
        summary: PropTypes.node,
        /**
         * The large space below the card header.
         * Only shown when card is expanded. Will render any components or string passed.
         */
        detail: PropTypes.node,
        /**
         * The exposed actions that appear to right of card on hover or when open.
         * Expects an array of components. Best used with MUI IconButtons
         */
        quickLinks: PropTypes.array,
        /**
         * Works with quicklinks but is visible when quickLinks is not.
         * By having the same button in both props causes said button to always show while the others only show when card is hovered or active.
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

    onCardEnter = e => {
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

    render() {
        const {
            className,
            title,
            avatar,
            subTitle,
            summary,
            detail,
            isExpanded,
            onBatchClick,
            checked,
            batchMode,
            ...rest,
        } = this.props;

        const wrapperClasses = classnames(
            {[className]: className},
            "CY-MediaCard"
        );

        const { cardIsHovered } = this.state;
        const showCheck = onBatchClick &&  batchMode || cardIsHovered || isExpanded;

        return (
            <ListCard { ...rest }
                className={wrapperClasses}
                isExpanded={ isExpanded }
            >
                <ListCardHeader
                    tabIndex
                    onMouseEnter = { this.onCardEnter }
                    onMouseLeave = { this.onCardLeave }
                    onClick = { this.handleOnExpand }
                    onFocus={ this.onCardEnter }
                >
                    <ListCardIdentity>
                        <Identity
                            avatar = {
                                <CheckableAvatar
                                    stopPropagation
                                    children={avatar}
                                    isCheckable={ showCheck }
                                    onFocus={ this.onCardEnter }
                                    onBlur={ this.onCardLeave}
                                    checkboxProps={{
                                        onChange: this.onCheck,
                                        checked: checked
                                    }}
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
                        <ActionGroup hide={!cardIsHovered && !isExpanded}>
                            { this.props.quickActions }
                            { this.props.persistActions }
                        </ActionGroup>
                        <ActionGroup hide={cardIsHovered || isExpanded}>
                            { this.props.persistActions }
                        </ActionGroup>
                        { this.props.contextMenu}
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
