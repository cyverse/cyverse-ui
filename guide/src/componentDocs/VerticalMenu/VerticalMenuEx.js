import React from "react";
import { VerticalMenu, Paper } from "cyverse-ui";
import { MenuItem } from "material-ui";

class VerticalMenuEx extends React.Component {
    state = {
        menuOpen: false,
    };
    onSelect = (e, ch) => {
        console.log(ch.props.primaryText);
    };
    handelItemClick = () => {
        this.setState({ menuOpen: false });
    };
    render() {
        const { menuOpen } = this.state;
        return (
            <div>
                <Paper whitespace="p3">
                    <VerticalMenu placement="bottom-start">
                        <MenuItem
                            key="1"
                            children="Instance"
                            onClick={this.handelItemClick}
                        />
                        <MenuItem
                            key="2"
                            children="Volume"
                            onClick={this.handelItemClick}
                        />
                        <MenuItem
                            key="3"
                            children="Image"
                            onClick={this.handelItemClick}
                        />
                    </VerticalMenu>
                </Paper>
            </div>
        );
    }
}

export default VerticalMenuEx;
