import React, { Component } from 'react';
import './App.css';
import img_elIconalerts from './images/NewFaceRecScreen_elIconalerts_927169.png';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_736526.jpg';
import img_elFaceRecognition from './images/NewFaceRecScreen_elFaceRecognition_860360.png';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class FaceRecAndPublishScreen extends Component {

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
        backgroundColor: '#fcffff',
        pointerEvents: 'none',
     };
    const style_text = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
     };
    const style_text_outer = {
        pointerEvents: 'none',
     };
    const style_textCopy = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
     };
    const style_textCopy_outer = {
        pointerEvents: 'none',
     };
    const style_button = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy2 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy2_outer = {
        pointerEvents: 'none',
     };
    const style_buttonCopy3 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_buttonCopy3_outer = {
        pointerEvents: 'none',
     };
    const style_iconalerts = {
        height: 'auto',
     };
    const style_iconalerts_outer = {
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
    const style_button_PublishBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_PublishBubble_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen FaceRecAndPublishScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.tutorcreatebb3_text_638553}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.tutorcreatebb3_textcopy_893264}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.tutorcreatebb3_button_219888}
            </button>
          
          </div>
          
          <div className='elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy_804427}
            </button>
          
          </div>
          
          <div className='elButtonCopy2' style={style_buttonCopy2_outer}>
            <button style={style_buttonCopy2}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy2_976109}
            </button>
          
          </div>
          
          <div className='elButtonCopy3' style={style_buttonCopy3_outer}>
            <button style={style_buttonCopy3}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy3_601895}
            </button>
          
          </div>
          
          <div className='elIconalerts' style={style_iconalerts_outer}>
            <img style={style_iconalerts} src={img_elIconalerts} alt=""  />
          
          </div>
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elFaceRecognition' style={style_faceRecognition_outer}>
            <img style={style_faceRecognition} src={img_elFaceRecognition} alt=""  />
          
          </div>
          
          <div className='elPublishBubble' style={style_publishBubble_outer}>
            <img style={style_publishBubble} src={img_elPublishBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_PublishBubble' style={style_button_PublishBubble_outer}>
            <div style={style_button_PublishBubble}   />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
