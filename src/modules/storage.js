export default class Storage {
  static saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static loadData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}