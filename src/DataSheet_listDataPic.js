import DataSheetBase from './DataSheetBase.js';
import React, { Component } from 'react';
import axios from 'axios';


export default class DataSheet_listDataPic extends DataSheetBase {

  constructor(props){
    super(props)
  
    this.state = {
      src:'',
     
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

  }

}
