import React from 'react';
import { variables, marg } from './styles';

export default React.createClass({
    getInitialState() {
        return {
            percent: 20,
            degree: 0,
            degTransition: 10,
        }
    },

    componentDidMount(prevProps, prevState) {
       this.rotateWrapper(this.refs.path); 
       this.scalePath(this.refs.path); 
    },

    scalePath(path, step) {
        let stroke = 7;
        let baseSize = 50 - stroke * .67;
        let length = 2 * Math.PI * baseSize;
        let size = 70;
        let offset = (percent) => {
            return length * (1 - (percent * 0.01))
        };

	step = step || 0;
	step %= 3;

	if (step === 0) {
	  path.style.strokeDasharray = length;
	  path.style.strokeDashoffset = offset(1);
	  path.style.transitionDuration = '0ms';
	} else if (step === 1) {
	  path.style.strokeDasharray = length;
	  path.style.strokeDashoffset = offset(100);
	  path.style.transitionDuration = '1000ms';
	} else {
	  path.style.strokeDasharray = length;
	  path.style.strokeDashoffset = offset(200);
	  path.style.transitionDuration = '1200ms';
	}

        this.scalePathTimer = setTimeout(
            () => this.scalePath(path, step + 1), step ? 
                1165 : 160);
    },

    rotateWrapper(wrapper) {
        wrapper.style.transform ='rotate(0deg)';
	wrapper.style.transitionDuration ='0ms';

	setTimeout(() => {
	    wrapper.style.transform = 'rotate(1800deg)';
	    wrapper.style.transitionDuration = '10s';
	    wrapper.style.transitionTimingFunction = 'linear';
	}, 50);

        this.rotateWrapperTimer = setTimeout(
            () => this.rotateWrapper(wrapper), 10050);
    },

    render() {
        let stroke = 7;
        let baseSize = 50 - stroke * .67;
        let length = 2 * Math.PI * baseSize;
        let percent = 200;
        let size = 70;
        let offset = length * (1 - (percent * 0.01));

        return(
            <svg 
                ref="wrapper"
                style={{
                    width: size,
                    position: "relative",
                    display: "block",
                    ...marg(this.props),
                }}
                viewBox="0 0 100 100"
            >
                <circle
                    style={{
                        position: 'relative',
                    }}
                    cx="50"
                    cy="50"
                    r={ baseSize }
                    fill="none"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth={ stroke }
                    strokeLinecap= "round"
                />
                <circle
                    ref="path"
                    style={{
                        position: 'relative',
                        transformOrigin: "center",
                    }}
                    cx="50"
                    cy="50"
                    r={ baseSize }
                    fill="none"
                    stroke={ this.props.color }
                    strokeWidth={ stroke }
                    strokeLinecap= "round"
                />
            </svg>
        )
    }
});
