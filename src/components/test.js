import React from 'react';

export default class Test extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      };
    }
    render() {
      const { value, suggestions } = this.state;
  
      return (
        <div>
            Hi Dale
        </div>
      );
    }
  }