import React, { Component } from 'react';
import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';

export default class DataSheet_listDataBBAlbum extends DataSheetBase {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }


  componentDidMount() {
    console.log('Album comDidMount>', this.props)
   
     let item;
     axios.get(`/api/photo/downloadAlbumPhoto/${this.props.dataSheetRow.albumId}`).then((res) => {
     
       console.log('get all photo>', res)
      for(var i = 0; i < res.data.length; i++){
        item = {}
        item['PhotoData'] = res.data[i].photodata
    
        item.key = res.data[i].id
        
        this.sendData_to_listDataBBAlbum(item.PhotoData, item.key)
      }

      
     })
    // console.log('check datasheet DIDM', this.props.appActions.getDataSheet('listUserBubble'))

  }
    componentWillUnmount(){

      
      console.log('comWillUnMount')
      this.Delete_listDataBBAlbum()
      console.log('check datasheet delete', this.props.appActions.getDataSheet('listDataBBAlbum'))

    }


   Delete_listDataBBAlbum = () => {
    const length = this.props.appActions.getDataSheet('listDataBBAlbum').items.length
    for(var i=0; i<length; i++){
    // console.log('print i:', i)
    this.props.appActions.removeFromDataSheet('listDataBBAlbum', this.props.appActions.getDataSheet('listDataBBAlbum').items[0])
    }
    // console.log('show sheetdata',  this.props.appActions.getDataSheet('listUserBubble'))

   
   }




  sendData_to_listDataBBAlbum = (PhotoData, key) => {
    const dataSheet = this.props.appActions.getDataSheet('listDataBBAlbum');

    let row = this.props.dataSheetRow || {
    };
    row = {
      
      PhotoData: PhotoData, 
      key: key

    };
    // console.log(this.props.dataSheetId)
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listDataBBAlbum', row);
    } else {
      this.props.appActions.addToDataSheet('listDataBBAlbum', row);
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
