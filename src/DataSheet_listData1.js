
import DataSheetBase from './DataSheetBase.js';
import Axios from 'axios';
import { EDESTADDRREQ } from 'constants';

export default class DataSheet_listData1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
}


}