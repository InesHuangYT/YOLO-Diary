import React, { Component } from 'react';
import DataSheetBase from './DataSheetBase.js';
<<<<<<< HEAD
import Axios from 'axios';
=======
import axios from 'axios';


>>>>>>> aabc84ff6ce4e5a22ec2a6a7a6e951b3a7ccf117

export default class DataSheet_listUserBubble extends DataSheetBase {

  // constructor(id, updateCb) {
  //   super(id, updateCb);
  //   this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    
    if (this.props == prevProps){
      console.log('props!!',this.props)
      console.log(prevProps)
    }else {

      axios.get(`/api/diary/${this.props.dataSheetRow.albumId}`).then((res) => {
        console.log('buble response',res)
      let item;
      item = {};
      this.addItem(item)
      item['diarvId'] = res.data.content[0].id;
      this.setState({diarvId:res.data.content[0].id})
      // item.key = key++;
       console.log('buble item', this.items)
       this.sendData_button_Next_to_listData1();
        
      })
  
     
     }
  
      
    }
    componentDidMount() {
     
      this.componentDidUpdate(this.props) 
     
    }
  
    
  constructor(props) {
    super(props);
   
    this.state = {
      diaryId:''
    };
  }

  sendData_button_Next_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listUserBubble');
  
    let row = this.props.dataSheetRow || {
    };
    row = { ...row, 
      diarvId: this.state.diaryId,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listUserBubble', row);
    } else {
      this.props.appActions.addToDataSheet('listUserBubble', row);
    }
  }

  makeDefaultItems() {
    
<<<<<<< HEAD
    Axios.get("/api/album/albums").then(res => {
      console.log(res)
      var elements = res.data.content.length;
      for(var i = 0; i < elements; i++){
    item = {};
    this.items.push(item);
    item['albumId'] = res.data.content[i].id;
    for(var j = 0; j < res.data.content[i].diaries.length; j++){
    item['diaryId'] = res.data.content[i].diaries[j].id;
    item.key = key++;
    }
    
      }
    })


=======
    let item;
    item = {};
    this.addItem(item);
    item['diarvId'] = 'test';

       
      //  var elements = res.data.content.length;
      //  let id = []
      //  for(var i = 0; i < elements; i++){
      //  id.push(res.data.content[i].id)
      //  this.setState({diaryId: res.data.content[i].id})
      // }
      //  this.setState({diaryId:id})
      //  console.log(this.state.diaryId)
        
      

     
    
    
  }

  render(){

    return(
      <div>
       {/* < NewReadBBScreen getAlbumId = {this.getAlbumId.bind(this)}/> */}
      </div>
      
    );
    
>>>>>>> aabc84ff6ce4e5a22ec2a6a7a6e951b3a7ccf117
  }
  

}
