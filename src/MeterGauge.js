import React from 'react';
import { ClearFix } from './utils';
import { variables, styles } from './styles';

const v = variables;

// TODO To be semantic this should be implemented with the Meter element. Support is strong enough for production and there are fall backs. It is a browser styled element however so it will require some style hacks to make it look good across all browsers. Since these style properties are browser specific vendor prefixing is used it is unknown to me without experimenting what autoprefixer will do to the styles or if this will require css over inline styles.

export default React.createClass({

    render: function() {
        let startValue = this.props.startValue;
        let afterValue = this.props.afterValue;
        let startColor = this.props.color;

        if (startValue >= 100) {
            startValue = 100;
            startColor = "red";
        }

        if (startValue + afterValue >= 100) {
            afterValue = 100 - startValue;
            startColor = "red";
        }

        return (
            <dl>
                <dt 
                    style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        margin: "0 0 10px",
                    }}
                >
                    {this.props.label}
                </dt>

                <dd style={{margin: "0px"}}>
                    <div style={{
                                ...styles.t.caption,
                                fontSize: "10px",
                                margin: "0px 0px 3px",
                            }}
                    >
                        {this.props.data}
                    </div>
                    <div 
                        style={{
                            background: v.c.grey.xLight
                        }}
                    >
                        <ClearFix>
                            <div
                                style={{
                                    transition: "all ease .3s",
                                    height:"10px",
                                    float: "left",
                                    width: startValue + "%",
                                    background:startColor
                                }}
                            />

                            <div
                                style={{
                                    transition: "all ease .3s",
                                    height:"10px",
                                    float: "left",
                                    width: afterValue + "%",
                                    background:startColor,
                                    opacity:".5"
                                }}
                            />
                        </ClearFix>
                    </div>
                </dd>
            </dl>
        );
    }
})
