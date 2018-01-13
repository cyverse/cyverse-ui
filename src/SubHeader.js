import React from "react";
import PropTypes from "prop-types";
import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back";
import VerticalMenu from "./VerticalMenu";
import Div from "./Div";
import Title from "./Title";

/**
 * SubHeader is the contextual header located at the top of a sub-view. A Sub-view is a view that one would navigate to from a main-view. For example clicking on a list item might open a sub-view detail of that list item. The SubHeader has a back button to navigate back to the main-view and some top level controls or actions for the particular sub-view.
 */
class SubHeader extends React.Component {
    static displayName = "SubHeader";

    static propTypes = {
        /**
         * The name of the view.
         */
        name: PropTypes.string,
        /**
         * The exposed actions on the right, expects MUI IconButtons.
         */
        quickActions: PropTypes.array,
        /**
         * The Actions within the verical menu on the right, expects MUI MenuItems.
         */
        menuItems: PropTypes.array,
        /**
         * Callback when the back button is pressed.
         */
        onBack: PropTypes.func,
    };

    renderOptionGroup = () => {
        let { quickActions, menuItems } = this.props;
        let style = this.style();

        let renderQuickActions = (option, i) => {
            return <Div key={option + i}>{option}</Div>;
        };

        if (quickActions || menuItems) {
            return (
                <div style={style.actionGroup}>
                    {quickActions
                        ? quickActions.map(renderQuickActions)
                        : null}
                    {menuItems ? (
                        <VerticalMenu children={menuItems} />
                    ) : null}
                </div>
            );
        }
    };

    render() {
        let { name, onBack } = this.props;
        let style = this.style();

        return (
            <div style={style.header}>
                <div style={style.titleGroup}>
                    <IconButton onTouchTap={onBack}>
                        <ArrowBack />
                    </IconButton>
                    <Title h1 title m={0}>
                        {name}
                    </Title>
                </div>
                {this.renderOptionGroup()}
            </div>
        );
    }

    style = () => {
        return {
            header: {
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
            },

            titleGroup: {
                display: "flex",
                flex: "1",
                alignItems: "center",
            },

            backButton: {
                float: "left",
                cursor: "pointer",
                position: "relative",
                marginRight: "10px",
            },

            actionGroup: {
                display: "flex",
                alignItems: "center",
            },
        };
    };
}

export default SubHeader;
