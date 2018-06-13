import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "material-ui/styles";
import classnames from "classnames";
import Element from "./Element";
import { IconButton } from "material-ui";
import SearchIcon from "@material-ui/icons/es/Search";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
    card: {
        display: "flex",
        alignItems: "center",
        height: "40px",
        background: "white",
        position: "relative",
        marginBottom: "20px",
        transition: "box-shadow 350ms ease",
        ...theme.elevation.elevation3,
        "&:hover": {
            ...theme.elevation.elevation6,
        },
    },
    card__active: {
        ...theme.elevation.elevation7,
    },
    input: {
        flex: "1 1 100%",
        border: "none",
        boxShadow: "none",
        fontSize: "16px",
        "&:focus": {
            outline: "none",
        },
    },
    searchIcon: {
        minWidth: "24px",
        ...theme.whitespace.ms2,
    },
});

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

    render() {
        const {
            classes,
            className,
            value,
            placeholder,
            onChange,
            onClear,
            theme,
            ...rest
        } = this.props;

        const cardClasses = classnames(
            { [className]: className },
            "CY-SearchBar",
            classes.card,
            {
                [classes.card__active]: value,
            }
        );
        const iconClasses = classnames(
            "CY-SearchBar-searchIcon",
            classes.searchIcon
        );
        const inputClasses = classnames(
            "CY-SearchBar-input",
            classes.input
        );

        const shouldShowClear = onClear && value;

        return (
            <Element {...rest} className={cardClasses}>
                <SearchIcon
                    className={iconClasses}
                />
                <input
                    className={inputClasses}
                    type="text"
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={this.onFocus}
                />
                {shouldShowClear ? (
                    <IconButton
                        className="CY-SearchBar-closeButton"
                        onClick={onClear}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </Element>
        );
    }
}

export default withTheme()(withStyles(styles)(SearchBar));
