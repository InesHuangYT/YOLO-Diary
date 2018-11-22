import DataSheetBase from './DataSheetBase.js';
<<<<<<< HEAD
import Axios from 'axios';
=======
import React, { Component } from 'react';
import axios from 'axios';

>>>>>>> e0d8bf4fbc2feb2ff77292761c4e165f6f18718e

export default class DataSheet_listDataPic extends DataSheetBase {

  constructor(props){
    super(props)
  
    this.state = {
      src:''
    }
  }


  componentDidMount(){

    let item
  
    console.log('picture Check!',this.props)
    axios.get(`/api/photo/downloadDiaryPhoto/${this.props.dataSheetRow.diaryId}`).then(res => {
      console.log('load picture->', res)
      for(var i = 0; i < res.data.length; i++){
         item = {}
         this.addItem(item)
         item['photo'] = res.data[i].photodata
         this.setState({src: res.data[i].photodata})
        item.key = Math.random()*(1000)
  
        this.sendData_button_Next_to_listData1();
     
      }
     
  
    })
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





  makeDefaultItems() {
<<<<<<< HEAD
    let item;
    
    Axios.get("/api/photo/downloadDiaryPhoto/{diaryId}").then(res => {
      
      console.log('diaries ->',res)
      
      var elements = res.data.content.length
      for(var i = 0; i < elements ; i++){
        
      item['photoId'] = res.data.content[i].photoId;
  
      }
      console.log('album datasheet item',this.items)
    })
=======
    // // eslint-disable-next-line no-unused-vars
    // let key = 1;
    // // eslint-disable-next-line no-unused-vars
    // let item;
    
    // item = {};
    // this.items.push(item);
    // item['03'] = "";
    // item.key = key++;
    
    // item = {};
    // this.items.push(item);
    // item['03'] = "";
    // item.key = key++;
    
    // item = {};
    // this.items.push(item);
    // item['03'] = "";
    // item.key = key++;
  }

  render() {

    return (
      <div>
        {/* <ListItem2 diaryId = {this.props.appActions.getDataSheet('listUserBubble')}/> */}
      </div>

    );
>>>>>>> e0d8bf4fbc2feb2ff77292761c4e165f6f18718e

  }

}
