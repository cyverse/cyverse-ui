import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "material-ui/styles";
import typography from "material-ui/typography";

import {
    Checkbox,
    Button,
    Paper,
    Radio,
    Switch,
    RadioGroup,
    FormControlLabel,
} from "material-ui";

import { ButtonGroup } from "cyverse-ui/utils";

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
        const { muiTheme, width } = this.props;

        const styles = {
            group: {
                marginTop: "16px",
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
                marginBottom: 32,
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
            <div>
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
                    <Button children="Secondary" color="secondary" />
                    <Button children="Default" />
                </ButtonGroup>
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
                <div style={styles.group}>
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
                </div>
                <div style={styles.group}>
                    <Switch checked={true} name="toggleName1" label="toggle" />
                    <Switch name="toggleName1" label="toggle" />
                    <Switch
                        name="toggleName2"
                        label="disabled toggle"
                        defaultToggled={true}
                        disabled={true}
                    />
                </div>
                {/*}
        </div>
        <div style={Object.assign({}, styles.group, {marginTop: 0})}>
          <div style={styles.container}>
            <TextField
              style={styles.textfield}
              hintText="TextField"
            />
          </div>
          <div style={styles.container}>
            <DatePicker
              hintText="Landscape Dialog"
              mode="landscape"
              style={{width: '100%'}}
            />
          </div>
          <div style={styles.container}>
            <DropDownMenu value={3} style={{width: '100%'}}>
              <MenuItem value={1} primaryText={'Never'} />
              <MenuItem value={2} primaryText={'Every Night'} />
              <MenuItem value={3} primaryText={'Weeknights'} />
              <MenuItem value={4} primaryText={'Weekends'} />
              <MenuItem value={5} primaryText={'Weekly'} />
            </DropDownMenu>
          </div>
        </div>
        <div style={styles.groupSlider}>
          <Slider style={styles.slider} name="slider2" defaultValue={0.5} />
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton label="View Dialog" onTouchTap={this.handleTouchTapDialog} />
            <Dialog
              open={this.state.dialogOpen}
              title="Dialog With Standard Actions"
              actions={[
                <FlatButton
                  label="Cancel"
                  keyboardFocused={true}
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true}
                />,
                <FlatButton
                  label="Submit"
                  onTouchTap={this.handleRequestCloseDialog}
                  primary={true}
                />,
              ]}
              onRequestClose={this.handleRequestCloseDialog}
            >
              The actions in this window are created from tan array of element's that&#39;s passed in.
            </Dialog>
          </div>
        </div>
        <div style={styles.group}>
          <div style={styles.containerCentered}>
            <FlatButton
              onTouchTap={this.handleTouchTapSnackbar}
              label="View Snackbar"
            />
          </div>
          <Snackbar
            open={this.state.snackbarOpen}
            onRequestClose={this.handleRequestCloseSnackbar}
            message="This is a snackbar"
            action="Got It!"
            onActionTouchTap={this.handleRequestCloseSnackbar}
          />
            </div> */}
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
