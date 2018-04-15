import React from 'react';
import { FAB } from 'cyverse-ui';
import { LinkIcon } from 'cyverse-ui/icons';
import { Paper, FloatingActionButton } from 'material-ui';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import FolderIcon from 'material-ui/svg-icons/file/folder';

const FABEx = () => {
    return (
        <Paper style={{height: "50px", position: "relative" }}>
            <div
                style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%"
                }}
            >
                <FAB
                    secondary={true}
                    actions={[
                        {
                            render: (
                                <FloatingActionButton mini secondary
                                    children={<StorageIcon/>}
                                />
                            ),
                            label: "New Instance"
                        },
                        {
                            render: (
                                <FloatingActionButton mini secondary
                                    children={<LinkIcon/>}
                                />
                            ),
                            label: "New Link"
                        },
                        {
                            render: (
                                <FloatingActionButton mini secondary
                                    children={<FolderIcon/>}
                                />
                            ),
                            label: "New Folder"
                        }
                    ]}
                />
            </div>
        </Paper>
    )
}
export default FABEx;
