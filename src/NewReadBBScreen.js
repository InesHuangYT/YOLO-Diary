import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewUserDiaryScreen_elBubbleDiaryBG_737342.jpg';
import img_elMainBubble from './images/ListItem2_elUserBubble_312326.png';
import ListItem2 from './ListItem2';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import DataSheet_listUserBubble from './DataSheet_listUserBubble.js';
import axios from 'axios';

export default class NewReadBBScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, dataSheetRow

  componentDidMount() {
    
    console.log('item1 check props ->',this.props)
    let _this = this;
    // this.config = {
    //   headers:{
    //   'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
    //   }
      
    // };
    console.log('photoHERE')
      axios.get(this.props.dataSheetRow.photoCover, this.state.config).then(res=>{
        console.log(this.props.dataSheetRow.photoCover)
      console.log('photo', res)
      _this.setState({src:res.data.photodata})
      // _this.setState({src:Buffer.from(res.data, 'binary').toString('base64')})
      //console.log('buffer=>', _this.state.src)
    })
  }

  constructor(props) {
    super(props);
    
    this.state = {
      // field: this.props.dataSheetRow.field,
      albumId: this.props.dataSheetRow.albumId,
      albumName: this.props.albumName,
      src:'',
      config : {
        headers:{
        'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
        }
      }
      


    };
  }
  deleteTag = (e) => {
    axios.delete(`/api/album/deleteAlbumUser/${this.props.dataSheetRow.albumId}`).then(res =>{
      console.log('Delete !! finish !!')
      this.props.appActions.goBack();

    })
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
  }
  
  onClick_elButton_back = (ev) => {
   
    this.props.appActions.goBack();
  
  }

  onClick_el02 = (ev) => {
    // Go to screen 'NewBBAlbum'
    this.props.appActions.goToScreen('newbbalbum', { ...this.props, transitionId: 'fadeIn' });
  
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
    
    const style_button_delete = {
      display: 'block',
      textAlign: 'center',
    };
    const style_button_delete_outer = {
      cursor: 'pointer',
    };
    
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
    // const style_bubbleDiaryBG_outer = {
    //     pointerEvents: 'none',
    //  };
    const style_mainBubble = {
        height: 'auto',
     };
    const style_mainBubble_outer = {
        pointerEvents: 'none',
     };
    // const style_card_outer = {
    //     backgroundColor: 'white',
    //     boxShadow: '0.0px 1.8px 14px rgba(0, 0, 0, 0.1600)',
    //     pointerEvents: 'none',
    //  };
    
    const style_02_outer = {        
      pointerEvents: 'none',
     };
    const style_field = {
        display: 'block',
     };
    const value_field = this.props.dataSheetRow ? this.props.dataSheetRow.albumName:'';
    
    const style_button_back = {
        display: 'block',
        textAlign: 'center',
     };
    const style_button_back_outer = {
        cursor: 'pointer',
     };
    const style_list = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('listUserBubble').items);
    
    
    return (
      <Container fluid={true} className="AppScreen NewReadBBScreen" style={baseStyle}>
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
          
          {/* <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <div style={style_bubbleDiaryBG} />
          
          </div> */}
          
          <div className='elMainBubble' >
            <img style={style_mainBubble} src={img_elMainBubble} alt="" onClick={this.onClick_el02} />
          
          </div>
          
           {/* <div className='cardBg elCard' style={style_card_outer}>
            <div />
          
          </div> */}

          <div className='el02' >
            {/* <img style={style_02} src={img_el02} alt=""  /> */}
            <img src={"data:image/jpeg;base64, " + this.state.src} alt='' onClick={this.onClick_el02} style={{width:'250px',height:'198px'}} />
            
          </div>
          
          <div className='baseFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.newreadbb_field_120491} onChange={this.textInputChanged_field} defaultValue={value_field !== undefined ? value_field : ''}  />
          
          </div>
          
          <div className='actionFont elButton_back' style={style_button_back_outer}>
            <Button style={style_button_back}  color="accent" onClick={this.onClick_elButton_back} >
              {this.props.locStrings.newreadbb_button_703594}
            </Button>
          
          </div>
          
          <div className='hasNestedComps elList' >
          
            <div style={style_list}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols5_${index % 5}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListItem2 dataSheetId={'listUserBubble'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
               

                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
            </div>
          
          </div>
          <div>
                  <DataSheet_listUserBubble {...this.props}/>>
                  </div>
          <div className='actionFont elButton_delete' style={style_button_delete_outer}>
            <Button style={style_button_delete} color="accent" onClick={this.deleteTag}>
              {this.props.locStrings.newbubblediary_button_93732}
            </Button>

          </div>
        </div>
      </Container>
    )
  }

}