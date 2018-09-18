import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/NewHomepage01Screen_elHomeBG_666706.jpg';
import img_elHomePageBubble from './images/NewHomepage01Screen_elHomePageBubble_520234.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import axios from 'axios';


export default class NewHomepage01Screen extends Component {
 
  // Properties used by this component:
  // appActions, deviceInfo
  

  onClick_elButtonNext = (ev) => {
    // Go to screen 'NewFirstUpProfilePic'
    axios.get("/api/user/mySelfie").then(res =>{
      console.log(res.data.available);
    if(res.data.available){
      this.props.appActions.goToScreen('newbubblediary', { transitionId: 'fadeIn' });
    }else{
    this.props.appActions.goToScreen('newfirstupprofilepic', { transitionId: 'fadeIn' });
  }
  });
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
      <Container fluid={true} className="AppScreen NewHomepage01Screen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
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
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard' style={style_card_outer}>
              <div style={style_card} />
            
            </div>
            
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.newhomepage01_textcopy_424822}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.newhomepage01_text_247477}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
