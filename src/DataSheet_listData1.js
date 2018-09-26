import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';
import { EDESTADDRREQ } from 'constants';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {

    
    let item;
    
    Axios.get("/api/album/albums").then(res => {
      
      console.log('albums ->',res)
      
      var elements = res.data.content.length
      for(var i = 0; i < elements ; i++){
        
        item = {};
        //相簿名稱
        this.items.push(item)
        item['albumName'] = res.data.content[i].name;
        item['albumId'] = res.data.content[i].id;
        item['diaryId'] = [];
        for(var j = 0; j < res.data.content[i].diaries.length ; j++){
        console.log('check did->',res.data.content[i].diaries[j].id)
        
        item['diaryId'].push({id: res.data.content[i].diaries[j].id}) 

        }
        
        item.key = Math.random()*res.data.content[i].id;
  
      }
      console.log('album datasheet item',this.items)
    })

      
        
    
   
    
}

}
