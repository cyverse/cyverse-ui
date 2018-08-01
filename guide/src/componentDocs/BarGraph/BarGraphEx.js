import React from "react";
import * as colors from "material-ui/colors";
import { BarGraph, Paper } from "cyverse-ui";

const BarGraphEx = props => (
    <Paper whitespace={["p2", "mb3"]}>
        <BarGraph
            startValue={40}
            afterValue={10}
            barColor={colors.orange[500]}
        />
    </Paper>
);
export default BarGraphEx;
