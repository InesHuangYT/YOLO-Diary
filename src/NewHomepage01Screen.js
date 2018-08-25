import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/NewHomepage01Screen_elHomeBG_666706.jpg';
import img_elHomePageBubble from './images/NewHomepage01Screen_elHomePageBubble_520234.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import setAuthorizationToken from './util/APIUtils';


export default class NewHomepage01Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButtonNext = (ev) => {
    // Go to screen 'NewFirstUpProfilePic'

    /* 移除token */
    // sessionStorage.removeItem('accesstoken');
    //   setAuthorizationToken(false);
    this.props.appActions.goToScreen('newfirstupprofilepic', { transitionId: 'fadeIn' });
  
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
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    const style_homePageBubble = {
        height: 'auto',
     };
    const style_homePageBubble_outer = {
        pointerEvents: 'none',
     };
    const style_buttonNext = {
        display: 'block',
        textAlign: 'center',
     };
    const style_buttonNext_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewHomepage01Screen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText_Yolo' style={style_text_Yolo_outer}>
            <div style={style_text_Yolo}>
              <div>{this.props.locStrings.newfirstupprofilepic2_text_yolo_606521}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elText_Slogan' style={style_text_Slogan_outer}>
            <div style={style_text_Slogan}>
              <div>{this.props.locStrings.newfirstupprofilepic2_text_slogan_608390}</div>
            </div>
          
          </div>
          
          <div className='elButton_HomePage' style={style_button_HomePage_outer}>
            <button style={style_button_HomePage}  >
              {this.props.locStrings.newfirstupprofilepic2_button_homepage_782392}
            </button>
          
          </div>
          
          <div className='elButton_BubbleDiary' style={style_button_BubbleDiary_outer}>
            <button style={style_button_BubbleDiary}  >
              {this.props.locStrings.newfirstupprofilepic2_button_bubblediary_789575}
            </button>
          
          </div>
          
          <div className='elButton_Profile' style={style_button_Profile_outer}>
            <button style={style_button_Profile}  >
              {this.props.locStrings.newfirstupprofilepic2_button_profile_265526}
            </button>
          
          </div>
          
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elHomePageBubble' style={style_homePageBubble_outer}>
            <img style={style_homePageBubble} src={img_elHomePageBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButtonNext' style={style_buttonNext_outer}>
            <Button style={style_buttonNext}  color="accent" onClick={this.onClick_elButtonNext} >
              {this.props.locStrings.newhomepage01_button_55047}
            </Button>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
