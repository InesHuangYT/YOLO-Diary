function Store() {
    
}

Store.prototype.setValue = function (value) {
    const old = this.value
    this.value = {
        ...old,
        ...value,
    }
}

Store.prototype.getValue = function () {
    return this.value
}

export default new Store()