import React, { Component } from 'react';
import './App.css';
import img_elBubble2 from './images/NewReadBBScreen_elMainBubble_223100.png';
import 賴桑 from './images/賴桑.jpg';

// UI framework component imports
import Input from 'muicss/lib/react/input';
import store from './store';
import axios from 'axios';
import setAuthorizationToken from './util/APIUtils';

export default class ListItem1 extends Component {

  // Properties used by this component:
  // field

  constructor(props) {
    super(props);
    
    this.state = {
      albumName: this.props.albumName,
      albumId : this.props.albumId,
      albumCreatedAt: this.props.albumCreatedAt,
      src:'',
      config : {
        headers:{
        'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
        }
      }
    }
  }

  componentDidMount() {
    
    console.log('item1 check props ->',this.props)
    let _this = this;
    // this.config = {
    //   headers:{
    //   'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
    //   }
      
    // };
      axios.get(this.props.dataSheetRow.photoCover, this.state.config).then(res=>{
      
      console.log('photo', res)
      console.log('prop',this.props.dataSheetRow.photoCover)
      _this.setState({src:res.data.photodata})
     


      // _this.setState({src:Buffer.from(res.data, 'binary').toString('base64')})
      //console.log('buffer=>', _this.state.src)
    })

    
    
    
  }

  onClick_elBubble2 = (ev) => {
    // Go to screen 'NewReadBB'
    console.log('click item1', this.props)
    this.props.appActions.goToScreen('newreadbb', { ...this.props, transitionId: 'fadeIn' });
    
  
  }
  
  
  textInputChanged_albumName = (event) => {
    this.setState({albumId: this.state.albumId});
  }

  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_bubble2 = {
        height: 'auto',
     };
    const style_bubble2_outer = {
        cursor: 'pointer',
     };
    const style_field = {
        display: 'block',
     };
     const value_field = this.props.dataSheetRow.albumName;
    
    const style_card_outer = {
      //backgroundColor: 'white',
      //boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
      pointerEvents: 'none',
      
   };
   
    return (
      <div className="ListItem1" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elBubble2' style={style_bubble2_outer}>
            <img style={style_bubble2} src={img_elBubble2} alt="" onClick={this.onClick_elBubble2} />

          </div>

          {/* <div className='baseFont elField'>
            <Input style={style_field} type="text" hint={this.props.locStrings.list2_field_578331} onChange={this.textInputChanged_albumName} defaultValue={value_field !== undefined ? value_field : ''} />

          </div> */}
          <div className='cardBg elCard'  >
          <div className="flip-box">
            <div className="flip-box-inner" onClick={this.onClick_elBubble2}>
             
                
                <div className="flip-box-front">
                  <img src={"data:image/jpeg;base64, " + this.state.src} alt=''  style={{width:'190px',height:'150px'}} />
                </div>
              
              <div className="flip-box-back">
              
              {/* <h1>Taipei</h1> */}
               
                <div className='baseFont elField'>
                 <Input  type="text" hint={this.props.locStrings.list2_field_578331} onChange={this.textInputChanged_albumName} defaultValue={value_field !== undefined ? value_field : ''} />

                </div>
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
