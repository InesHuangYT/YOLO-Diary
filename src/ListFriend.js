import React, { Component } from 'react';
import './App.css';
import img_elLine from './images/ListFriend_elLine_489860.png';
import img_elButton_message from './images/ListFriend_elButton_message_878517.png';
import img_elButton_delete from './images/ListFriend_elButton_delete_535750.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';


export default class ListFriend extends Component {

  // Properties used by this component:
  // userName, button_message, button_delete

  constructor(props) {
    super(props);
    
    this.state = {
      username: this.props.UserName,
    };
  }

  textInputChanged_username = (event) => {
    this.setState({username: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_line = {
        height: 'auto',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    const style_userphoto_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
        pointerEvents: 'none',
     };
    const style_username = {
        display: 'block',
     };
    const value_username = this.props.UserName;
    
    const style_button_message = {
        height: 'auto',
     };
    const style_button_message_outer = {
        pointerEvents: 'none',
     };
    const style_button_delete = {
        height: 'auto',
     };
    const style_button_delete_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListFriend" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elLine' style={style_line_outer}>
            <img style={style_line} src={img_elLine} alt=""  />
          
          </div>
          
          <div className='cardBg elUserphoto' style={style_userphoto_outer}>
            <div />
          
          </div>
          
          <div className='baseFont elUsername'>
            <Input style={style_username} type="text" hint={this.props.locStrings.listitem2_field2_554712} onChange={this.textInputChanged_username} defaultValue={value_username !== undefined ? value_username : ''}  />
          
          </div>
          
          <div className='elButton_message' style={style_button_message_outer}>
            <img style={style_button_message} src={(this.props.Button_message || img_elButton_message)} alt=""  />
          
          </div>
          
          <div className='elButton_delete' style={style_button_delete_outer}>
            <img style={style_button_delete} src={(this.props.Button_delete || img_elButton_delete)} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
