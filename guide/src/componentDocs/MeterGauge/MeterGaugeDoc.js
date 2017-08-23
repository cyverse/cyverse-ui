import React from 'react';
import { P } from 'cyverse-ui';
import meta from 'cyverse-ui/MeterGauge.json';
import { Figure } from '../../components';
import ComponentDoc from '../../components/ComponentDoc';
import MDBlock from '../../components/MDBlock';
import CodeBlock from '../../components/CodeBlock';

import MeterGaugeEx from './MeterGaugeEx';
import MeterGaugeExCode from '!raw-loader!./MeterGaugeEx';

const MeterGaugeDoc = React.createClass({
    render () {
        return (
            <ComponentDoc meta={ meta } >
                <Figure caption={ `MeterGauge Example` } >
                    <MeterGaugeEx/>
                    <CodeBlock text={ MeterGaugeExCode } />
                </Figure>
            </ComponentDoc>
        )
    }
});

export default MeterGaugeDoc;
