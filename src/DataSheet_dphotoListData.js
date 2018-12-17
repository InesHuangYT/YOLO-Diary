import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';
import React, { Component } from 'react';


export default class DataSheet_dphotoListData extends DataSheetBase {

  constructor(props) {
    super(props)

    this.state = {
      photoData:'',
      key:'',
     
    }
  }

  componentDidMount = async()=>{

  
   await axios.get(`/api/photo/downloadDiaryPhoto/${this.props.diaryId}`).then(res =>{
    // console.log('getAllphoto', res)

     for(var i = 0; i < res.data.length; i++){

      this.setState({photoData:res.data[i].photodata})
      this.setState({key:res.data[i].id})
      this.sendData_button_Next_to_listData1();
      
    }

  }).catch(function(error){
    console.log('res fail')
  })

  // console.log('get photoListData',  this.props.appActions.getDataSheet('dphotoListData'))


 

  }

  componentWillUnmount(){

      
    console.log('comWillUnMount')
    this.Delete_dphotoListData()
    // console.log('check datasheet delete', this.props.appActions.getDataSheet('dphotoListData'))

  }


  Delete_dphotoListData = () => {
    const length = this.props.appActions.getDataSheet('dphotoListData').items.length
    for(var i=0; i<length; i++){
    this.props.appActions.removeFromDataSheet('dphotoListData', this.props.appActions.getDataSheet('dphotoListData').items[0])
    }
    // console.log('show sheetdata',  this.props.appActions.getDataSheet('dphotoListData'))

   
   }


  
  sendData_button_Next_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('dphotoListData');

    let row = this.props.dataSheetRow || {
    };
    row = {
      photoData: this.state.photoData,
      key: this.state.key,
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
