import React, { Component } from 'react';
import './App.css';
import img_elHomeBG from './images/Start5Screen_elN2018071631230_760420.jpg';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class ScrollTestScreen extends Component {

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
        backgroundColor: 'white',
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
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen ScrollTestScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='font-arialRoundedMTBold  elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.scrollmodelfirstupprofilepic2_text_550437}</div>
            </div>
          
          </div>
          
          <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy_outer}>
            <div style={style_textCopy}>
              <div>{this.props.locStrings.scrollmodelfirstupprofilepic2_textcopy_565210}</div>
            </div>
          
          </div>
          
          <div className='elButton' style={style_button_outer}>
            <button style={style_button}  >
              {this.props.locStrings.scrollmodelfirstupprofilepic2_button_628439}
            </button>
          
          </div>
          
          <div className='elButtonCopy' style={style_buttonCopy_outer}>
            <button style={style_buttonCopy}  >
              {this.props.locStrings.scrollmodelfirstupprofilepic2_buttoncopy_744042}
            </button>
          
          </div>
          
          <div className='elButtonCopy2' style={style_buttonCopy2_outer}>
            <button style={style_buttonCopy2}  >
              {this.props.locStrings.scrollmodelfirstupprofilepic2_buttoncopy2_868123}
            </button>
          
          </div>
          
          <div className='elButtonCopy3' style={style_buttonCopy3_outer}>
            <button style={style_buttonCopy3}  >
              {this.props.locStrings.scrollmodelfirstupprofilepic2_buttoncopy3_980279}
            </button>
          
          </div>
          
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
