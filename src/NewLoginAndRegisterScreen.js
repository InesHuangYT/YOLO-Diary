import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/NewLoginAndRegisterScreen_elHomeBG_219221.jpg';
import img_elLRBubble from './images/NewLoginAndRegisterScreen_elLRBubble_244075.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';
import axios from 'axios';
import setAuthorizationToken, { setCurrentUser } from './util/APIUtils';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from './constants';
import jwt from 'jsonwebtoken';
import { Form, Button, Icon, notification } from 'antd';
import validateInput from './server/validations/login';



export default class NewLoginAndRegisterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  textInputChanged_field_PlzEnterAccount = (event) => {
    this.setState({username: event.target.value});
  }
  
  textInputChanged_field_PlzEnterPassword = (event) => {
    this.setState({password: event.target.value});
  }  
  
  onClick_elButton_Login = (ev) => {
   // Go to screen 'NewHomepage01'
    const user = {
      username:this.state.username,
      password:this.state.password,
    }

    if(this.state.username && this.state.password){
      axios.post('/api/auth/login',user)
      .then(res => {
        const token = res.data.accessToken;
        console.log(res);
        console.log(res.data);  
        if(token){
         sessionStorage.setItem('accesstoken', token);
         setAuthorizationToken(token);
         console.log(jwt.decode(token))
        }
        else{
          console.log("log error");
        }
        if(sessionStorage.getItem("accesstoken")){
          this.props.appActions.goToScreen('newhomepage01', { transitionId: 'fadeIn' });
        }else{
          console.log("NO ACCESSTOKEN");
        }
       

  }).catch(function(error) {
          //if(error.res){
             alert("Wrong account and password");
            // this.props.appActions.goToScreen('newregister', { transitionId: 'fadeIn' });
            //console.log(error);
          //}
        });

    
  }
  
  }

  
  
  onClick_elButton_CreateNewAccount = (ev) => {
    // Go to screen 'NewRegister'
    this.props.appActions.goToScreen('newregister', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_ForgetPassword = (ev) => {
    // Go to screen 'NewForgetPassword'

    //測試session用
    if(sessionStorage.getItem("accesstoken")){
    this.props.appActions.goToScreen('newforgetpassword', { transitionId: 'fadeIn' });
    }else{
      console.log("NO ACCESSTOKEN")
      this.props.appActions.goToScreen('newregister', { transitionId: 'fadeIn' });
    }
  }
  
  
  render() {

    
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    const style_LRBubble = {
        height: 'auto',
     };
    const style_LRBubble_outer = {
        pointerEvents: 'none',
     };
    const style_field_PlzEnterAccount = {
        display: 'block',
        color: '#feffff',
        fontSize: 23.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_PlzEnterPassword = {
        display: 'block',
        color: '#feffff',
        fontSize: 23.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_FB = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_FB_outer = {
        pointerEvents: 'none',
     };
    const style_button_Google = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Google_outer = {
        pointerEvents: 'none',
     };
    const style_button_Login = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Login_outer = {
        cursor: 'pointer',
     };
    const style_button_CreateNewAccount = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_CreateNewAccount_outer = {
        cursor: 'pointer',
     };
    const style_button_ForgetPassword = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_ForgetPassword_outer = {
        cursor: 'pointer',
     };
    
    const style_card = {
      width: '100%',
      height: '100%',
   };
  const style_card_outer = {
      backgroundColor: 'white',
      boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
      pointerEvents: 'none',
   };
  const style_textCopy = {
      fontSize: 18.4,
      color: 'rgba(0, 0, 0, 0.5000)',
      textAlign: 'left',
      pointerEvents: 'none',
   };
  const style_text = {
      fontSize: 28.5,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
      pointerEvents: 'none',
   };

    return (
      <Container fluid={true} className="AppScreen NewLoginAndRegisterScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elLRBubble' style={style_LRBubble_outer}>
            <img style={style_LRBubble} src={img_elLRBubble} alt=""  />
          
          </div>
          
          <div className='elField_PlzEnterAccount'>
            <Input style={style_field_PlzEnterAccount} type="text" hint={this.props.locStrings.newloginandregister_field_plzenteraccount_231769} onChange={this.textInputChanged_field_PlzEnterAccount} defaultValue={this.state.field_PlzEnterAccount}  />
          
          </div>
          
          <div className='elField_PlzEnterPassword'>
            <Input style={style_field_PlzEnterPassword} type="password" hint={this.props.locStrings.newloginandregister_field_plzenterpassword_459275} onChange={this.textInputChanged_field_PlzEnterPassword} defaultValue={this.state.field_PlzEnterPassword}  />
          
          </div>
          
          <div className='actionFont elButton_FB' style={style_button_FB_outer}>
            <div style={style_button_FB}   />
          
          </div>
          
          <div className='actionFont elButton_Google' style={style_button_Google_outer}>
            <div style={style_button_Google}   />
          
          </div>
          
          <div className='actionFont elButton_Login' style={style_button_Login_outer}>
            <div style={style_button_Login}  onClick={this.onClick_elButton_Login}  />
          
          </div>
          
          <div className='actionFont elButton_CreateNewAccount' style={style_button_CreateNewAccount_outer}>
            <div style={style_button_CreateNewAccount}  onClick={this.onClick_elButton_CreateNewAccount}  />
          
          </div>
          
          <div className='actionFont elButton_ForgetPassword' style={style_button_ForgetPassword_outer}>
            <div style={style_button_ForgetPassword}  onClick={this.onClick_elButton_ForgetPassword}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.newloginandregister_textcopy_154351}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.newloginandregister_text_174474}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
