import React, { Component } from 'react';
import './App.css';
import img_elIconalerts from './images/NewFaceRecScreen_elIconalerts_927169.png';
import img_elHomeBG from './images/NewLoginAndRegisterScreen_elHomeBG_219221.jpg';
import img_elLRBubble from './images/NewLoginAndRegisterScreen_elLRBubble_244075.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class NewLoginAndRegisterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_PlzEnterAccount: '',
      field_PlzEnterPassword: '',
    };
  }

  textInputChanged_field_PlzEnterAccount = (event) => {
    this.setState({field_PlzEnterAccount: event.target.value});
  }
  
  textInputChanged_field_PlzEnterPassword = (event) => {
    this.setState({field_PlzEnterPassword: event.target.value});
  }
  
  onClick_elButton_Login = (ev) => {
    // Go to screen 'NewFirstUpProfilePic'
    this.props.appActions.goToScreen('newfirstupprofilepic', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_CreateNewAccount = (ev) => {
    // Go to screen 'NewRegister'
    this.props.appActions.goToScreen('newregister', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_ForgetPassword = (ev) => {
    // Go to screen 'NewForgetPassword'
    this.props.appActions.goToScreen('newforgetpassword', { transitionId: 'fadeIn' });
  
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
    const style_text_Yolo = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_Yolo_outer = {
        pointerEvents: 'none',
     };
    const style_text_Slogan = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const style_text_Slogan_outer = {
        pointerEvents: 'none',
     };
    const style_button_HomePage = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_HomePage_outer = {
        pointerEvents: 'none',
     };
    const style_button_BubbleDiary = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_BubbleDiary_outer = {
        pointerEvents: 'none',
     };
    const style_button_Profile = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Profile_outer = {
        pointerEvents: 'none',
     };
    const style_iconalerts = {
        height: 'auto',
     };
    const style_iconalerts_outer = {
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
    
    return (
      <Container fluid={true} className="AppScreen NewLoginAndRegisterScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo_outer}>
            <div style={style_text_Yolo}>
              <div>{this.props.locStrings.newscrollmodelfirstupprofilepic2_text_yolo_516924}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan_outer}>
            <div style={style_text_Slogan}>
              <div>{this.props.locStrings.newscrollmodelfirstupprofilepic2_text_slogan_894726}</div>
            </div>
          
          </div>
          
          <div className='elButton_HomePage' style={style_button_HomePage_outer}>
            <button style={style_button_HomePage}  >
              {this.props.locStrings.newscrollmodelfirstupprofilepic2_button_homepage_47278}
            </button>
          
          </div>
          
          <div className='elButton_BubbleDiary' style={style_button_BubbleDiary_outer}>
            <button style={style_button_BubbleDiary}  >
              {this.props.locStrings.newscrollmodelfirstupprofilepic2_button_bubblediary_505027}
            </button>
          
          </div>
          
          <div className='elButton_Profile' style={style_button_Profile_outer}>
            <button style={style_button_Profile}  >
              {this.props.locStrings.newscrollmodelfirstupprofilepic2_button_profile_111804}
            </button>
          
          </div>
          
          <div className='elIconalerts' style={style_iconalerts_outer}>
            <img style={style_iconalerts} src={img_elIconalerts} alt=""  />
          
          </div>
          
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
      </Container>
    )
  }
  

}
