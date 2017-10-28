import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    //this.state = {linea:"14"},{texto:"PCAPO"};
    this.state = {options:[{linea:"14",texto:"PCAPO"}]};
  }
  
  render() {
    return (
      <div className="container">
        Encryption page
      </div>
    );
  }
}

export default Encryption;
