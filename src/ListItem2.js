import React, { Component } from 'react';
import './App.css';
import img_elUserBubble from './images/ListItem2_elUserBubble_312326.png';
// import img_elUserPic from './images/ListItem2_elUserPic_268846.png';
import img_elPic from './images/Pic.png';
import Axios from 'axios';

export default class ListItem2 extends Component {

  // This component doesn't use any properties
   
 
  constructor(props) {
    super(props);
    
    this.state = {
      src:''
      
    };
  }


  componentDidMount() {
    
    console.log('item2 picture--->', this.props)
    this.setState({src: this.props.dataSheetRow.userPhotoData})
   
   }
 

  onClick_elUserBubble = (ev) => {
    // Go to screen 'NewUserDiary'
    let check = this.props
    console.log('item2',check);
    Axios.get('/api/user/me').then(res => {
      console.log('check current user', res)
      if(res.data.username.match(this.props.dataSheetRow.author)){
        if(this.props.dataSheetRow.diaryId){
          this.props.appActions.goToScreen('newuserdiary', { ...this.props, transitionId: 'fadeIn' });
        }else{
          this.props.appActions.goToScreen('newcreatebb',  { ...this.props, transitionId: 'fadeIn' });
        }
       
    }else if(!res.data.username.match(this.props.dataSheetRow.author)){
      if(this.props.dataSheetRow.diaryId){
        this.props.appActions.goToScreen('newuserdiary', { ...this.props, transitionId: 'fadeIn' });
      }else{
        
      }
        
    }
    })
   
    

    
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
    // const style_userPic = {
    //     height: 'auto',
    //  };
    // const style_userPic_outer = {
    //     pointerEvents: 'none',
    //  };
    const style_Pic = {
      height: 'auto',
     };
    const style_Pic_outer = {
      pointerEvents: 'none',
     };
    
    return (
      <div className="ListItem2" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elUserBubble' style={style_userBubble_outer}>
            <img style={style_userBubble} src={img_elUserBubble} alt="" onClick={this.onClick_elUserBubble}  />
          
          </div>
          
          {/* <div className='elUserPic' style={style_userPic_outer}>
            <img style={style_userPic} src={img_elUserPic} alt=""  />
          
          </div> */}
          <div className='elPic' style={style_Pic_outer}>
            <img src={"data:image/jpeg;base64, " + this.state.src} key={this.props.dataSheetRow.key} alt=""  />
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
