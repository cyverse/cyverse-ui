import React, { Component } from "react";
import {
    FloatingActionButton,
    FloatingActionButtonActions,
    FloatingActionButtonAction,
    Paper,
} from "cyverse-ui";
import { LinkIcon } from "cyverse-ui/icons";
import StorageIcon from "@material-ui/icons/storage";
import FolderIcon from "@material-ui/icons/folder";

class FloatingActionButtonEx extends Component {
    state = { isOpen: false };
    render() {
        return (
            <Paper
                style={{
                    height: "50px",
                    position: "relative",
                    marginBottom: "50px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                    }}
                >
                    <FloatingActionButton
                        secondary
                        isOpen={this.state.isOpen}
                        onClick={() =>
                            this.setState({
                                isOpen: !this.state.isOpen,
                            })
                        }
                    >
                        <FloatingActionButtonActions>
                            <FloatingActionButtonAction
                                tooltip="Create Instance"
                                children={<StorageIcon />}
                            />
                            <FloatingActionButtonAction
                                tooltip="Create Link"
                                children={<LinkIcon />}
                            />

                            <FloatingActionButtonAction
                                tooltip="Create Project"
                                children={<FolderIcon />}
                            />
                        </FloatingActionButtonActions>
                    </FloatingActionButton>
                </div>
            </Paper>
        );
    }
}
export default FloatingActionButtonEx;
