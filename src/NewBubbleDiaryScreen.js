import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewBubbleDiaryScreen_elBubbleDiaryBG_706739.jpg';
import img_elAddBubble from './images/NewBubbleDiaryScreen_elAddBubble_49436.png';
import ListItem1 from './ListItem1';

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';


export default class NewBubbleDiaryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, fieldtitle, textcontent

  onClick_elButton_AddBubble = (ev) => {
    // Go to screen 'NewTutorCreateBB'
    this.props.appActions.goToScreen('newtutorcreatebb', { transitionId: 'fadeIn' });
  
  }
  //
  
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
    
    const dataSheet_listData1 = this.props.dataSheets['listData1'];
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
    const style_addBubble = {
        height: 'auto',
     };
    const style_addBubble_outer = {
        pointerEvents: 'none',
     };
    const style_button_AddBubble = {
        display: 'block',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
     };
    const style_button_AddBubble_outer = {
        cursor: 'pointer',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData1').items);
    
    const style_button_delete = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_delete_outer = {
        pointerEvents: 'none',
     };
    const style_button_update = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_update_outer = {
        pointerEvents: 'none',
     };
    const style_card_ToolBar = {
        width: '100%',
        height: '100%',
     };
    const style_card_ToolBar_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 5.3px 37px rgba(0, 0, 0, 0.4500)',
        pointerEvents: 'none',
     };
    const style_button_BBDiary = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_button_profile = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_subtitle = {
        fontSize: 18.4,
        color: 'rgba(0, 0, 0, 0.5000)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    const style_button_HomePage = {
        display: 'block',
        fontSize: 21.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#00bdc1',
        textAlign: 'left',
        backgroundColor: 'transparent',
        textTransform: 'uppercase',
        pointerEvents: 'none',
     };
    const style_title_yolo = {
        fontSize: 28.5,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'left',
        pointerEvents: 'none',
     };
    
    return (
      <Container fluid={true} className="AppScreen NewBubbleDiaryScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <div style={style_bubbleDiaryBG} />
          
          </div>
          
          <div className='elAddBubble' style={style_addBubble_outer}>
            <img style={style_addBubble} src={img_elAddBubble} alt=""  />
          
          </div>
          
          <div className='actionFont elButton_AddBubble' style={style_button_AddBubble_outer}>
            <div style={style_button_AddBubble}  onClick={this.onClick_elButton_AddBubble}  />
          
          </div>
          
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem1 dataSheetId={'listData1'} dataSheetRow={row} field={row.field} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
          <div className='actionFont elButton_delete' style={style_button_delete_outer}>
            <Button style={style_button_delete}  color="accent" >
              {this.props.locStrings.newbubblediary_button_93732}
            </Button>
          
          </div>
          
          <div className='actionFont elButton_update' style={style_button_update_outer}>
            <Button style={style_button_update}  color="accent" >
              {this.props.locStrings.newbubblediary_button_547911}
            </Button>
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='cardBg elCard_ToolBar' style={style_card_ToolBar_outer}>
              <div style={style_card_ToolBar} />
            
            </div>
            
            <button className='elButton_BBDiary' style={style_button_BBDiary}  >
              {this.props.locStrings.bubblediary2_buttoncopy2_702220}
            </button>
            <button className='elButton_profile' style={style_button_profile}  >
              {this.props.locStrings.bubblediary2_buttoncopy3_63262}
            </button>
            <div className='font-arialRoundedMTBold  elSubtitle' style={style_subtitle}>
              <div>{this.props.locStrings.bubblediary2_textcopy_998803}</div>
            </div>
            <button className='elButton_HomePage' style={style_button_HomePage}  >
              {this.props.locStrings.bubblediary2_button_260271}
            </button>
            <div className='font-arialRoundedMTBold  elTitle_yolo' style={style_title_yolo}>
              <div>{this.props.locStrings.bubblediary2_text_609477}</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  

}
