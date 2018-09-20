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

    let key = null;
    let item;

    Axios.get("/api/album/albums").then(res => {
<<<<<<< HEAD
      //console.log(res)
      
      res.array.forEach(element => {
        console.log('element',element)
      });{
        // item = {};
        // this.items.push(item)
        // //相簿名稱
        // item['field'] = res.data.content[i].name;
        // //日記內容
        // item['textarea'] = "";
        // item.key = res.data.content[i].id;
        // item['albumId'] = item.key
        // item['diaryId'] = res.data.content[i].diaries
        // console.log('album',res.data.content[i])
        // console.log('key',item.key)
=======

      var elements = res.data.content.length;
      for(var i = 0; i < elements; i++){
        
        item = {};
        this.items.push(item);
        //相簿名稱
      
        item['field'] = res.data.content[i].name;
        item['albumId'] = res.data.content[i].id;
        //日記內容
        item.key = key++;
>>>>>>> 6cadb46c78e7bc71f7cebb42d633b123d42bd221
      }
    
   })
    
}

}
