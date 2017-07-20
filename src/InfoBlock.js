import React from "react";
import InformationIcon from "material-ui/svg-icons/action/info";
import WarningIcon from "material-ui/svg-icons/alert/warning";
import P from "./P";
import { marg } from "./styles";

export default React.createClass({
    icon() {
        const { warning } = this.props;
        if (warning) {
            return (
                <WarningIcon
                    style={marg({ mr: 3})}
                />
            )
        }
        return (
            <InformationIcon
                style={marg({ mr: 3})}
            />
        )
    },

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    ...marg(this.props)
                }}
            > 
                { this.icon() }
                <P mb={ 0 }>
                    { this.props.text }
                </P>
            </div>
        )
    }
});
