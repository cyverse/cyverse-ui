import React from "react";
import * as colors from "material-ui/styles/colors";
import Paper from "material-ui/Paper";
import { BarGraph } from "cyverse-ui";
import { pad, marg } from "cyverse-ui/styles";

const BarGraphEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 })
        }}
    >
        <BarGraph
            startValue={40}
            afterValue={10}
            barColor={colors.lightBlue400}
        />
    </Paper>
);

export default BarGraphEx;
