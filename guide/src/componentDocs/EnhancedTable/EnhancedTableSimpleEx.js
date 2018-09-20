import React, { Component } from "react";
import { EnhancedTable, Paper } from "cyverse-ui";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
    counter += 1;
    return { id: counter, name, calories, fat, carbs, protein };
}

const headerColumns = [
    {
        id: "name",
        numeric: false,
        label: "Dessert (100g serving)",
    },
    {
        id: "calories",
        numeric: true,
        label: "Calories",
    },
    {
        id: "fat",
        numeric: true,
        label: "Fat (g)",
    },
    {
        id: "carbs",
        numeric: true,
        label: "Carbs (g)",
    },
    {
        id: "protein",
        numeric: true,
        label: "Protein (g)",
    },
];
const EnhancedTableSimpleEx = class extends Component {
    state = {
        order: "asc",
        orderBy: "calories",
        selected: [],
        data: [
            createData("Cupcake", 305, 3.7, 67, 4.3),
            createData("Donut", 452, 25.0, 51, 4.9),
            createData("Eclair", 262, 16.0, 24, 6.0),
            createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
            createData("Gingerbread", 356, 16.0, 49, 3.9),
            createData("Honeycomb", 408, 3.2, 87, 6.5),
            createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
            createData("Jelly Bean", 375, 0.0, 94, 0.0),
            createData("KitKat", 518, 26.0, 65, 7.0),
            createData("Lollipop", 392, 0.2, 98, 0.0),
            createData("Marshmallow", 318, 0, 81, 2.0),
            createData("Nougat", 360, 19.0, 9, 37.0),
            createData("Oreo", 437, 18.0, 63, 4.0),
        ],
    };
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = "desc";

        if (
            this.state.orderBy === property &&
            this.state.order === "desc"
        ) {
            order = "asc";
        }

        this.setState({ order, orderBy });
    };
    render() {
        const { data, order, selected, orderBy } = this.state;
        return (
            <Paper whitespace={["mb3", "p2"]}>
                <EnhancedTable
                    tableName="Nutrition"
                    data={data}
                    order={order}
                    orderBy={orderBy}
                    selected={selected}
                    headerColumns={headerColumns}
                    onRequestSort={this.handleRequestSort}
                />
            </Paper>
        );
    }
};

export default EnhancedTableSimpleEx;
