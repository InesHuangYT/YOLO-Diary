import React, { Component } from 'react';
import './App.css';
import img_elLine from './images/ListFriend_elLine_489860.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';


export default class ListNotification extends Component {

  // Properties used by this component:
  // field_FriendName, field_notification

  constructor(props) {
    super(props);
    
    this.state = {
      field_notification: this.props.field_notification,
      field_FriendName: this.props.field_FriendName,
    };
  }

  textInputChanged_field_notification = (event) => {
    this.setState({field_notification: event.target.value});
  }
  
  textInputChanged_field_FriendName = (event) => {
    this.setState({field_FriendName: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_friendPic_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
        pointerEvents: 'none',
     };
    const style_field_notification = {
        display: 'block',
     };
    const value_field_notification = this.props.field_notification;
    
    const style_field_FriendName = {
        display: 'block',
     };
    const value_field_FriendName = this.props.field_FriendName;
    
    const style_line = {
        height: 'auto',
     };
    const style_line_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListNotification" style={baseStyle}>
        <div className="layoutFlow">
          <div className='cardBg elFriendPic' style={style_friendPic_outer}>
            <div />
          
          </div>
          
          <div className='baseFont elField_notification'>
            <Input style={style_field_notification} type="text" hint={this.props.locStrings.listitem2_field_notification_832918} onChange={this.textInputChanged_field_notification} defaultValue={value_field_notification !== undefined ? value_field_notification : ''}  />
          
          </div>
          
          <div className='baseFont elField_FriendName'>
            <Input style={style_field_FriendName} type="text" hint={this.props.locStrings.listitem2_field_friendname_310626} onChange={this.textInputChanged_field_FriendName} defaultValue={value_field_FriendName !== undefined ? value_field_FriendName : ''}  />
          
          </div>
          
          <div className='elLine' style={style_line_outer}>
            <img style={style_line} src={img_elLine} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
