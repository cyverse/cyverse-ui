import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "material-ui/styles";
import typography from "material-ui/typography";
import PersonIcon from "@material-ui/icons/person";
import NotificationIcon from "@material-ui/icons/notifications";

import {
    Checkbox,
    Button,
    Paper,
    Radio,
    Switch,
    RadioGroup,
    FormControlLabel,
    TextField,
    Divider,
} from "material-ui";

import { ButtonGroup } from "cyverse-ui/utils";
import { Pill } from "cyverse-ui";

class ThemesPage extends Component {
    static propTypes = {
        muiTheme: PropTypes.object,
        onChangeMuiTheme: PropTypes.func,
        width: PropTypes.number.isRequired,
    };

    state = {
        dialogOpen: false,
        snackbarOpen: false,
        drawerOpen: false,
    };

    getStyles() {
        const styles = {
            group: {
                marginBottom: "16px",
                padding: "0 50px",
                boxSizing: "border-box",
            },
            groupSlider: {
                marginTop: "0px",
                width: "100%",
            },
            container: {
                marginBottom: "16px",
                minHeight: "24px",
                textAlign: "left",
            },
            containerCentered: {
                textAlign: "center",
            },
            paper: {
                height: "100px",
                width: "100px",
                margin: "0 auto",
                marginBottom: "64px",
            },
            textfield: {
                width: "100%",
            },
            slider: {
                marginTop: "0px",
                marginBottom: "0px",
            },
            title: {
                fontSize: "20px",
                lineHeight: "28px",
                paddingTop: "19px",
                marginBottom: "13px",
                letterSpacing: "0",
            },
            liveExamplePaper: {
                padding: "20px",
                marginBottom: 56,
                overflow: "hidden",
            },
            bottomBorderWrapper: {
                paddingBottom: "10px",
            },
        };

        styles.containerCentered = Object.assign(
            {},
            styles.container,
            styles.containerCentered
        );
        styles.groupSlider = Object.assign(
            {},
            styles.group,
            styles.groupSlider
        );

        return styles;
    }

    getComponentGroup() {
        const styles = this.getStyles();

        return (
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%", paddingRight: 32 }}>
                    <ButtonGroup style={styles.group}>
                        <Button
                            variant="raised"
                            children="Primary"
                            color="primary"
                        />
                        <Button
                            variant="raised"
                            children="Secondary"
                            color="secondary"
                        />
                        <Button variant="raised" children="Default" />
                    </ButtonGroup>
                    <ButtonGroup style={styles.group}>
                        <Button children="Primary" color="primary" />
                        <Button
                            children="Secondary"
                            color="secondary"
                        />
                        <Button children="Default" />
                    </ButtonGroup>
                    <Divider />
                    <div style={styles.group}>
                        <RadioGroup
                            name="shipSpeed"
                            defaultSelected="usd"
                            value="dog"
                        >
                            <FormControlLabel
                                value="cat"
                                control={<Radio />}
                                label="Cat"
                            />
                            <FormControlLabel
                                value="dog"
                                control={<Radio />}
                                label="Dog"
                            />
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="(Disabled option)"
                            />
                        </RadioGroup>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <TextField
                        fullWidth
                        required
                        id="required"
                        label="Required"
                        defaultValue="Hello World"
                        margin="normal"
                        style={{ display: "block" }}
                    />
                    <TextField
                        fullWidth
                        error
                        id="error"
                        label="Error"
                        defaultValue="Doh!"
                        helperText="Don't be so hard on yourself"
                        style={{
                            display: "block",
                            marginBottom: "30px",
                        }}
                        margin="normal"
                    />
                    <Pill>Featured</Pill>
                    <Pill color="primary" icon={<PersonIcon />}>
                        3
                    </Pill>
                    <Pill
                        color="secondary"
                        icon={<NotificationIcon />}
                    >
                        230
                    </Pill>
                    <br />
                    <Checkbox
                        name="checkboxName1"
                        value="checkboxValue1"
                        label="checkbox"
                        defaultChecked
                    />
                    <Checkbox
                        name="checkboxName1"
                        value="checkboxValue1"
                        label="checkbox"
                    />
                    <Checkbox
                        name="checkboxName2"
                        value="checkboxValue2"
                        label="disabled checkbox"
                        disabled={true}
                    />
                    <Switch
                        checked={true}
                        name="toggleName1"
                        label="toggle"
                    />
                    <Switch name="toggleName1" label="toggle" />
                    <Switch
                        name="toggleName2"
                        label="disabled toggle"
                        defaultToggled={true}
                        disabled={true}
                    />
                </div>
            </div>
        );
    }

    handleTouchTapDrawer = () => {
        this.setState({
            drawerOpen: true,
        });
    };
    handleRequestChangeDrawer = open => {
        this.setState({
            drawerOpen: open,
        });
    };
    handleTouchTapDialog = () => {
        this.setState({
            dialogOpen: true,
        });
    };
    handleRequestCloseDialog = () => {
        this.setState({
            dialogOpen: false,
        });
    };
    handleTouchTapSnackbar = () => {
        this.setState({
            snackbarOpen: true,
        });
    };
    handleRequestCloseSnackbar = () => {
        this.setState({
            snackbarOpen: false,
        });
    };
    render() {
        const styles = this.getStyles();
        return (
            <Paper style={styles.liveExamplePaper}>
                {this.getComponentGroup()}
            </Paper>
        );
    }
}
export default withTheme()(ThemesPage);
