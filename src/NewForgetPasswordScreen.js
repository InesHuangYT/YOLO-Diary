import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/NewForgetPasswordScreen_elHomeBG_695974.jpg';
import img_elForgetPasswordBB from './images/NewForgetPasswordScreen_elForgetPasswordBB_28565.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';
import YOLO from './images/YOLO.png';

export default class NewForgetPasswordScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_PlzEnterEmail: '',
    };
  }

  textInputChanged_field_PlzEnterEmail = (event) => {
    this.setState({field_PlzEnterEmail: event.target.value});
  }
  
  onClick_elButton_Confirm = (ev) => {
    // Go to screen 'NewLoginAndRegister'
    this.props.appActions.goToScreen('newloginandregister', { transitionId: 'fadeIn' });
  
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
    const style_forgetPasswordBB = {
        height: 'auto',
     };
    const style_forgetPasswordBB_outer = {
        pointerEvents: 'none',
     };
    const style_field_PlzEnterEmail = {
        display: 'block',
        color: '#feffff',
        fontSize: 23.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_Confirm = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Confirm_outer = {
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
      <Container fluid={true} className="AppScreen NewForgetPasswordScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elForgetPasswordBB' style={style_forgetPasswordBB_outer}>
            <img style={style_forgetPasswordBB} src={img_elForgetPasswordBB} alt=""  />
          
          </div>
          
          <div className='elField_PlzEnterEmail'>
            <Input style={style_field_PlzEnterEmail} type="email" hint={this.props.locStrings.newloginandregister2_field_plzenteraccount_850431} onChange={this.textInputChanged_field_PlzEnterEmail} defaultValue={this.state.field_PlzEnterEmail}  />
          
          </div>
          
          <div className='actionFont elButton_Confirm' style={style_button_Confirm_outer}>
            <div style={style_button_Confirm}  onClick={this.onClick_elButton_Confirm}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            <img src={YOLO} alt=''/>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
