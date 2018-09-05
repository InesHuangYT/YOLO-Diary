import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import img_elOriDiaryBB from './images/NewCreateBBScreen_elOriDiaryBB_1024639.png';
import img_elAddPicBB from './images/NewCreateBBScreen_elAddPicBB_474204.png';
import img_elComplete from './images/NewCreateBBScreen_elComplete_945493.png';
import UploadPic from './UploadPic.js';
import Axios from 'axios';
// UI framework component imports
import Textarea from 'muicss/lib/react/textarea';
import Container from 'muicss/lib/react/container';
import { Modal} from 'antd';
import 'antd/dist/antd.css';

//import './UploadPic.css';
import axios from 'axios';

import { Input } from 'antd';
import 'antd/dist/antd.css';

export default class NewCreateBBScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo
  state = { visible: false }
  constructor(props) {
    super(props);
    
    this.state = {
      //field: '',
      textarea: '',
    };
  }
    
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

//  textInputChanged_field = (event) => {
//    this.setState({field: event.target.value});
//  }
  
  textAreaChanged_textarea = (event) => {
     this.setState({textarea: event.target.value});
  }
  
  onClick_elButton_Complete = (ev) => {

    this.sendData_button_Complete_to_listData1();

    const diary = {
    text : this.state.textarea
  }

  axios.post('/api/diary/1' ,diary)
  .then(res => {
    console.log(res);
  }).catch(function(error){
    alert("Wrong diary");
  });

    // Go to screen 'NewFaceRec'
    this.props.appActions.goToScreen('newfacerec', { transitionId: 'fadeIn' });
  
  }
  
  
//  sendData_button_Complete_to_listData1 = () => {
//    const dataSheet = this.props.appActions.getDataSheet('listData1');
  onClick_elAddPic = (ev) => {
  
  }
  
  
  sendData_button_Complete_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listData1');
  
//    let row = this.props.dataSheetRow || {
//    };
//    row = { ...row, 
//      textarea: this.state.textarea,
//      field: this.state.field,
//      image: this.state.image,
//     };
//     if (this.props.dataSheetId === dataSheet.id) {
//       this.props.appActions.updateInDataSheet('listData1', row);
//     } else {
//       this.props.appActions.addToDataSheet('listData1', row);
//     }
//   }
  
  
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
    const style_oriDiaryBB = {
        height: 'auto',
     };
    const style_oriDiaryBB_outer = {
        pointerEvents: 'none',
     };
    const style_addPicBB = {
        height: 'auto',
     };
    const style_addPicBB_outer = {
        pointerEvents: 'none',
     };
     const style_field = {
      display: 'block',
      //boxSizing: 'border-box'
   };
  const style_textarea = {
      display: 'block',
    
      //boxSizing: 'border-box'
   };
  const { TextArea } = Input;
   
  
    const style_complete = {
        height: 'auto',
     };
    const style_complete_outer = {
        pointerEvents: 'none',
     };
    const style_button_Complete = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_Complete_outer = {
        cursor: 'pointer',
     };
    const style_addPic = {
        display: 'block',
        color: '#feffff',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_addPic_outer = {
        cursor: 'pointer',
     };
    
    const style_text = {
      fontSize: 16.8,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_text_outer = {
      pointerEvents: 'none',
     };
  
    return (
      <Container fluid={true} className="AppScreen NewCreateBBScreen" style={baseStyle}>
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
          
          <div className='elOriDiaryBB' style={style_oriDiaryBB_outer}>
            <img style={style_oriDiaryBB} src={img_elOriDiaryBB} alt=""  />
          
          </div>
          
          <div className='elAddPicBB' style={style_addPicBB_outer}>
            <img style={style_addPicBB} src={img_elAddPicBB} alt=""  />
          
          </div>
          
          {/* <div className='baseFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.寫下內容吧} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div> */}
          
          <div className='baseFont elTextarea'>
      
            <TextArea  placeholder={this.props.locStrings.newcreatebb_textarea_581227} onChange={this.textAreaChanged_textarea} defaultValue={this.state.textarea } />
          
          </div>
          
          <div className='elComplete' style={style_complete_outer}>
            <img style={style_complete} src={img_elComplete} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_Complete' style={style_button_Complete_outer}>
            <div style={style_button_Complete}  onClick={this.onClick_elButton_Complete}  />
          
          </div>
          
          <div className='elText' style={style_text_outer}>
            <div style={style_text}>
              <div>{this.props.locStrings.newcreatebb_text_16559}</div>
            </div>
          
          </div>
          
          <div className='actionFont elAddPic' style={style_addPic_outer}>
            <button style={style_addPic}  onClick={this.showModal} >
              {this.props.locStrings.newcreatebb_button_239952}
       
            </button>
          
            
            <Modal
          title="請選擇照片"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width='1100px'
          
        >
         <UploadPic/>
        </Modal>
         
          </div>
        </div>
      </Container>
    )
  }
  

}
