import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewHomeNotificationScreen_elBubbleDiaryBG_199962.jpg';
import NavBar from './NavBar';
import img_elN from './images/NewHomeNotificationScreen_elN_678640.png';
import ListNotification from './ListNotification';

// UI framework component imports
import Container from 'muicss/lib/react/container';
import test1 from './images/02.jpg';
import test2 from './images/03.jpg';
import test3 from './images/04.jpg';
import test4 from './images/05.jpg';
export default class NewHomeNotificationScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    
    const dataSheet_listData3 = this.props.dataSheets['listData3'];
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
        pointerEvents: 'none',
     };
    const style_n = {
        height: 'auto',
     };
    const style_n_outer = {
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData3').items);
    
    
    return (
      <Container fluid={true} className="AppScreen NewHomeNotificationScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          {/* <div className='elN' style={style_n_outer}>
            <img style={style_n} src={img_elN} alt=""  />
          
          </div>
          
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListNotification dataSheetId={'listData3'} dataSheetRow={row} field_FriendName={row.field_FriendName} field_notification={row.field_notification} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div> */}
          <div>
           <div className='homepagepic-left'>
          
          <img src={test3} alt=''/>
         
          </div>
           <div className='homepagepic-right'>
          <img src={test2} alt=''/>
      
          </div>
          <div className='homepagepic'>
          <img src={test1} alt=''/>
          </div>
          <div className='homepagepic-center'>
          <img src={test4} alt=''/>
          </div>
         </div>
        </div>
      </Container>
    )
  }
  

}
