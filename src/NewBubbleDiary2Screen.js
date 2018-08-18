import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewBubbleDiary2Screen_elBubbleDiaryBG_562791.jpg';
import img_elAddBubble from './images/NewBubbleDiaryScreen_elAddBubble_49436.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewBubbleDiary2Screen extends Component {

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
    
    const style_bubbleDiaryBG = {
        height: 'auto',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_addBubble = {
        height: 'auto',
     };
    const style_addBubble_outer = {
        pointerEvents: 'none',
     };
    const style_button_AddBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_AddBubble_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewBubbleDiary2Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.newbubblediary2_text_71402}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.newbubblediary2_textcopy_585196}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.newbubblediary2_button_95425}
            </button>
          
          </div>
          
          <div className='elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  >
              {this.props.locStrings.newbubblediary2_buttoncopy_577926}
            </button>
          
          </div>
          
          <div className='elButtonCopy2' style={style_buttonCopy2_outer}>
            <button style={style_buttonCopy2}  >
              {this.props.locStrings.newbubblediary2_buttoncopy2_39614}
            </button>
          
          </div>
          
          <div className='elButtonCopy3' style={style_buttonCopy3_outer}>
            <button style={style_buttonCopy3}  >
              {this.props.locStrings.newbubblediary2_buttoncopy3_546358}
            </button>
          
          </div>
          
          
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elAddBubble' style={style_addBubble_outer}>
            <img style={style_addBubble} src={img_elAddBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_AddBubble' style={style_button_AddBubble_outer}>
            <div style={style_button_AddBubble}   />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
