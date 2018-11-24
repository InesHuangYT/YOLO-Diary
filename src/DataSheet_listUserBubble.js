import React, { Component } from 'react';
import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';




export default class DataSheet_listUserBubble extends DataSheetBase {


  constructor(props) {
    super(props);

    this.state = {
      diaryId: '',
      item: {},
      
    };
  }



 componentDidMount() {
    console.log('comDidMount')
    console.log('check props->', this.props)
    // let item;
    
    axios.get(`/api/diary/${this.props.dataSheetRow.albumId}`).then((res) => {
      console.log('buble response ->', res)
      if(this.props.dataSheetRow.albumId)
        for (var i = 0; i < res.data.content.length; i++) {
          // item = {};
          // this.addItem(item)
          this.state.item['diaryId'] = res.data.content[i].id;
          this.setState({diaryId: res.data.content[i].id })
          
          this.state.item.key = Math.random()*(1000)
          
          this.sendData_button_Next_to_listData1();

        }

       
       
       
    })
           
    }

    componentWillUnmount(){
      console.log('comWillUnMount')
      
      this.Delete_listData()

    }


   Delete_listData = () => {
    const length = this.props.appActions.getDataSheet('listUserBubble').items.length
    for(var i=0; i<length; i++){
    this.props.appActions.removeFromDataSheet('listUserBubble', this.props.appActions.getDataSheet('listUserBubble').items[i])
    }
    console.log('show sheetdata',  this.props.appActions.getDataSheet('listUserBubble'))

   
   }




  sendData_button_Next_to_listData1 = () => {
    const dataSheet = this.props.appActions.getDataSheet('listUserBubble');

    let row = this.props.dataSheetRow || {
    };
    row = {
      ...row,
      diaryId: this.state.diaryId,
    };
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
