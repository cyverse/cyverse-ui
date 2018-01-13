import React from "react";
import PropTypes from "prop-types";
import { createStyleSheet } from "jss-theme-reactor";
import getStyleManager from "./styles/getStyleManager";
import muiThemeable from "material-ui/styles/muiThemeable";

import { IconButton } from "material-ui";
import SearchIcon from "material-ui/svg-icons/action/search";
import CloseIcon from "material-ui/svg-icons/navigation/close";
import { styles, pad, marg } from "./styles";

/**
 * The SearchBar is used for searches. It has an active state that helps to inform the user a search is affecting the list in question. An optional onClear prop allows the query to be cleared when the user presses the clear button.
 */
class SearchBar extends React.Component {
    static displayName = "SearchBar";

    static propTypes = {
        /**
         * The current value or query.
         */
        value: PropTypes.string,
        /**
         * The placeholder or hint text.
         */
        placeholder: PropTypes.string,
        /**
         * Callback when a change is made.
         */
        onChange: PropTypes.func,
        /**
         * Callback when clear button is pressed. Note, no clear button renders if not set.
         */
        onClear: PropTypes.func,
    };

    static defaultProps = {
        placeholder: "Search",
    };

    styleSheet = () => {
        const size = { pl: 2, pr: 2 };
        return createStyleSheet("Search", theme => ({
            card: {
                display: "flex",
                alignItems: "center",
                height: "40px",
                background: "white",
                position: "relative",
                marginBottom: "20px",
                transition: "box-shadow 350ms ease",
                ...styles.boxShadow.xsm,
                ...pad(size),
                ...marg(this.props),
                "&:hover": {
                    ...styles.boxShadow.sm,
                },
            },
            activeCard: {
                ...styles.boxShadow.md,
            },
            input: {
                flex: "1 1 100%",
                border: "none",
                boxShadow: "none",
                "&:focus": {
                    outline: "none",
                },
            },
            searchIcon: {
                ...marg({ mr: 2 }),
            },
        }));
    };

    componentWillMount() {
        const { muiTheme } = this.props;

        this.classes = getStyleManager(muiTheme).render(
            this.styleSheet()
        );
    }

    render() {
        const {
            value,
            placeholder,
            onChange,
            onClear,
            muiTheme,
        } = this.props;

        const searchColor = value
            ? muiTheme.palette.primary1Color
            : null;
        const activeCard = value ? this.classes.activeCard : null;
        const shouldShowClear = onClear && value;

        return (
            <div className={`${this.classes.card} ${activeCard}`}>
                <SearchIcon
                    className={this.classes.searchIcon}
                    color={searchColor}
                />
                <input
                    className={this.classes.input}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={this.onFocus}
                />
                {shouldShowClear ? (
                    <IconButton
                        className={this.classes.closeIcon}
                        onTouchTap={onClear}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </div>
        );
    }
}

export default muiThemeable()(SearchBar);
