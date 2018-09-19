import React, { Component } from 'react';
import './App.css';
import img_elPmenu from './images/PMenu_elPmenu_511455.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';


export default class PMenu extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field_username: '',
    };
  }

  onClick_elButton_FList = (ev) => {
    // Go to screen 'NewFriendList'
    this.props.appActions.goToScreen('newfriendlist', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_Chat = (ev) => {
    // Go to screen 'NewChatRoom'
    this.props.appActions.goToScreen('newchatroom', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_profile = (ev) => {
    // Go to screen 'NewProfileTest'
    this.props.appActions.goToScreen('newprofiletest', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field_username = (event) => {
    this.setState({field_username: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_pmenu = {
        backgroundImage: 'url('+img_elPmenu+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_pmenu_outer = {
        pointerEvents: 'none',
     };
    const style_button_FList = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_FList_outer = {
        cursor: 'pointer',
     };
    const style_button_Chat = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Chat_outer = {
        cursor: 'pointer',
     };
    const style_button_profile = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_profile_outer = {
        cursor: 'pointer',
     };
    
     const style_card_outer = {
      backgroundColor: 'white',
      boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
      pointerEvents: 'none',
   };
    const style_uppic = {
        display: 'block',
        fontSize: 20.6,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_uppic_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="PMenu" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elPmenu' style={style_pmenu_outer}>
            <div style={style_pmenu} />
          
          </div>
          
          <div className='actionFont elButton_FList' style={style_button_FList_outer}>
            <div style={style_button_FList}  onClick={this.onClick_elButton_FList}  />
          
          </div>
          
          <div className='actionFont elButton_Chat' style={style_button_Chat_outer}>
            <div style={style_button_Chat}  onClick={this.onClick_elButton_Chat}  />
          
          </div>
          
          <div className='actionFont elButton_profile' style={style_button_profile_outer}>
            <div style={style_button_profile}  onClick={this.onClick_elButton_profile}  />
          
          </div>
          
          <div className='cardBg elCard' style={style_card_outer}>
            <div />
          
          </div>
          
          <div className='elUppic' style={style_uppic_outer}>
            <button style={style_uppic}  >
              {this.props.locStrings.pmenu_uppic_291006}
            </button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
