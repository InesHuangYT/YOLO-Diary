import React, { Component } from 'react';
import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';




export default class DataSheet_listUserBubble extends DataSheetBase {


  constructor(props) {
    super(props);

    this.state = {
    };
  }



 componentDidMount() {
    console.log('comDidMount')
   
     let item;
     axios.get(`/api/album/allUsers/${this.props.dataSheetRow.albumId}`).then((res) => {
     
       console.log('get user', res)
      for(var i = 0; i < res.data.length; i++){
        item = {}
        item['userPhotoData'] = res.data[i].selfieData
        item['diaryId'] = res.data[i].diaryId 
        item['author'] = res.data[i].username
        item.key = Math.random()*(1000)
        
        this.sendData_button_Next_to_listData1(item.diaryId, item.userPhotoData, item.author, item.key)
      }

      
    })
    // console.log('check datasheet DIDM', this.props.appActions.getDataSheet('listUserBubble'))

  }
    componentWillUnmount(){

      
      console.log('comWillUnMount')
      this.Delete_listData()
      // console.log('check datasheet delete', this.props.appActions.getDataSheet('listUserBubble'))

    }


   Delete_listData = () => {
    const length = this.props.appActions.getDataSheet('listUserBubble').items.length
    for(var i=0; i<length; i++){
    // console.log('print i:', i)
    this.props.appActions.removeFromDataSheet('listUserBubble', this.props.appActions.getDataSheet('listUserBubble').items[0])
    }
    // console.log('show sheetdata',  this.props.appActions.getDataSheet('listUserBubble'))

   
   }




  sendData_button_Next_to_listData1 = (diaryId, userPhotoData, author,  key) => {
    const dataSheet = this.props.appActions.getDataSheet('listUserBubble');

    let row = this.props.dataSheetRow || {
    };
    row = {
      ...row,
      diaryId: diaryId,
      userPhotoData: userPhotoData,
      author: author,
      key: key

    };
    // console.log(this.props.dataSheetId)
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listData1', row);
    } else {
      this.props.appActions.addToDataSheet('listUserBubble', row);
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
