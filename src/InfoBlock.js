import React from "react";
import PropTypes from "prop-types";
import InformationIcon from "material-ui/svg-icons/action/info";
import WarningIcon from "material-ui/svg-icons/alert/warning";
import P from "./P";
import { marg } from "./styles";

/**
 * The InfoBlock is used everywhere information is displayed to the user that isn't part of an input or title. Usually at the top of a view to explain the purpose of said view. The icon helps isolate the information from the UI.
 */
class InfoBlock extends React.Component {
    static propTypes = {
        /**
         * The information text that will be displayed.
         */
        text: PropTypes.string,
        /**
         * Show the warning icon over the default info icon
         */
        warning: PropTypes.bool,
    };

    static defaultProps = {
        warning: false,
    };

    icon = () => {
        const { warning } = this.props;
        if (warning) {
            return <WarningIcon style={marg({ mr: 3 })} />;
        }
        return <InformationIcon style={marg({ mr: 3 })} />;
    };

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    ...marg(this.props),
                }}
            >
                {this.icon()}
                <P mb={0}>{this.props.text}</P>
            </div>
        );
    }
}

InfoBlock.displayName = "InfoBlock";

export default InfoBlock;
