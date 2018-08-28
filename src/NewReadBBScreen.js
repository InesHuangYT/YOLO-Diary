import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewHomeNotificationScreen_elBubbleDiaryBG_199962.jpg';
import img_elMainBubble from './images/NewReadBBScreen_elMainBubble_223100.png';
import img_elUserBubble from './images/NewReadBBScreen_elMainBubble_223100.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class NewReadBBScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  constructor(props) {
    super(props);
    
    this.state = {
      field: this.props.dataSheetRow.field,
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elUserBubble = (ev) => {
    // Go to screen 'NewUserDiary'
    this.props.appActions.goToScreen('newuserdiary', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_back = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
        backgroundImage: 'url('+img_elBubbleDiaryBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_bubbleDiaryBG_outer = {
        pointerEvents: 'none',
     };
    const style_mainBubble = {
        height: 'auto',
     };
    const style_mainBubble_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
     };
    const value_field = this.props.dataSheetRow ? this.props.dataSheetRow.field : '';
    
    const style_userBubble = {
        height: 'auto',
     };
    const style_userBubble_outer = {
        cursor: 'pointer',
     };
    const style_button_back = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_back_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewReadBBScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <div style={style_bubbleDiaryBG} />
          
          </div>
          
          <div className='elMainBubble' style={style_mainBubble_outer}>
            <img style={style_mainBubble} src={img_elMainBubble} alt=""  />
          
          </div>
          
          <div className='baseFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.newreadbb_field_120491} onChange={this.textInputChanged_field} defaultValue={value_field !== undefined ? value_field : ''}  />
          
          </div>
          
          <div className='elUserBubble' style={style_userBubble_outer}>
            <img style={style_userBubble} src={img_elUserBubble} alt="" onClick={this.onClick_elUserBubble}  />
          
          </div>
          
          <div className='actionFont elButton_back' style={style_button_back_outer}>
            <Button style={style_button_back}  color="accent" onClick={this.onClick_elButton_back} >
              {this.props.locStrings.newreadbb_button_703594}
            </Button>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
