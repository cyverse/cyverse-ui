import React from 'react';

export default React.createClass({
   render() {
       return (
                <div>
                    <code 
                        style={{
                            whiteSpace: "pre-wrap"
                        }}
                        children={this.props.children}
                    />
                </div>
        )
   }
});
