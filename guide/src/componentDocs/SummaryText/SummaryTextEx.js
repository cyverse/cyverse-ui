import React from 'react';
import { SummaryText } from 'cyverse-ui';
import { pad, marg } from 'cyverse-ui/styles';
import Paper from 'material-ui/Paper';

const SummaryTextEx = props => (
    <Paper
        style={{
            ...marg({ mb: 4 }),
            ...pad({ p: 3 }),
        }}
    >
        <SummaryText
            children="Biltong beef ribs spare ribs, pancetta prosciutto pork belly doner boudin buffalo shank flank meatloaf corned beef. Pancetta capicola spare ribs beef, salami swine tenderloin venison pork belly chuck jerky biltong flank prosciutto pastrami. Spare ribs tenderloin pork jerky pork chop, kevin shankle strip steak flank meatloaf chicken chuck shank. Boudin ham prosciutto fatback porchetta landjaeger pork biltong picanha shoulder ham hock cow. Cow andouille kevin turkey shank swine buffalo fatback porchetta short loin. Picanha pig landjaeger, shank cow sausage tongue pork chop short loin boudin porchetta. Hamburger cupim beef pork loin ribeye shank pig."
        />
        <SummaryText
            typography="body2"
            children="Biltong beef ribs spare ribs, pancetta prosciutto pork belly doner boudin buffalo shank flank meatloaf corned beef. Pancetta capicola spare ribs beef, salami swine tenderloin venison pork belly chuck jerky biltong flank prosciutto pastrami. Spare ribs tenderloin pork jerky pork chop, kevin shankle strip steak flank meatloaf chicken chuck shank. Boudin ham prosciutto fatback porchetta landjaeger pork biltong picanha shoulder ham hock cow. Cow andouille kevin turkey shank swine buffalo fatback porchetta short loin. Picanha pig landjaeger, shank cow sausage tongue pork chop short loin boudin porchetta. Hamburger cupim beef pork loin ribeye shank pig."
        />
    </Paper>
);

export default SummaryTextEx;
