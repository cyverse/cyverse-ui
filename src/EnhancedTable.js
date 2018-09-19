import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { toPairs } from "ramda";
import { Element } from "cyverse-ui";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import { lighten } from "@material-ui/core/styles/colorManipulator";

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
}

class EnhancedTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {
            onSelectAllClick,
            order,
            orderBy,
            numSelected,
            rowCount,
            headerColumns,
        } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={
                                numSelected > 0 &&
                                numSelected < rowCount
                            }
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {headerColumns.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                numeric={row.numeric}
                                padding={
                                    row.disablePadding
                                        ? "none"
                                        : "default"
                                }
                                sortDirection={
                                    orderBy === row.id ? order : false
                                }
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={
                                        row.numeric
                                            ? "bottom-end"
                                            : "bottom-start"
                                    }
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.id}
                                        direction={order}
                                        onClick={this.createSortHandler(
                                            row.id
                                        )}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === "light"
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(
                      theme.palette.secondary.light,
                      0.85
                  ),
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark,
              },
    spacer: {
        flex: "1 1 100%",
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: "0 0 auto",
    },
});

let EnhancedTableToolbar = props => {
    const { numSelected, classes, batchActions, listActions } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subheading">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="title" id="tableTitle">
                        Nutrition
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? batchActions : listActions}
            </div>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(
    EnhancedTableToolbar
);

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: "auto",
    },
});

/**
 * EnhancedTable is a complete table with sort-ability and batch mode.
 *
 * ## Usage
 * Data tables display information in a way that’s easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards.
 *
 * ## Go Lower
 * This component is complex and uses many low level components. For more flexibility, build your own variation using the same lower level components.
 *
 * Start by looking at the source of this component.
 */
class EnhancedTable extends React.Component {
    isSelected = id => this.props.selected.indexOf(id) !== -1;

    render() {
        const {
            classes,
            headerColumns,
            data,
            order,
            orderBy,
            selected,
            onSelectAllClick,
            onSelectRow,
            onRequestSort,
            batchActions,
            listActions,
            ...rest
        } = this.props;
        const wrapperClasses = classNames(
            { [classNames]: classNames },
            "CY-EnhancedTable"
        );
        return (
            <Element {...rest} className={wrapperClasses}>
                <EnhancedTableToolbar batchActions={batchActions} listActions={listActions}numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead
                            headerColumns={headerColumns}
                            numSelected={selected.length}
                            rowCount={data.length}
                            order={order}
                            orderBy={orderBy}
                            handleRequestSort={onRequestSort}
                            onSelectAllClick={onSelectAllClick}
                            onRequestSort={onRequestSort}
                        />
                        <TableBody>
                            {stableSort(
                                data,
                                getSorting(order, orderBy)
                            ).map(n => {
                                const isSelected = this.isSelected(
                                    n.id
                                );
                                return (
                                    <TableRow
                                        hover
                                        onClick={event =>
                                            onSelectRow(event, n.id)
                                        }
                                        role="checkbox"
                                        aria-checked={isSelected}
                                        tabIndex={-1}
                                        key={n.id}
                                        selected={isSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected}
                                            />
                                        </TableCell>
                                        {toPairs(n).map(
                                            (k, i) =>
                                                k[0] ===
                                                "id" ? null : (
                                                    <TableCell
                                                        numeric={
                                                            typeof k[1] ==
                                                            "number"
                                                        }
                                                        component="th"
                                                        scope="row"
                                                        padding={
                                                            i == 1
                                                                ? "none"
                                                                : "default"
                                                        }
                                                    >
                                                        {k[1]}
                                                    </TableCell>
                                                )
                                        )}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </Element>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    headerColumns: PropTypes.array,
    data: PropTypes.array,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    selected: PropTypes.bool,
    onSelectAllClick: PropTypes.func,
    onSelectRow: PropTypes.func,
    onRequestSort: PropTypes.func,
};

export default withStyles(styles)(EnhancedTable);
