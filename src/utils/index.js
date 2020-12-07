const cryptoRandomString = require('crypto-random-string');

module.exports = {
    getFromLocalStorage:  (item) => {
        const tasks =  JSON.parse(localStorage.getItem(item) ? localStorage.getItem(item):'[]');
        return tasks;
    },
    saveToLocalStorage:  (item, tasks) => {
         localStorage.setItem(item, JSON.stringify(tasks));
        return true;
    },
    generateId: () => {
        const id = cryptoRandomString({ length: 20, type: 'alphanumeric' });
        return id;
    }
}