import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_736526.jpg';
import img_elAddPicBB from './images/NewCreateBBScreen_elAddPicBB_474204.png';
import img_elOriDiaryBB from './images/NewCreateBBScreen_elOriDiaryBB_968678.png';
import img_elButton_Complete from './images/NewCreateBBScreen_elButton_Complete_945493.png';
import img_elIconalerts from './images/NewFaceRecScreen_elIconalerts_927169.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewCreateBBScreen extends Component {

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
  
  onClick_elHotspot = (ev) => {
    // Go to screen 'NewFaceRec'
    this.props.appActions.goToScreen('newfacerec', { transitionId: 'fadeIn' });
  
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
        height: 'auto',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_addPicBB = {
        height: 'auto',
     };
    const style_addPicBB_outer = {
        pointerEvents: 'none',
     };
    const style_oriDiaryBB = {
        height: 'auto',
     };
    const style_oriDiaryBB_outer = {
        pointerEvents: 'none',
     };
    const style_textarea = {
        display: 'block',
        backgroundColor: 'white',
        paddingLeft: '1rem',
        boxSizing: 'border-box', // ensures padding won't expand element's outer size
     };
    const style_button_Complete = {
        height: 'auto',
     };
    const style_button_Complete_outer = {
        pointerEvents: 'none',
     };
    const style_hotspot = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_hotspot_outer = {
        cursor: 'pointer',
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
      <Container fluid={true} className="AppScreen NewCreateBBScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <img style={style_bubbleDiaryBG} src={img_elBubbleDiaryBG} alt=""  />
          
          </div>
          
          <div className='elAddPicBB' style={style_addPicBB_outer}>
            <img style={style_addPicBB} src={img_elAddPicBB} alt=""  />
          
          </div>
          
          <div className='elOriDiaryBB' style={style_oriDiaryBB_outer}>
            <img style={style_oriDiaryBB} src={img_elOriDiaryBB} alt=""  />
          
          </div>
          
          <div className='baseFont elTextarea'>
            <textarea style={style_textarea}  placeholder={this.props.locStrings.newcreatebb_textarea_670437} onChange={this.textAreaChanged_textarea} defaultValue={this.state.textarea}  />
          
          </div>
          
          <div className='elButton_Complete' style={style_button_Complete_outer}>
            <img style={style_button_Complete} src={img_elButton_Complete} alt=""  />
          
          </div>
          
          <div className='actionFont elHotspot' style={style_hotspot_outer}>
            <div style={style_hotspot}  onClick={this.onClick_elHotspot}  />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard_ToolBar' style={style_card_ToolBar_outer}>
              <div style={style_card_ToolBar} />
            
            </div>
            
            <img className='elIconalerts' style={style_iconalerts} src={img_elIconalerts} alt=""  />
            <button className='elButton_BBDiary' style={style_button_BBDiary}  >
              {this.props.locStrings.newtutorcreatebb2_button_bbdiary_392335}
            </button>
            <button className='elButton_profile' style={style_button_profile}  >
              {this.props.locStrings.newtutorcreatebb2_button_profile_1002526}
            </button>
            <div className='font-arialRoundedMTBold  elSubtitle' style={style_subtitle}>
              <div>{this.props.locStrings.newtutorcreatebb2_subtitle_478439}</div>
            </div>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.newtutorcreatebb2_button_homepage_487917}
            </button>
            <div className='font-arialRoundedMTBold  elTitle_yolo' style={style_title_yolo}>
              <div>{this.props.locStrings.newtutorcreatebb2_title_yolo_767224}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
