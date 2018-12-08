import React, { Component } from 'react';
import './App.css';
import img_elPmenu from './images/Pmenu02.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import './UploadPic.css';
import 'antd/dist/antd.css';
import { Modal,message } from 'antd';
export default class PMenu extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field_username: '',
      preview: null,
      data: null,
      visible:false
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
 
  handleOk = (e) => {
    //確定上傳照片
    
    message.success('照片已更換');
    this.setState({
      visible: false,
    });
    

  }

  handleCancel = (e) => {
    
    this.setState({
      visible: false,
    });
  }
  changePath = (e) => {
        
    var filenumber = e.target.files.length
    let photopv = [];
    let photodata = [];
    this.form = new FormData()
    

    for(var i = 0; i < filenumber; i++){

    const file = e.target.files[i];
    let src,previews,type=file.type;
    
    if (!file) {
        return;
    }
  
    if (/^image\/\S+$/.test(type)) {
       
        src = URL.createObjectURL(file)
        previews = <img src={src} style={{width:'250px'}} alt='' key = {i}/>
       
        photopv.push(previews)
        photodata.push(file)
        
        
        this.form.append(i,file);
        this.config = {
            headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
          }
          console.log(this.form);
         
          
          
    }
}   
    this.setState({ data: photodata, preview: photopv,visible:true})
    
    
}

  onClick_elButton_FList = (ev) => {
    // Go to screen 'NewFriendList'
    this.props.appActions.goToScreen('newfriendlist', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_Chat = (ev) => {
    // Go to screen 'NewChatRoom'
    this.props.appActions.goToScreen('newchatroom', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton_profile = (ev) => {
    // Go to screen 'NewProfileTest'
    this.props.appActions.goToScreen('newprofiletest', { transitionId: 'fadeIn' });
  
  }
  
  
  textInputChanged_field_username = (event) => {
    this.setState({field_username: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    const { preview } = this.state;
    const style_pmenu = {
        backgroundImage: 'url('+img_elPmenu+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_pmenu_outer = {
        pointerEvents: 'none',
     };
    const style_button_FList = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_FList_outer = {
        cursor: 'pointer',
     };
    const style_button_Chat = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Chat_outer = {
        cursor: 'pointer',
     };
    const style_button_profile = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_profile_outer = {
        cursor: 'pointer',
     };
    
     const style_card_outer = {
      backgroundColor: 'transparent',
      boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
      pointerEvents: 'none',
   };
    const style_uppic = {
        display: 'block',
        fontSize: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        fontWeight: 'bold',
        color: 'transparent',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_uppic_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="PMenu" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elPmenu' style={style_pmenu_outer}>
            <div style={style_pmenu} />
          
          </div>
          
          <div className='actionFont elButton_FList' style={style_button_FList_outer}>
            <div style={style_button_FList}  onClick={this.onClick_elButton_FList}  />
          
          </div>
          
          <div className='actionFont elButton_Chat' style={style_button_Chat_outer}>
            <div style={style_button_Chat}  onClick={this.onClick_elButton_Chat}  />
          
          </div>
          
          <div className='actionFont elButton_profile' style={style_button_profile_outer}>
            <div style={style_button_profile}  onClick={this.onClick_elButton_profile}  />
          
          </div>
          {/* <div className='group-change-img'>
          <div className='box-change-icon'>
       
                {preview}
                
          <i className="change-icon" >
          
              <input className='change-img' type='file' accept='image/*' onChange={this.changePath} />
             
            </i>
            
            </div>
            </div> */}
         
         <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='300px' 
        >確定更換為此照片嗎?
        </Modal>
          <div className='cardBg elCard' >
          <input className='input-img' type='file' accept='image/*' style={{width:'250px'}} onChange={this.changePath} />
            {/* <img src={賴桑} alt=""/> */}
            
          
          <button>
          {preview}
          {this.props.locStrings.pmenu_uppic_291006}
         
        </button>
       
         
         </div>
       
       
         
         
          
           
          
          
        </div>
      </div>
    )
  }
  

}
