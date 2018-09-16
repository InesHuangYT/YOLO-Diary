import React, { Component } from 'react';
import './App.css';
import img_elAddBubble from './images/Addbubble_elAddBubble_313463.png';


export default class Addbubble extends Component {

  // This component doesn't use any properties

  onClick_elButton_AddBubble = (ev) => {
    // Go to screen 'NewBBNameCreate'
    this.props.appActions.goToScreen('newbbnamecreate', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_addBubble = {
        height: 'auto',
     };
    const style_addBubble_outer = {
        pointerEvents: 'none',
     };
    const style_button_AddBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_AddBubble_outer = {
        cursor: 'pointer',
     };
    
    return (
      <div className="Addbubble" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elAddBubble' style={style_addBubble_outer}>
            <img style={style_addBubble} src={img_elAddBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_AddBubble' style={style_button_AddBubble_outer}>
            <div style={style_button_AddBubble}  onClick={this.onClick_elButton_AddBubble}  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
