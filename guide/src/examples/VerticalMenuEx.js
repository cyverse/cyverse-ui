import React from 'react';
import { VerticalMenu } from 'troposphere-ui';
import { Sheet, Code }  from '../components';
import { ClearFix } from '../utils';

export default React.createClass({
    render() {
        return (
            <section>
                <Sheet mb={ 4 }>
                    <ClearFix>
                        <div style={{ 
                                float: "right",
                                position: "relative",
                                display: "inline-block",
                            }} 
                        >
                            <VerticalMenu 
                                menuItemList = {[
                                    {render: "red"},
                                    {render: "yellow"},
                                    {render: "green"}
                                ]}
                            />
                        </div>
                    </ClearFix>
                </Sheet>
                <Code children={
`<Sheet mb={ 4 }>
    <ClearFix>
        <div style={{ 
                float: "right",
                position: "relative",
                display: "inline-block",
            }} 
        >
            <VerticalMenu 
                menuItemList = {[
                    {render: "red"},
                    {render: "yellow"},
                    {render: "green"}
                ]}
            />
        </div>
    </ClearFix>
</Sheet>`
                    }
                />

            </section>
        )
    }
});
