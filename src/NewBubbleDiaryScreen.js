import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import NavBar from './NavBar';
import Addbubble from './Addbubble';
import ListItem1 from './ListItem1';
import Axios from 'axios';


// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import store from './store';

export default class NewBubbleDiaryScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, fieldtitle, textcontent

  componentDidMount() {
    console.log(store.getValue())
    // Axios.get("/api/album/albums").then(res =>{
    //   console.log("response",res);
    //   console.log("response data",res.data);
    //   console.log("data total", res.data.content.length)
    //   console.log("data", res.data.content[1].name)
    // })
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
        pointerEvents: 'none',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    listComps_list['_head'] = <Addbubble appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;  // Head item for this list
    items_list.push({key: '_head', _componentId: '_head'});  // A data item to indicate the head item
    
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
    
    return (
      <Container fluid={true} className="AppScreen NewBubbleDiaryScreen" style={baseStyle}>
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
          
          <div className='hasNestedComps elList'>
            <div style={style_list}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem1 dataSheetId={'listData1'} dataSheetRow={row} field={row.field} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
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
      </Container>
    )
  }
  

}
