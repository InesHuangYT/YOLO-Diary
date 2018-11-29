import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';
import React, { Component } from 'react';


export default class DataSheet_dphotoListData extends DataSheetBase {

  constructor(props) {
    super(props)

    this.state = {
      photoData:'',
     
    }
  }

  componentDidMount(){

  //   let item; 

  //   axios.get(`/api/photo//downloadDiaryPhoto/${this.props.diaryId}`).then(res =>{
  //   console.log('getAllphoto', res)
  //   for(var i; i<res.data.lengrh; i++){
  //     item = {}
  //     this.addItem(item)
  //     item['photoData'] = res.data[i].photodata
  //     item.key = Math.random()*(1000)
  //     this.setState({photoData:res.data[i].photodata})

  //     this.sendData_button_Next_to_listData1();
  //   }

  // }).catch(function(error){
  //   console.log('res fail')
  // })

  // console.log('get photoListData',  this.props.appActions.getDataSheet('dphotoListData'))


 

  }



  
  sendData_button_Next_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('dphotoListData');

    let row = this.props.dataSheetRow || {
    };
    row = {
      ...row,
      photoData: this.state.photoData,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('dphotoListData', row);
    } else {
      this.props.appActions.addToDataSheet('dphotoListData', row);
    }
  }
  

  makeDefaultItems() {
  }

  render() {

    return (
      <div>
        {/* <ListItem2 diaryId = {this.props.appActions.getDataSheet('listUserBubble')}/> */}
      </div>

    );

  }

}
