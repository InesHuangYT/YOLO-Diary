import React, { Component } from 'react';
import './App.css';
import img_elN2018071631230 from './images/Start3Screen_elN2018071631230_351371.jpg';
import img_elN150971380756744 from './images/Start3Screen_elN150971380756744_710500.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class Start4Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      fieldCopy: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  textInputChanged_fieldCopy = (event) => {
    this.setState({fieldCopy: event.target.value});
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
    const style_n2018071631230 = {
        height: 'auto',
        pointerEvents: 'none',
     };
    const style_n150971380756744 = {
        backgroundImage: 'url('+img_elN150971380756744+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_textCopy2 = {
        fontSize: 31.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
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
    const style_buttonCopy = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
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
        pointerEvents: 'none',
     };
    const style_text2 = {
        fontSize: 31.8,
        color: '#feffff',
        textAlign: 'left',
        textShadow: 'rgba(0, 0, 0, 0.4500) 0.0px 5.3px 14.1px',
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        color: '#feffff',
        fontSize: 28.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_fieldCopy = {
        display: 'block',
        color: '#feffff',
        fontSize: 28.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button2 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(46, 154, 199, 0.7846)',
        pointerEvents: 'none',
     };
    const style_buttonCopy4 = {
        display: 'block',
        fontSize: 29.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button3 = {
        display: 'block',
        fontSize: 29.5,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen Start4Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <img className='elN2018071631230' style={style_n2018071631230} src={img_elN2018071631230} alt=""  />
          <div className='elN150971380756744' style={style_n150971380756744} />
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-SFUITextBold  elTextCopy2' style={style_textCopy2}>
              <div>{this.props.locStrings.start4_textcopy2_365433}</div>
            </div>
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.start4_textcopy_505293}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.start4_text_1039418}</div>
            </div>
            <button className='elButtonCopy' style={style_buttonCopy}  >
              {this.props.locStrings.start4_buttoncopy_284544}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.start4_button_877630}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.start4_buttoncopy2_936808}
            </button>
            <button className='elButtonCopy3' style={style_buttonCopy3}  >
              {this.props.locStrings.start4_buttoncopy3_552396}
            </button>
            <div className='font-SFUITextBold  elText2' style={style_text2}>
              <div>{this.props.locStrings.start4_text2_435118}</div>
            </div>
            <Input className='elField' style={style_field} type="text" hint={this.props.locStrings.start4_field_780698} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
            <Input className='elFieldCopy' style={style_fieldCopy} type="password" hint={this.props.locStrings.start4_fieldcopy_997795} onChange={this.textInputChanged_fieldCopy} defaultValue={this.state.fieldCopy}  />
            <Button className='elButton2' style={style_button2}  >
              {this.props.locStrings.start4_button2_62890}
            </Button>
            <button className='elButtonCopy4' style={style_buttonCopy4}  >
              {this.props.locStrings.start4_buttoncopy4_153604}
            </button>
            <button className='elButton3' style={style_button3}  >
              {this.props.locStrings.start4_button3_198154}
            </button>
          </div>
        </div>
      </Container>
    )
  }
  

}
