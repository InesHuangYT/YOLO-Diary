import React, { Component } from 'react';
import './App.css';
import DataSheetBase from './DataSheetBase.js';
import img_el03 from './images/03.jpg';
import axios from 'axios';

export default class ListPic extends DataSheetBase {

 

constructor(props){
  super(props)

  this.state = {
    src:''
    
    
  }
}

componentDidMount() {

   let _this = this
  

   console.log('picture Check---------->',this.props)
       _this.setState({src: this.props.dataSheetRow.photo})

  


   

   }


sendData_button_Next_to_listData1 = () => {
  const dataSheet = this.props.appActions.getDataSheet('listDataPic');

  let row = this.props.dataSheetRow || {
  };
  row = {
    ...row,
    photo: this.state.src,
  };
  if (this.props.dataSheetId === dataSheet.id) {
    this.props.appActions.updateInDataSheet('listDataPic', row);
  } else {
    this.props.appActions.addToDataSheet('listDataPic', row);
  }


  
    
    
    
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
          <div className='el03' style={style_03_outer}>
          
            <img style={style_03} src={"data:image/jpeg;base64, " + this.state.src} alt=""  key = {this.props.dataSheetRow.key}/>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
