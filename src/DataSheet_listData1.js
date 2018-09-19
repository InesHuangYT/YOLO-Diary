import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    let key = 1;
    let item;
    Axios.get("/api/album/albums").then(res => {
      var elements = res.data.content.length;
      
      
      for(var i = 0; i < elements; i++){
        item = {};
        this.items.push(item);
        //相簿名稱
        item['field'] = res.data.content[i].name;
        item['albumId'] = res.data.content[i].id;
        //日記內容
        item['textarea'] = "";
        item.key = key++;
      }
    
    })
    
}

}
