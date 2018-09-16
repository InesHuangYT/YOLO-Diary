import React, { Component } from 'react';
import './App.css';
import img_elPBG from './images/NewFriendListScreen_elPBG_664556.png';
import NavBar from './NavBar';
import img_elTitle_Flist from './images/NewFriendListScreen_elTitle_Flist_240874.png';
import ListFriend from './ListFriend';
import PMenu from './PMenu';
import img_elIconAddfriend from './images/NewFriendListScreen_elIconAddfriend_996429.png';
import img_elButton_addfriend from './images/NewFriendListScreen_elButton_addfriend_555592.png';
import img_elMo from './images/NewFriendListScreen_elMo_206402.png';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Container from 'muicss/lib/react/container';


export default class NewFriendListScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      field_FindFriend: '',
      elMo_visible: false,
    };
  }

  textInputChanged_field_FindFriend = (event) => {
    this.setState({field_FindFriend: event.target.value});
  }
  
  onClick_elButton_addfriend = (ev) => {
    this.setState({elMo_visible: true});
  
  }
  
  
  onClick_elMo = (ev) => {
    this.sendData_mo_to_listData2();
  
    this.setState({elMo_visible: false});
  
  }
  
  
  sendData_mo_to_listData2 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listData2');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      UserName: this.state.field_FindFriend,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listData2', row);
    } else {
      this.props.appActions.addToDataSheet('listData2', row);
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
    
    const dataSheet_listData2 = this.props.dataSheets['listData2'];
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#fcffff',
        pointerEvents: 'none',
     };
    const style_PBG = {
        backgroundImage: 'url('+img_elPBG+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        pointerEvents: 'none',
     };
    const style_title_Flist = {
        height: 'auto',
     };
    const style_title_Flist_outer = {
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listData2').items);
    
    const style_iconAddfriend = {
        height: 'auto',
     };
    const style_iconAddfriend_outer = {
        pointerEvents: 'none',
     };
    const style_field_FindFriend = {
        display: 'block',
     };
    const style_button_addfriend = {
        height: 'auto',
     };
    const style_button_addfriend_outer = {
        cursor: 'pointer',
     };
    const style_mo = {
        height: 'auto',
     };
    const style_mo_outer = {
        cursor: 'pointer',
     };
    const elMo = this.state.elMo_visible ? (
        <div className='elMo' style={style_mo_outer}>
          <img style={style_mo} src={img_elMo} alt="" onClick={this.onClick_elMo}  />
        
        </div>
        
     ) : null;
    
    return (
      <Container fluid={true} className="AppScreen NewFriendListScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elPBG' style={style_PBG} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elTitle_Flist' style={style_title_Flist_outer}>
            <img style={style_title_Flist} src={img_elTitle_Flist} alt=""  />
          
          </div>
          
          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListFriend dataSheetId={'listData2'} dataSheetRow={row} UserName={row.UserName} Button_message={row.Button_message} Button_delete={row.Button_delete} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
          
          <div className='hasNestedComps elComp'>
            <div>
              <PMenu appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='elIconAddfriend' style={style_iconAddfriend_outer}>
            <img style={style_iconAddfriend} src={img_elIconAddfriend} alt=""  />
          
          </div>
          
          <div className='baseFont elField_FindFriend'>
            <Input style={style_field_FindFriend} type="text" hint={this.props.locStrings.newfriendlist_field_708903} onChange={this.textInputChanged_field_FindFriend} defaultValue={this.state.field_FindFriend}  />
          
          </div>
          
          <div className='elButton_addfriend' style={style_button_addfriend_outer}>
            <img style={style_button_addfriend} src={img_elButton_addfriend} alt="" onClick={this.onClick_elButton_addfriend}  />
          
          </div>
          
          { elMo }
        </div>
      </Container>
    )
  }
  

}
