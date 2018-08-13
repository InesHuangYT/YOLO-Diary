import React, { Component } from 'react';
import './App.css';
import img_elProfileBG from './images/ProfileScreen_elProfileBG_50330.png';
import img_elProfileInfroBB from './images/ProfileScreen_elProfileInfroBB_993277.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class Profile2Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo
//testttttt
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
    const style_profileBG = {
        height: 'auto',
        pointerEvents: 'none',
     };
    const style_profileInfroBB = {
        backgroundImage: 'url('+img_elProfileInfroBB+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_buttonCopy4 = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_fieldCopy = {
        display: 'block',
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    
    return (
      <Container fluid={true} className="AppScreen Profile2Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.profile2_textcopy_133439}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.profile2_text_197835}</div>
            </div>
            <button className='elButtonCopy' style={style_buttonCopy}  >
              {this.props.locStrings.profile2_buttoncopy_787363}
            </button>
            <button className='elButton' style={style_button}  >
              {this.props.locStrings.profile2_button_87646}
            </button>
            <button className='elButtonCopy2' style={style_buttonCopy2}  >
              {this.props.locStrings.profile2_buttoncopy2_677742}
            </button>
            <button className='elButtonCopy3' style={style_buttonCopy3}  >
              {this.props.locStrings.profile2_buttoncopy3_867437}
            </button>
            <img className='elProfileBG' style={style_profileBG} src={img_elProfileBG} alt=""  />
            <div className='elProfileInfroBB' style={style_profileInfroBB} />
            <button className='elButtonCopy4' style={style_buttonCopy4}  >
              {this.props.locStrings.profile2_buttoncopy4_717472}
            </button>
            <Input className='elField' style={style_field} type="text" hint={this.props.locStrings.profile2_field_823174} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
            <Input className='elFieldCopy' style={style_fieldCopy} type="text" hint={this.props.locStrings.profile2_fieldcopy_518270} onChange={this.textInputChanged_fieldCopy} defaultValue={this.state.fieldCopy}  />
          </div>
        </div>
      </Container>
    )
  }
  

}
