import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import img_elBubble2 from './images/ListItem2_elUserBubble_312326.png';
import img_elDGCreateName from './images/NewBBNameCreateScreen_elDGCreateName_1032124.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import axios from 'axios';


export default class NewBBNameCreateScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      albumId:''
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elButton_Next = (ev) => {
    this.sendData_button_Next_to_listData1();
    const album = {
      name : this.state.field,
    } 
    axios.post('/api/album',album)
    .then(res => {
      console.log(res);
      console.log(res.data.id);
      this.albumId = res.data.id;
      console.log(this.albumId);
    }).catch(function(error){
      alert("Wrong albumName");
    });
    // Go to screen 'NewTutorCreateBB'
    this.props.appActions.goToScreen('newtutorcreatebb', { transitionId: 'fadeIn' });
  }
  
  
  sendData_button_Next_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listData1');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      field: this.state.field,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listData1', row);
    } else {
      this.props.appActions.addToDataSheet('listData1', row);
    }
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
    const style_bubble2 = {
        height: 'auto',
     };
    const style_bubble2_outer = {
        pointerEvents: 'none',
     };
    const style_DGCreateName = {
        backgroundImage: 'url('+img_elDGCreateName+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_DGCreateName_outer = {
        pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
     };
    const style_button_Next = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_Next_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewBBNameCreateScreen" style={baseStyle}>
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
          
          <div className='elBubble2' style={style_bubble2_outer}>
            <img style={style_bubble2} src={img_elBubble2} alt=""  />
          
          </div>
          
          <div className='elDGCreateName' style={style_DGCreateName_outer}>
            <div style={style_DGCreateName} />
          
          </div>
          
          <div className='headlineFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.newbbnamecreate_field_397049} onChange={this.textInputChanged_field} defaultValue={this.state.field}  />
          
          </div>
          
          <div className='actionFont elButton_Next' style={style_button_Next_outer}>
            <Button style={style_button_Next}  color="accent" onClick={this.onClick_elButton_Next} >
              {this.props.locStrings.newbbnamecreate_button_545796}
            </Button>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
