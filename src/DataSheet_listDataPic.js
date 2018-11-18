import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';

export default class DataSheet_listDataPic extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    let item;
    
    Axios.get("/api/photo/downloadDiaryPhoto/{diaryId}").then(res => {
      
      console.log('diaries ->',res)
      
      var elements = res.data.content.length
      for(var i = 0; i < elements ; i++){
        
      item['photoId'] = res.data.content[i].photoId;
  
      }
      console.log('album datasheet item',this.items)
    })

  }

}
