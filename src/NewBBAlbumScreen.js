import React, { Component } from 'react';
import './App.css';
import img_elBubbleDiaryBG from './images/NewFaceRecScreen_elBubbleDiaryBG_53437.jpg';
import NavBar from './NavBar';
import ListBBAlbum from './ListBBAlbum';

// UI framework component imports
import Container from 'muicss/lib/react/container';


export default class NewBBAlbumScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, fieldtitle, textcontent

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
    
    const dataSheet_listDataBBAlbum = this.props.dataSheets['listDataBBAlbum'];
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
    const style_listPhotos = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'listPhotos'.
    let items_listPhotos = [];
    let listComps_listPhotos = {};
    items_listPhotos = items_listPhotos.concat(this.props.appActions.getDataSheet('listDataBBAlbum').items);
    
    
    return (
      <Container fluid={true} className="AppScreen NewBBAlbumScreen" style={baseStyle}>
        <div className="background">
          <div className='elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
          <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavBar2'>
            <div>
              <NavBar ref={(el)=> this._elNavBar2 = el} {...this.props} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='hasNestedComps elListPhotos'>
            <div style={style_listPhotos}>
              {items_listPhotos.map((row, index) => {
                let itemClasses = `gridItem cols4_${index % 4}`;
                let itemComp = (row._componentId) ? listComps_listPhotos[row._componentId] : <ListBBAlbum dataSheetId={'listDataBBAlbum'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div>
          
        </div>
      </Container>
    )
  }
  

}
