import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import VerticalMenu from './VerticalMenu';
import Div from './Div';
import Title from './Title';


const SubHeader = React.createClass({

    renderOptionGroup() {
        let { quickActions, menuItems } = this.props;
        let style = this.style();

        let renderQuickActions = (option, i) => {
            return (
                <Div key={ option + i }>
                    { option }
                </Div>
            )
        };

        if ( quickActions || menuItems ) {
            return (
                <div style={ style.actionGroup }>
                    {
                        quickActions ?
                            quickActions.map( renderQuickActions )
                            : null
                    }
                    {
                        menuItems ?
                            <VerticalMenu
                                children={ menuItems }
                            />
                            : null
                    }
                </div>
            )
        }
    },

    render() {
        let { name, onBack } = this.props;
        let style = this.style();

        return (
            <div
                style={ style.header }
            >
                <div style={ style.titleGroup }>
                    <IconButton onTouchTap={ onBack } >
                        <ArrowBack/>
                    </IconButton>
                    <Title
                        h1
                        title
                        m={ 0 }
                    >
                        { name }
                    </Title>
                </div>
                { this.renderOptionGroup() }
            </div>
        );
    },

    style() {
        return {
            header: {
                position: "relative",
                display: "flex",
                justifyContent: "space-between"
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
            }
        };
    },
});

SubHeader.propTypes = {
    name: PropTypes.string,
};

export default SubHeader;
