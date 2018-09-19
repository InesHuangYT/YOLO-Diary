import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import img_elHomeBG from './images/NewEmailSentScreen_elHomeBG_1012260.jpg';
import img_elUpProfilePic from './images/NewFirstUpProfilePicScreen_elUpProfilePic_850626.png';
import {message} from 'antd';
// UI framework component imports
import Container from 'muicss/lib/react/container';
import './UploadPic.css';


export default class NewFirstUpProfilePicScreen extends Component {

  state = {
        
    path: '',
    preview: null,
    data: null,
    form: null,
    config: null
}
changePath = (e) => {

  const file = e.target.files[0];
  console.log(file.name)
  console.log(file)
  console.log("**********************")

  if (!file) {
      console.log('未選擇圖片');
      return;
  // Properties used by this component:
  // appActions, deviceInfo
  }
  let src,preview,type=file.type;
  if (/^image\/\S+$/.test(type)) {
    src = URL.createObjectURL(file)
    preview = <img src={src} style={{width:'275px',height:'168px'}} alt='' />

    console.log('selfie src',src)


    this.form = new FormData();
    this.form.append('file', file);
    this.config = {
      headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
    }
    
    

}
else if (/^text\/\S+$/.test(type)) {
  alert("Wrong File Type")
  }

this.setState({ data: file, preview: preview })
}
upload = () => {
        
  const data = this.state.data;
  if (!data) {
      console.log('未選擇文件');
      return;
  }

}
  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elButton_comfirm = (ev) => {
    
   

    // axios.post('/api/selfie/uploadmany', this.form, this.config).then(res => {
    //   console.log(res);
    //   console.log(res.data);
     
    // }).catch(function(error){
    //   message.error('必須先上傳一張大頭照');
    // });
    // Go to screen 'NewBubbleDiary'
    this.props.appActions.goToScreen('newbubblediary', { transitionId: 'fadeIn' });
    

  
   
  
  
  }
  
  
  onClick_elButton_UploadPic = (ev) => {
  
  }
  
  
  render() {
    const { preview } = this.state;
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
        backgroundColor: 'white',
        pointerEvents: 'none',
     };
    const style_homeBG = {
        height: 'auto',
     };
    const style_homeBG_outer = {
        pointerEvents: 'none',
     };
    const style_upProfilePic = {
        backgroundImage: 'url('+img_elUpProfilePic+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_upProfilePic_outer = {
        pointerEvents: 'none',
     };
    const style_button_comfirm = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_comfirm_outer = {
        cursor: 'pointer',
     };
    const style_button_UploadPic = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_UploadPic_outer = {
        cursor: 'pointer',
     };
    const style_card = {
        width: '100%',
        height: '100%',
     };
    const style_card_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
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
    
    return (
      <Container fluid={true} className="AppScreen NewFirstUpProfilePicScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elHomeBG' style={style_homeBG_outer}>
            <img style={style_homeBG} src={img_elHomeBG} alt=""  />
          
          </div>
          
          <div className='elUpProfilePic' style={style_upProfilePic_outer}>
            <div style={style_upProfilePic} />
          
          </div>
          
          <div className='actionFont elButton_comfirm' style={style_button_comfirm_outer}>
            <div style={style_button_comfirm}  onClick={this.onClick_elButton_comfirm}  />
          
          </div>
        
          <div className='actionFont elButton_UploadPic' style={style_button_UploadPic_outer}>
         
          
          <div className='box-upload-icon'>
          <div className = "box-upload-image">
                {preview}
                </div>
          <i className="upload-icon" >
          
              <input className='input-img' type='file' accept='image/*' onChange={this.changePath} />
             
            </i>
            
            </div>
           
           
            
          
          
              
            
          </div>
          
        </div>
       
        <div className="screenFgContainer">
          <div className="foreground">


            <div className='cardBg elCard' style={style_card_outer}>
           
      
            </div>
           
                
            <div className='font-arialRoundedMTBold  elTextCopy' style={style_textCopy}>
              <div>{this.props.locStrings.newfirstupprofilepic_textcopy_859284}</div>
            </div>
            <div className='font-arialRoundedMTBold  elText' style={style_text}>
              <div>{this.props.locStrings.newfirstupprofilepic_text_296138}</div>
            </div>
          </div>
        </div>
     
      </Container>
    )
  }
  

}
