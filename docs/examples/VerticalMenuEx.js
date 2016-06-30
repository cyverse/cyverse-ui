import React from 'react';
import { Sheet, VerticalMenu, Code } from '../../src';
import { ClearFix } from '../../src/utils';

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
