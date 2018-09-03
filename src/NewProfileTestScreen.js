import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elPBG from './images/NewFriendListScreen_elPBG_664556.png';
import img_elProfileInfroBB from './images/NewProfileTestScreen_elProfileInfroBB_862686.png';
import PMenu from './PMenu';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import axios from 'axios';


export default class NewProfileTestScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_email: '',
      field_username: '',
    };
    let _this = this;
    axios.get('/api/user/usernameEmail').then(res => {
      console.log(res.data.username);
      console.log(res.data.email);
      _this.setState({field_email:res.data.email});
      _this.setState({field_username:res.data.username});
    });
  }

  textInputChanged_field_email = (event) => {
    //this.setState({field_email: event.target.value});
  }
  
  textInputChanged_field_username = (event) => {
    //this.setState({field_username: event.target.value});
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
    const style_PBG = {
        backgroundImage: 'url('+img_elPBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_PBG_outer = {
        pointerEvents: 'none',
     };
    const style_profileInfroBB = {
        backgroundImage: 'url('+img_elProfileInfroBB+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_profileInfroBB_outer = {
        pointerEvents: 'none',
     };
    const style_field_email = {
        display: 'block',
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_field_username = {
        display: 'block',
        fontSize: 21.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
     };
    const style_button_confirm = {
        display: 'block',
        fontSize: 14.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        textAlign: 'center',
     };
    const style_button_confirm_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewProfileTestScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elPBG' style={style_PBG_outer}>
            <div style={style_PBG} />
          
          </div>
          
          <div className='elProfileInfroBB' style={style_profileInfroBB_outer}>
            <div style={style_profileInfroBB} />
          
          </div>
          
          <div className='elField_email'>
            <Input style={style_field_email} type="text" hint={this.props.locStrings.profile3_field_929500} onChange={this.textInputChanged_field_email} value={this.state.field_email}  />
          
          </div>
          
          <div className='elField_username'>
            <Input style={style_field_username} type="text" hint={this.props.locStrings.profile3_fieldcopy_687629} onChange={this.textInputChanged_field_username} value={this.state.field_username}  />
          
          </div>
          
          <div className='hasNestedComps elComp'>
            <div>
              <PMenu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elButton_confirm' style={style_button_confirm_outer}>
            <Button style={style_button_confirm}  color="accent" >
              {this.props.locStrings.newprofiletest_button_134162}
            </Button>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
