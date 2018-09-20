import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // let key = 1;
    // let item;

    let key = 1;
    let item;
    Axios.get("/api/album/albums").then(res => {
      //console.log(res)
      var elements = res.data.content.length;
      for(var i = 0; i < elements; i++){
        item = {};
        this.items.push(item)
        //相簿名稱
        item['albumName'] = res.data.content[i].name;
        //日記內容
       
        item['albumId'] = res.data.content[i].id
        for(var j = 0; j < res.data.content[i].diaries.length ;j++){
          item['diaryId'] = res.data.content[i].diaries[j].id
          console.log('diaryid',res.data.content[i].diaries[j].id)
          item.key = key++
        }
        
        console.log('album',res.data.content[i])

        console.log('key',item.key)
     
      }
      console.log('item', this.items)
    
   })
    
}

}
