import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewBubbleDiaryScreen_elBubbleDiaryBG_706739.jpg';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';


// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class TestScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton_BBDiary = (ev) => {
  
  }
  
  
  onClick_elButton_HomePage = (ev) => {
    // Go to screen 'test'
    this.props.appActions.goToScreen('test', { transitionId: 'fadeIn' });
  
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
        backgroundColor: '#feffff',
        pointerEvents: 'none',
     };
    const style_bubbleDiaryBG = {
        backgroundImage: 'url('+img_elBubbleDiaryBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_publishBubble = {
        height: 'auto',
     };
    const style_publishBubble_outer = {
        pointerEvents: 'none',
     };
    const style_hotspot = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_hotspot_outer = {
        pointerEvents: 'none',
     };
    const style_card_ToolBar = {
        width: '100%',
        height: '100%',
     };
    const style_card_ToolBar_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    
    const style_button_BBDiary = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        cursor: 'pointer',
     };
    const style_button_profile = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_subtitle = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
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
        cursor: 'pointer',
     };
    const style_title_yolo = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen TestScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <div style={style_bubbleDiaryBG} />
          
          </div>
          
          <div className='elPublishBubble' style={style_publishBubble_outer}>
            <img style={style_publishBubble} src={img_elPublishBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elHotspot' style={style_hotspot_outer}>
            <div style={style_hotspot}   />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard_ToolBar' style={style_card_ToolBar_outer}>
              <div style={style_card_ToolBar} />
            
            </div>
            
            
            <button className='elButton_BBDiary' style={style_button_BBDiary}  onClick={this.onClick_elButton_BBDiary} >
              {this.props.locStrings.newfacerec2_button_bbdiary_618029}
            </button>
            <button className='elButton_profile' style={style_button_profile}  >
              {this.props.locStrings.newfacerec2_button_profile_677571}
            </button>
            <div className='font-arialRoundedMTBold  elSubtitle' style={style_subtitle}>
              <div>{this.props.locStrings.newfacerec2_subtitle_961757}</div>
            </div>
            <button className='elButton_HomePage' style={style_button_HomePage}  onClick={this.onClick_elButton_HomePage} >
              {this.props.locStrings.newfacerec2_button_homepage_322893}
            </button>
            <div className='font-arialRoundedMTBold  elTitle_yolo' style={style_title_yolo}>
              <div>{this.props.locStrings.newfacerec2_title_yolo_726281}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
