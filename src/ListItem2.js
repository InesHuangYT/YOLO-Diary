import React, { Component } from 'react';
import './App.css';
import img_elUserBubble from './images/ListItem2_elUserBubble_312326.png';
import img_elUserPic from './images/ListItem2_elUserPic_268846.png';


export default class ListItem2 extends Component {

  // This component doesn't use any properties
   
  componentDidMount() {
    
   console.log(this.props)
  
  }

  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  onClick_elUserBubble = (ev) => {
    // Go to screen 'NewUserDiary'
    console.log(this.props);
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
    const style_userPic = {
        height: 'auto',
     };
    const style_userPic_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListItem2" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elUserBubble' style={style_userBubble_outer}>
            <img style={style_userBubble} src={img_elUserBubble} alt="" onClick={this.onClick_elUserBubble}  />
          
          </div>
          
          <div className='elUserPic' style={style_userPic_outer}>
            <img style={style_userPic} src={img_elUserPic} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
