import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_listUserBubble extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    
  }

}
