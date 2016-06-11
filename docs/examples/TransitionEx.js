import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-inline-transition-group';

export default React.createClass({

  getInitialState: function () { return { count: 1 }; },

  handleAdd: function () {
    this.setState(function (previousState) {
      return { count: previousState.count + 1 };
    });
  },

  handleRemove: function () {
    this.setState(function (previousState) {
      return { count: Math.max(previousState.count - 1, 0) };
    });
  },

  leaveCallback: function (id) { 
    console.log(id + ' left'); 
  },

  render: function () {
    var styles = {
      base: {
        background: '#F00',
        width: '500px',
        height: '50px',
      },

      appear: {
        background: '#FF0',
        transition: 'all 500ms',
      },

      leave: {
        background: '#F00',
        transition: 'all 250ms',
      }
    };

    var elems = [];

    for (var i = 0; i < this.state.count; i++)
      elems.push(<div key={i} id={i}>{i}</div>);

    return (
      <div>
        <div>
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleRemove}>Remove</button>
        </div>
        <Transition
          childrenBaseStyle={styles.before}
          childrenAppearStyle={styles.appear}
          childrenEnterStyle={styles.appear}
          childrenLeaveStyle={styles.leave}
          onChildLeft={this.leaveCallback}
        >
          {elems}
        </Transition>
      </div>
    );
  }
});
