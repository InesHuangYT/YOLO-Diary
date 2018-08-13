import React, { Component } from 'react';
import './App.css';
import img_elIconalerts from './images/NewFaceRecScreen_elIconalerts_927169.png';
import img_elHomeBG from './images/NewEmailSentScreen_elHomeBG_1012260.jpg';
import img_elNewRegister from './images/NewRegisterScreen_elNewRegister_896517.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class NewRegisterScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_EnterEmail: '',
      field_PlzEnterAccount: '',
      field_PlzEnterPassword: '',
      field_PlzEnterPasswordCopy: '',
    };
  }

  textInputChanged_field_EnterEmail = (event) => {
    this.setState({field_EnterEmail: event.target.value});
  }
  
  textInputChanged_field_PlzEnterAccount = (event) => {
    this.setState({field_PlzEnterAccount: event.target.value});
  }
  
  textInputChanged_field_PlzEnterPassword = (event) => {
    this.setState({field_PlzEnterPassword: event.target.value});
  }
  
  textInputChanged_field_PlzEnterPasswordCopy = (event) => {
    this.setState({field_PlzEnterPasswordCopy: event.target.value});
  }
  
  onClick_elButton_comfirm = (ev) => {
    // Go to screen 'NewEmailSent'
    this.props.appActions.goToScreen('newemailsent', { transitionId: 'fadeIn' });
  
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
    const style_newRegister = {
        backgroundImage: 'url('+img_elNewRegister+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_newRegister_outer = {
        pointerEvents: 'none',
     };
    const style_field_EnterEmail = {
        display: 'block',
        color: '#feffff',
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_PlzEnterAccount = {
        display: 'block',
        color: '#feffff',
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_PlzEnterPassword = {
        display: 'block',
        color: '#feffff',
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_PlzEnterPasswordCopy = {
        display: 'block',
        color: '#feffff',
        fontSize: 20.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_comfirm = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_comfirm_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewRegisterScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo_outer}>
            <div style={style_text_Yolo}>
              <div>{this.props.locStrings.newloginandregister3_text_yolo_626450}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan_outer}>
            <div style={style_text_Slogan}>
              <div>{this.props.locStrings.newloginandregister3_text_slogan_950657}</div>
            </div>
          
          </div>
          
          <div className='elButton_HomePage' style={style_button_HomePage_outer}>
            <button style={style_button_HomePage}  >
              {this.props.locStrings.newloginandregister3_button_homepage_158118}
            </button>
          
          </div>
          
          <div className='elButton_BubbleDiary' style={style_button_BubbleDiary_outer}>
            <button style={style_button_BubbleDiary}  >
              {this.props.locStrings.newloginandregister3_button_bubblediary_792304}
            </button>
          
          </div>
          
          <div className='elButton_Profile' style={style_button_Profile_outer}>
            <button style={style_button_Profile}  >
              {this.props.locStrings.newloginandregister3_button_profile_775745}
            </button>
          
          </div>
          
          <div className='elIconalerts' style={style_iconalerts_outer}>
            <img style={style_iconalerts} src={img_elIconalerts} alt=""  />
          
          </div>
          
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elNewRegister' style={style_newRegister_outer}>
            <div style={style_newRegister} />
          
          </div>
          
          <div className='elField_EnterEmail'>
            <Input style={style_field_EnterEmail} type="email" hint={this.props.locStrings.newregister_field_enteremail_429196} onChange={this.textInputChanged_field_EnterEmail} defaultValue={this.state.field_EnterEmail}  />
          
          </div>
          
          <div className='elField_PlzEnterAccount'>
            <Input style={style_field_PlzEnterAccount} type="text" hint={this.props.locStrings.newloginandregister3_field_plzenteraccount_447532} onChange={this.textInputChanged_field_PlzEnterAccount} defaultValue={this.state.field_PlzEnterAccount}  />
          
          </div>
          
          <div className='elField_PlzEnterPassword'>
            <Input style={style_field_PlzEnterPassword} type="password" hint={this.props.locStrings.newloginandregister3_field_plzenterpassword_624538} onChange={this.textInputChanged_field_PlzEnterPassword} defaultValue={this.state.field_PlzEnterPassword}  />
          
          </div>
          
          <div className='elField_PlzEnterPasswordCopy'>
            <Input style={style_field_PlzEnterPasswordCopy} type="password" hint={this.props.locStrings.newregister_field_plzenterpassword_265661} onChange={this.textInputChanged_field_PlzEnterPasswordCopy} defaultValue={this.state.field_PlzEnterPasswordCopy}  />
          
          </div>
          
          <div className='actionFont elButton_comfirm' style={style_button_comfirm_outer}>
            <div style={style_button_comfirm}  onClick={this.onClick_elButton_comfirm}  />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
