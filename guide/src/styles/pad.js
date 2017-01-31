import React from 'react';
import { variables } from 'cyverse-ui/styles';
    
const sizes = variables.l.padSizes;

const pad = ( props ) => {

    if (props.p) {
    
        if (props.p.substring) {
            return {
                padding: props.pr,
            }
        }
        return {
            padding: `${sizes[props.p - 1]}px`
        }
    }

    if (props.pr) {
        if (props.pr.substring) {
            return {
                paddingRight: props.mr,
            }
        }
        return {
            paddingRight: `${sizes[props.pr - 1]}px`
        }
    }

    if (props.pb) {
        if (props.pb.substring) {
            return {
                paddingBottom: props.mb,
            }
        }
        return {
            paddingBottom: `${sizes[props.pb -1]}px`
        }
    }

    if (props.pl) {
        if (props.pl.substring) {
            return {
                paddingLeft: props.pl,
            }
        }
        return {
            paddingLeft: `${sizes[props.ml -1]}px`
        }
    }

    if (props.pt) {
        if (props.pt.substring) {
            return {
                paddingTop: props.pt,
            }
        }
        return {
            paddingTop: `${sizes[props.pt -1]}px`
        }
    }

    if (props.ps) {
        if (props.ms.substring) {
            return {
                paddingRight: props.ps,
            }
        }
        return {
            paddingRight: `${sizes[props.ps -1]}px`,
            paddingLeft: `${sizes[props.ps -1]}px`
        }
    }
}

export default pad;
