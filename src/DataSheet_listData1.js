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
    
    Axios.get("/api/album/allAlbums").then(res => {
      
      //console.log('albums ->',res)
      
      var elements = res.data.length
      for(var i = 0; i < elements ; i++){
        
        item = {};
        //相簿名稱
        this.items.push(item)
        item['albumName'] = res.data[i].name;
        item['albumId'] = res.data[i].id;
        // item['diaryId'] = [];
        item['photoCover'] = res.data[i].photoCover;

        item['albumCreatedAt'] = res.data[i].createdAt;

        // for(var j = 0; j < res.data[i].diaries.length ; j++){
        // console.log('check did->',res.data[i].diaries[j].id)
        // item['diaryId'].push({id: res.data[i].diaries[j].id}) 
        // }
        
        item.key = Math.random()*(1000);
  
      }
      //console.log('album datasheet item',this.items)
    })

      
        
    
   
    
}

}