const fs = require('fs');
const getItemsFromJSON = () => {
    try {
        const dataBUFFER = fs.readFileSync('items.json')
        const dataSTRING = dataBUFFER.toString();
        return JSON.parse(dataSTRING);
    }
    catch (e) {
        return []
    }
}
const addItem = ({ name, price }) => {
    const itemslist = getItemsFromJSON();
    const item = {
        name: name,
        price: price,
        id: itemslist.length == 0 ? 0 : itemslist[itemslist.length - 1].id + 1
    }
    itemslist.push(item)
    fs.writeFileSync('items.json', JSON.stringify(itemslist))
    return item;
}
const deleteItem = (id) => {
    const itemslist = getItemsFromJSON();
    let deletedItem = undefined;
    const filteredItems = itemslist.filter(item => {
        if(item.id===parseInt(id)){
            deletedItem = item;
            return false;
        }
        else
            return true;
    })
    fs.writeFileSync('items.json', JSON.stringify(filteredItems))
    return deletedItem;
}
module.exports = {
    getItemsFromJSON: getItemsFromJSON,
    addItem: addItem,
    deleteItem: deleteItem
}