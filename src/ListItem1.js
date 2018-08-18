import React, { Component } from 'react';
import './App.css';
import img_elBubble2 from './images/ListItem1_elBubble2_106521.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';


export default class ListItem1 extends Component {

  // Properties used by this component:
  // field

  constructor(props) {
    super(props);
    
    this.state = {
      field: this.props.field,
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_bubble2 = {
        height: 'auto',
     };
    const style_bubble2_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
     };
    const value_field = this.props.field;
    
    
    return (
      <div className="ListItem1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elBubble2' style={style_bubble2_outer}>
            <img style={style_bubble2} src={img_elBubble2} alt=""  />
          
          </div>
          
          <div className='baseFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.listitem1_field_578331} onChange={this.textInputChanged_field} defaultValue={value_field !== undefined ? value_field : ''}  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
