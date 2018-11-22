import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import img_elBubbleDiaryBG from './images/NewHomeNotificationScreen_elBubbleDiaryBG_199962.jpg';
import img_elOriDiaryBB from './images/NewCreateBBScreen_elOriDiaryBB_1024639.png';
import img_elAddPicBB from './images/NewCreateBBScreen_elAddPicBB_474204.png';
import ListPic from './ListPic';
import DataSheet_listDataPic from './DataSheet_listDataPic'

// UI framework component imports
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import img_el03 from './images/03.jpg';
import axios from 'axios';
import store from './store'
import DataSheet_listDataPic from './DataSheet_listDataPic';
export default class NewUserDiaryScreen extends Component {
//`/api/album?albumId=${store.getValue().albumId}`
  // Properties used by this component:
  // appActions, deviceInfo, field, textarea
  // componentDidMount() {
  //   console.log(store.getValue())
    
  // }
  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
      textarea: '',
 
    };
  }

  componentWillMount(){
    //'/api/album/'
    console.log('showdiary', this.props)
    let _this = this;
    // for(var i =0; i < this.props.dataSheetRow.diaryId.length; i++){
      axios.get('/api/diary/diaryId/'+this.props.dataSheetRow.diaryId).then(res => {
      
      console.log('read res->',res);
      
      _this.setState({textarea :res.data.text});
    })
  // }
  _this.setState({field :this.props.dataSheetRow.albumName});
  
    

    // axios.get('/api/diary/diaryId/'+store.getValue().diaryId).then(res => {
    //   //`/api/album?albumId=${store.getValue().albumId}`
    //   console.log(store.getValue())
    //   console.log(res);
    //   console.log(res.data.text);
    //   //console.log(res.data.field_UserName);
    //   _this.setState({textarea :res.data.text});
    // });
  }

  textInputChanged_field = (event) => {
    //this.setState({field: event.target.value});
  }
  
  textAreaChanged_textarea = (event) => {
    //this.setState({textarea: event.target.value});
  }
  
  onClick_elButton_OK = (ev) => {
    // Go back in screen navigation history
    this.props.appActions.goBack();
  
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
    // const style_bubbleDiaryBG_outer = {
    //     pointerEvents: 'none',
    //  };
    const style_oriDiaryBB = {
        height: 'auto',
     };
    const style_oriDiaryBB_outer = {
        pointerEvents: 'none',
     };
    // const style_addPicBB = {
    //     height: 'auto',
    //  };
    // const style_addPicBB_outer = {
    //     pointerEvents: 'none',
    //  };

    //  const style_03 = {
    //   height: 'auto',
    //  };
    // const style_03_outer = {
    //   pointerEvents: 'none',
    //  };
     const style_field = {
      display: 'block',
     // backgroundColor: 'white',
     // paddingLeft: '1rem',
     // boxSizing: 'border-box', // ensures padding won't expand element's outer size
   };
  const value_field = this.props.field;
  const dataSheet_listDataPic = this.props.dataSheets['listDataPic'];
  const style_textarea = {
      display: 'block',
    //  backgroundColor: 'white',
    //  paddingLeft: '1rem',
    //  boxSizing: 'border-box', // ensures padding won't expand element's outer size
   };
  const { TextArea } = Input;
  const value_textarea = this.props.textarea;
    
  const style_button_OK = {
        display: 'block',
        textAlign: 'center',
     };
  const style_button_OK_outer = {
        cursor: 'pointer',
     };
  const style_list = {
      height: 'auto',  // This element is in scroll flow
   };
  // Source items and any special components used for list/grid element 'list'.
  let items_list = [];
  let listComps_list = {};
  items_list = items_list.concat(this.props.appActions.getDataSheet('listDataPic').items);
  
    return (
      <Container fluid={true} className="AppScreen NewUserDiaryScreen" style={baseStyle}>
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
          
          {/* <div className='elBubbleDiaryBG' style={style_bubbleDiaryBG_outer}>
            <div style={style_bubbleDiaryBG} />
          
          </div> */}
          
          <div className='elOriDiaryBB' style={style_oriDiaryBB_outer}>
            <img style={style_oriDiaryBB} src={img_elOriDiaryBB} alt=""  />
          
          </div>
          
          {/* <div className='elAddPicBB' style={style_addPicBB_outer}>
            <img style={style_addPicBB} src={img_elAddPicBB} alt=""  />
          
          </div> */}
          {/* <div className='el03' >
            <img style={style_03} src={img_el03} alt=""  />
          </div> */}
          <div className='baseFont elField'>
            {/* <Input style={style_field} type="text" placeholder={this.props.locStrings.newcreatebb2_field_448413} onChange={this.textInputChanged_field} defaultValue={value_field !== undefined ? value_field : ''}  /> */}
            <Input style={style_field} type="text" placeholder={this.props.locStrings.newcreatebb2_field_448413} onChange={this.textInputChanged_field} value =  {this.state.field} />

          
          </div>
          
          <div className='baseFont elTextarea'>
            <TextArea  placeholder={this.props.locStrings.newcreatebb2_textarea_331665} onChange={this.textAreaChanged_textarea} value =  {this.state.textarea}  />
          
          </div>
          
          <div className='actionFont elButton_OK' style={style_button_OK_outer}>
            <Button style={style_button_OK}  color="accent" onClick={this.onClick_elButton_OK} >
              {this.props.locStrings.newuserdiary_button_724281}
            </Button>
          
          </div>

          <div className='hasNestedComps elList'>
            <ul style={style_list}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ListPic dataSheetId={'listDataPic'} dataSheetRow={row} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings}  />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
            </ul>
          
          </div>
<<<<<<< HEAD
          <div className='inherit'>
=======
          <div className='Picture'>
>>>>>>> e0d8bf4fbc2feb2ff77292761c4e165f6f18718e
                  <DataSheet_listDataPic {...this.props}/>>
                  </div>
        </div>
      </Container>
    )
  }
  

}
