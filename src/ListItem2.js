import React, { Component } from 'react';
import './App.css';
import img_elUserBubble from './images/ListItem2_elUserBubble_312326.png';


export default class ListItem2 extends Component {

  // This component doesn't use any properties

  onClick_elUserBubble = (ev) => {
    // Go to screen 'NewUserDiary'
    this.props.appActions.goToScreen('newuserdiary', { ...this.props, transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_userBubble = {
        height: 'auto',
     };
    const style_userBubble_outer = {
        cursor: 'pointer',
     };
    const style_userPhoto_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItem2" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elUserBubble' style={style_userBubble_outer}>
            <img style={style_userBubble} src={img_elUserBubble} alt="" onClick={this.onClick_elUserBubble}  />
          
          </div>
          
          <div className='cardBg elUserPhoto' style={style_userPhoto_outer}>
            <div />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
