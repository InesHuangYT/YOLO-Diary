function appendfd(){
}
appendfd.prototype.setValue = function(file){
       this.photos = [];
       this.photos.push(this.file);
}

appendfd.prototype.getValue = function(){
    for(var i; i < this.photos.length ;i++){
        return this.photos[i];
    }
}

export default new appendfd()