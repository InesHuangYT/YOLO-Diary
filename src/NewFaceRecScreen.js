import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_736526.jpg';
import img_elFaceRecognition from './images/NewFaceRecScreen_elFaceRecognition_860360.png';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';
import img_elIconalerts from './images/NewFaceRecScreen_elIconalerts_927169.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewFaceRecScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
        height: 'auto',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_faceRecognition = {
        height: 'auto',
     };
    const style_faceRecognition_outer = {
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
    const style_iconalerts = {
        height: 'auto',
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
        pointerEvents: 'none',
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
        pointerEvents: 'none',
     };
    const style_title_yolo = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewFaceRecScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elFaceRecognition' style={style_faceRecognition_outer}>
            <img style={style_faceRecognition} src={img_elFaceRecognition} alt=""  />
          
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
            
            <img className='elIconalerts' style={style_iconalerts} src={img_elIconalerts} alt=""  />
            <button className='elButton_BBDiary' style={style_button_BBDiary}  >
              {this.props.locStrings.newcreatebb2_button_bbdiary_716087}
            </button>
            <button className='elButton_profile' style={style_button_profile}  >
              {this.props.locStrings.newcreatebb2_button_profile_1009299}
            </button>
            <div className='font-arialRoundedMTBold  elSubtitle' style={style_subtitle}>
              <div>{this.props.locStrings.newcreatebb2_subtitle_457278}</div>
            </div>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.newcreatebb2_button_homepage_9935}
            </button>
            <div className='font-arialRoundedMTBold  elTitle_yolo' style={style_title_yolo}>
              <div>{this.props.locStrings.newcreatebb2_title_yolo_94783}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
