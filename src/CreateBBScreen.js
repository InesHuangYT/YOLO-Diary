import React, { Component } from 'react';
import './App.css';

import img_elBubbleDiaryBG from './images/NewBubbleDiary2Screen_elBubbleDiaryBG_562791.jpg';
import img_elOriDiaryBB from './images/NewCreateBBScreen_elOriDiaryBB_1024639.png';
import img_elAddPicBB from './images/NewCreateBBScreen_elAddPicBB_474204.png';
import img_elImage_Complete from './images/NewCreateBBScreen_elComplete_945493.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class CreateBBScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      textarea: '',
    };
  }

  textAreaChanged_textarea = (event) => {
    this.setState({textarea: event.target.value});
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
    const style_oriDiaryBB = {
        backgroundImage: 'url('+img_elOriDiaryBB+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_oriDiaryBB_outer = {
        pointerEvents: 'none',
     };
    const style_addPicBB = {
        height: 'auto',
     };
    const style_addPicBB_outer = {
        pointerEvents: 'none',
     };
    const style_button_AddPic = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_AddPic_outer = {
        pointerEvents: 'none',
     };
    const style_textarea = {
        display: 'block',
        fontSize: 16.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_image_Complete = {
        height: 'auto',
     };
    const style_image_Complete_outer = {
        pointerEvents: 'none',
     };
    const style_button_Complete = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Complete_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen CreateBBScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.tutorcreatebb3_text_799531}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.tutorcreatebb3_textcopy_114827}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.tutorcreatebb3_button_635540}
            </button>
          
          </div>
          
          <div className='elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy_867925}
            </button>
          
          </div>
          
          <div className='elButtonCopy2' style={style_buttonCopy2_outer}>
            <button style={style_buttonCopy2}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy2_394648}
            </button>
          
          </div>
          
          <div className='elButtonCopy3' style={style_buttonCopy3_outer}>
            <button style={style_buttonCopy3}  >
              {this.props.locStrings.tutorcreatebb3_buttoncopy3_232776}
            </button>
          
          </div>
          
          
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elOriDiaryBB' style={style_oriDiaryBB_outer}>
            <div style={style_oriDiaryBB} />
          
          </div>
          
          <div className='elAddPicBB' style={style_addPicBB_outer}>
            <img style={style_addPicBB} src={img_elAddPicBB} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_AddPic' style={style_button_AddPic_outer}>
            <div style={style_button_AddPic}   />
          
          </div>
          
          <div className='elTextarea'>
            <textarea style={style_textarea}  placeholder={this.props.locStrings.createbb_textarea_580133} onChange={this.textAreaChanged_textarea} defaultValue={this.state.textarea}  />
          
          </div>
          
          <div className='elImage_Complete' style={style_image_Complete_outer}>
            <img style={style_image_Complete} src={img_elImage_Complete} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_Complete' style={style_button_Complete_outer}>
            <div style={style_button_Complete}   />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
