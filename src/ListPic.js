import React, { Component } from 'react';
import './App.css';
import img_el03 from './images/03.jpg';
import axios from 'axios';

export default class ListPic extends Component {

  // This component doesn't use any properties
  constructor(props) {
    super(props);
    
    this.state = {
      diaryId : this.props.diaryId,
      photoId : this.props.photoId,
      src:'',
      // config : {
      //   headers:{
      //   'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
      //   }
      // }
    }
  }

  componentDidMount() {
    
    console.log('listPic check props ->',this.props)
    let _this = this;
    // this.config = {
    //   headers:{
    //   'Authorization':'Bearer '+ sessionStorage.getItem('accesstoken')
    //   }
      
    // };
      axios.get(this.props.dataSheetRow.photoId).then(res=>{
        console.log(this.props.dataSheetRow.photoId)
      console.log('photoId', res)
      _this.setState({src:res.data.photodata})
      // _this.setState({src:Buffer.from(res.data, 'binary').toString('base64')})
      //console.log('buffer=>', _this.state.src)
    })
    
    
    
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};

    const style_03 = {
        height: 'auto',
     };
    const style_03_outer = {
        pointerEvents: 'none',
     };
    
    return (
      <div className="ListPic" style={baseStyle}>
        <div className="layoutFlow">
          {/* <div className='el03' style={style_03_outer}>
            <img style={style_03} src={img_el03} alt=""  />
          
          </div> */}
          
        </div>
      </div>
    )
  }
  

}
