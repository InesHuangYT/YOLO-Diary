import React, { Component } from 'react';
import './App.css';
import img_elPBG from './images/NewFriendListScreen_elPBG_664556.png';
import img_elLogoutBB from './images/NewLogoutScreen_elLogoutBB_1001938.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewLogoutScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton_ReLogin = (ev) => {
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
        backgroundColor: '#fcffff',
        pointerEvents: 'none',
     };
    const style_PBG = {
        backgroundImage: 'url('+img_elPBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_logoutBB = {
        backgroundImage: 'url('+img_elLogoutBB+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_logoutBB_outer = {
        pointerEvents: 'none',
     };
    const style_button_ReLogin = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_ReLogin_outer = {
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
      <Container fluid={true} className="AppScreen NewLogoutScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elPBG' style={style_PBG} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elLogoutBB' style={style_logoutBB_outer}>
            <div style={style_logoutBB} />
          
          </div>
          
          <div className='actionFont elButton_ReLogin' style={style_button_ReLogin_outer}>
            <div style={style_button_ReLogin}  onClick={this.onClick_elButton_ReLogin}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.newlogout_textcopy_289781}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.newlogout_text_466357}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
