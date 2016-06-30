import React from 'react';
import { VerticalMenu, Code } from '../../src';

export default React.createClass({
    render() {
        return (
            <section>
                <div style={{ 
                        position: "relative",
                        display: "inline-block",
                        marginBotton: "20px",
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
                <Code children={
`<div style={{ marginBotton: "20px" }} >
    <VerticalMenu/>
</div>`
                    }
                />

            </section>
        )
    }
});
