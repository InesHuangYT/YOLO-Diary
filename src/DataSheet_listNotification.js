import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_listNotification extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['field_FriendName'] = "MOMO";
    item['Line'] = "";
    item['field_notification'] = "標記你在「花蓮遊」";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['field_FriendName'] = "KoKo";
    item['Line'] = "";
    item['field_notification'] = "標記你在「國小同學會」";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['field_FriendName'] = "JoJo";
    item['Line'] = "";
    item['field_notification'] = "傳送了訊息給您";
    item.key = key++;
  }

}
