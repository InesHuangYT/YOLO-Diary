import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_dphotoListData extends DataSheetBase {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){

  console.log('show upload photo data--->', this.props)
  





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
