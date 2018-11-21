import React, { Component } from 'react';
import './App.css';
import setAuthorizationToken from './util/APIUtils';

import axios from 'axios';
// UI framework component imports
import Input from 'muicss/lib/react/input';
import YOLO from './images/YOLO.png';

export default class NavBar extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    this.state = {
       field_UserName: '',
     };
   

  }
  componentDidMount(){
    let _this = this;
    axios.get('/api/user/me').then(res => {
      // console.log(res);
      // console.log(res.data);
      console.log(res.data.username);
      //console.log(res.data.field_UserName);
      _this.setState({field_UserName :res.data.username});
    });
  }

  onClick_elButton = (ev) => {
    // Go to screen 'NewLogout'
    sessionStorage.removeItem('accesstoken');
    setAuthorizationToken(false);
    this.props.appActions.goToScreen('newlogout', { transitionId: 'fadeIn' });
  
  }
    
  textInputChanged_field_UserName = (event) => {
    // this.setState({field_UserName: event.target.value});
  }
  
  onClick_elButton_profile = (ev) => {
    // Go to screen 'NewProfileTest'
    this.props.appActions.goToScreen('newprofiletest', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_BBDiary = (ev) => {
    // Go to screen 'NewBubbleDiary'
    this.props.appActions.goToScreen('newbubblediary', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_HomePage = (ev) => {
    // Go to screen 'NewHomeNotification'
    this.props.appActions.goToScreen('newhomenotification', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_card_ToolBar = {
        width: '100%',
        height: '100%',
     };
    const style_card_ToolBar_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 6.8px 48px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        color: '#5187cf',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_field_UserName = {
        display: 'block',
        color: '#5288d0',
     };
    const style_button_profile = {
        display: 'block',
       
        textAlign: 'center',
       
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_button_BBDiary = {
        display: 'block',
       
        textAlign: 'center',
       
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_subtitle = {
        fontSize: 23.7,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_button_HomePage = {
        display: 'block',
       
        textAlign: 'center',
      
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_title_yolo = {
        fontSize: 23.7,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <div className="NavBar" style={baseStyle}>
        <div className="compContent">
          <div className='cardBg elCard_ToolBar' style={style_card_ToolBar_outer}>
          <img src={YOLO} alt=''/>
            <div style={style_card_ToolBar} />
          </div>

          <button className='headlineFont elButton' style={style_button}  onClick={this.onClick_elButton} >
            {this.props.locStrings.navbar_button_831261}
          </button>
          <Input className='headlineFont elField_UserName' style={style_field_UserName} type='text' hint={this.props.locStrings.navbar_field_username_63158} onChange={this.textInputChanged_field_UserName} value = {this.state.field_UserName}  />
          <button className='headlineFont elButton_profile' style={style_button_profile}  onClick={this.onClick_elButton_profile} >
            {this.props.locStrings.comp1_button_profile_537669}
          </button>
          <button className='headlineFont elButton_BBDiary' style={style_button_BBDiary}  onClick={this.onClick_elButton_BBDiary} >
            {this.props.locStrings.comp1_button_bbdiary_65744}
          </button>
          <button className='headlineFont elButton_HomePage' style={style_button_HomePage}  onClick={this.onClick_elButton_HomePage} >
            {this.props.locStrings.comp1_button_homepage_232670}
          </button>
        </div>
      </div>
    )
  }
  

}
