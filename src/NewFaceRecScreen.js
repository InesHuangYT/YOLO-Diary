import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewCreateBBScreen_elBubbleDiaryBG_190334.jpg';
import img_elFaceRecognition from './images/NewFaceRecScreen_elFaceRecognition_860360.png';
import img_elPublishBubble from './images/NewFaceRecScreen_elPublishBubble_291432.png';
import img_elFaceRecTip from './images/NewFaceRecScreen_elFaceRecTip_309749.png';
import FaceList from './FaceList';
import DphotoList from './DphotoList';
// UI framework component imports
import Container from 'muicss/lib/react/container';
import store from './store';

export default class NewFaceRecScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo
  constructor(props) {
    super(props);
    
    this.state = {
      elFaceRecTip_visible: true,
    };
  }

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
    
    const dataSheet_dphotoListData = this.props.dataSheets['dphotoListData'];
    const dataSheet_faceListData = this.props.dataSheets['faceListData'];
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
    // const style_faceRecognition = {
    //     height: 'auto',
    //  };
    // const style_faceRecognition_outer = {
    //     pointerEvents: 'none',
    //  };
    const style_faceRecTip = {
      height: 'auto',
   };
  const style_faceRecTip_outer = {
      pointerEvents: 'none',
   };
  const elFaceRecTip = this.state.elFaceRecTip_visible ? (
    <div className='elFaceRecTip' style={style_faceRecTip_outer}>
      <img style={style_faceRecTip} src={img_elFaceRecTip} alt=""  />
    
    </div>
    
 ) : null;
const style_faceList = {
    height: 'auto',  // This element is in scroll flow
 };
// Source items and any special components used for list/grid element 'FaceList'.
let items_faceList = [];
let listComps_faceList = {};
items_faceList = items_faceList.concat(this.props.appActions.getDataSheet('faceListData').items);

const style_dphotoLst = {
    height: 'auto',  // This element is in scroll flow
 };
// Source items and any special components used for list/grid element 'DphotoLst'.
let items_dphotoLst = [];
let listComps_dphotoLst = {};
items_dphotoLst = items_dphotoLst.concat(this.props.appActions.getDataSheet('dphotoListData').items);

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
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG}>
          </div>
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          { elFaceRecTip }
          <div className='hasNestedComps elFaceList'>
            <div style={style_faceList}>
              {items_faceList.map((row, index) => {
                let itemClasses = `gridItem cols7_${index % 7}`;
                let itemComp = (row._componentId) ? listComps_faceList[row._componentId] : <FaceList dataSheetId={'faceListData'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div> 
          
          <div className='hasNestedComps elDphotoLst'>
            <div style={style_dphotoLst}>
              {items_dphotoLst.map((row, index) => {
                let itemClasses = `gridItem cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_dphotoLst[row._componentId] : <DphotoList dataSheetId={'dphotoListData'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
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
