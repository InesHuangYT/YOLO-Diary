import React, { Component } from 'react';
import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';




export default class DataSheet_listUserBubble extends DataSheetBase {


  constructor(props) {
    super(props);

    this.state = {
      diaryId: '',
      
    };
  }
  // constructor(id, updateCb) {
  //   super(id, updateCb);
  //   this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  // }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // if (this.props == prevProps){
    //   console.log('props!!',this.props)
    //   console.log(prevProps)
    // }else {

    //  }


  }
  componentDidMount() {
    console.log('check props->', this.props)
    let item;
    
    axios.get(`/api/diary/${this.props.dataSheetRow.albumId}`).then((res) => {
      console.log('buble response ->', res)
        for (var i = 0; i < res.data.content.length; i++) {
          item = {};
          this.addItem(item)
          item['diaryId'] = res.data.content[i].id;
          this.setState({diaryId: res.data.content[i].id })
          
          item.key = Math.random()*(1000)
          
          this.sendData_button_Next_to_listData1();

        }
      
        console.log('buble item', this.items)
    })
           
    }

    componentWillUnmount(){

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
      this.props.appActions.updateInDataSheet('listUserBubble', row);
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
