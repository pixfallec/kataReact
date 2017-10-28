import React, {Component} from 'react';
import Link from 'react-router-dom/Link';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {options:[{to:"/",text:"main"},{to:"/alphabet",text:"ALPHABET"},{to:"/encryption",text:"ENCRYPTION"}]};
    console.log('TEST');
  }
  
  render() {
    return (
      <ul>
        {this.state.options.map((option,index)=>{
          return <li key={index}><Link to={option.to}>{option.text}</Link></li>;
        })};
      </ul>
    );
  }
}

export default Topbar;
