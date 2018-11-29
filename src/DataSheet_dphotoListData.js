import DataSheetBase from './DataSheetBase.js';
import axios from 'axios';


export default class DataSheet_dphotoListData extends DataSheetBase {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

    console.log('show upload photo data--->', this.props)
  axios.get(`/api/photo//downloadDiaryPhoto/${this.props.diaryId}`).then(res =>{
    console.log('getAllphoto', res)
  }).catch(function(error){

    console.log('res fail')

  })
  
  





  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['第一幕 合照'] = "";
    item.key = key++;
    
    
  }

 

}
