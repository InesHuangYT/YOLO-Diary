import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';

export default class DataSheet_listUserBubble extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
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


  }

}
