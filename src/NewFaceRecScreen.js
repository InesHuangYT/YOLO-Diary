import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import img_elFaceRecognition from './images/NewFaceRecScreen_elFaceRecognition_860360.png';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';

// UI framework component imports
import Container from 'muicss/lib/react/container';
import store from './store';

export default class NewFaceRecScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo
  componentDidMount() {
    console.log(store.getValue())
    
  }
  onClick_elButton_PublishBubble = (ev) => {
    //this.sendData_button_PublishBubble_to_listData1(store.getValue());
    console.log(store.getValue())

    // store diaryId
  // store.setValue({
  //   diaryId: this.diaryId
  // })
  store.setValue({
    testId: 'test3'
  })
    // Go to screen 'NewBubbleDiary'
    this.props.appActions.goToScreen('newbubblediary', { transitionId: 'fadeIn' });
  
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
    const style_faceRecognition = {
        height: 'auto',
     };
    const style_faceRecognition_outer = {
        pointerEvents: 'none',
     };
    const style_publishBubble = {
        height: 'auto',
     };
    const style_publishBubble_outer = {
        pointerEvents: 'none',
     };
    const style_button_PublishBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_PublishBubble_outer = {
        cursor: 'pointer',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewFaceRecScreen" style={baseStyle}>
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
          
          <div className='elFaceRecognition' style={style_faceRecognition_outer}>
            <img style={style_faceRecognition} src={img_elFaceRecognition} alt=""  />
          
          </div>
          
          <div className='elPublishBubble' style={style_publishBubble_outer}>
            <img style={style_publishBubble} src={img_elPublishBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_PublishBubble' style={style_button_PublishBubble_outer}>
            <div style={style_button_PublishBubble}  onClick={this.onClick_elButton_PublishBubble}  />
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
