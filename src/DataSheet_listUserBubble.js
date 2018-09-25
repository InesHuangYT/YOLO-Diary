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
    item = {};
    axios.get(`/api/diary/${this.props.dataSheetRow.albumId}`).then((res) => {
      console.log('buble response ->', res)
        for (var i = 0; i < res.data.content.length; i++) {
          this.addItem(item)
          item['diaryId'] = res.data.content[i].id;
          this.setState({ diarvId: res.data.content[i].id })
          item.key = res.data.content[i].id
          console.log('buble item', this.items)
          this.sendData_button_Next_to_listData1();

        }
      
     
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
      diarvId: this.state.diaryId,
    };
    if (this.props.dataSheetId === dataSheet.id) {
      this.props.appActions.updateInDataSheet('listUserBubble', row);
    } else {
      this.props.appActions.addToDataSheet('listUserBubble', row);
    }
  }

  makeDefaultItems() {

    // let item;
    // item = {};
    // this.addItem(item);
    // item['diarvId'] = 'test';


    //  var elements = res.data.content.length;
    //  let id = []
    //  for(var i = 0; i < elements; i++){
    //  id.push(res.data.content[i].id)
    //  this.setState({diaryId: res.data.content[i].id})
    // }
    //  this.setState({diaryId:id})
    //  console.log(this.state.diaryId)






  }

  render() {

    return (
      <div>
        {/* < NewReadBBScreen getAlbumId = {this.getAlbumId.bind(this)}/> */}
      </div>

    );

  }


}
