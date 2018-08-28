import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elPBG from './images/NewFriendListScreen_elPBG_664556.png';
import PMenu from './PMenu';
import img_elTitle_chat from './images/NewChatRoomScreen_elTitle_chat_23494.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewChatRoomScreen extends Component {

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
    const style_PBG = {
        backgroundImage: 'url('+img_elPBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_PBG_outer = {
        pointerEvents: 'none',
     };
    const style_title_chat = {
        backgroundImage: 'url('+img_elTitle_chat+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_title_chat_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewChatRoomScreen" style={baseStyle}>
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
          
          <div className='hasNestedComps elComp'>
            <div>
              <PMenu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elTitle_chat' style={style_title_chat_outer}>
            <div style={style_title_chat} />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
