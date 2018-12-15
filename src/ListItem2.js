import React, { Component } from 'react';
import './App.css';
import img_elUserBubble from './images/ListItem2_elUserBubble_312326.png';
// import img_elUserPic from './images/ListItem2_elUserPic_268846.png';
import img_elPic from './images/Pic.png';
import Axios from 'axios';
import { Input,Modal,message } from 'antd';

export default class ListItem2 extends Component {

  // This component doesn't use any properties
   
  
  constructor(props) {
    super(props);
    
    this.state = {
      src:'',
      author:'',
      GoToCreate_visible: false, 
      Remind_visible: false
      
    };
  }


  componentDidMount() {
    
    console.log('item2 picture--->', this.props)
    this.setState({src: this.props.dataSheetRow.userPhotoData})
    this.setState({author: this.props.dataSheetRow.author})
   
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
          this.show_GoToCreate_Modal()
        }
       
    }else if(!res.data.username.match(this.props.dataSheetRow.author)){
      if(this.props.dataSheetRow.diaryId){
        this.props.appActions.goToScreen('newuserdiary', { ...this.props, transitionId: 'fadeIn' });
      }else{
        this.show_Remind_Modal()
      }
        
    }
    })
  }
    show_GoToCreate_Modal = () => {
      this.setState({
        GoToCreate_visible: true,
      });
    }
  
    GoToCreate_handleOk = (e) => {
     
      this.props.appActions.goToScreen('newbbnamecreate',  { ...this.props, transitionId: 'fadeIn' });
      this.setState({
        GoToCreate_visible: false,
      });
    }
  
    GoToCreate_handleCancel = (e) => {
      
      this.setState({
        GoToCreate_visible: false,
      });
    }

    show_Remind_Modal = () => {
      this.setState({
        Remind_visible: true,
      });
    }
  
    Remind_handleOk = (e) => {
     
      this.setState({
        Remind_visible: false,
      });
    }
  
    Remind_handleCancel = (e) => {
      
      this.setState({
        Remind_visible: false,
      });
    }


    

  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const textStyle = {
      textAlign:'center', 
    }
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

          <Modal title="" visible={this.state.GoToCreate_visible} onOk={this.GoToCreate_handleOk} onCancel={this.GoToCreate_handleCancel} width='300px'>
         <div style={textStyle} >
         您還沒寫日記呢!<br/>
         現在前往新增日記嗎?
         </div>
        </Modal>

         <Modal title="" visible={this.state.Remind_visible} onOk={this.Remind_handleOk} onCancel={this.handleCancel} width='300px' > 
         <div style={textStyle} >
         {this.state.author}還沒有日記可以閱讀<br/>
         快提醒他去分享日記吧!
         </div>
        </Modal>
          
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
