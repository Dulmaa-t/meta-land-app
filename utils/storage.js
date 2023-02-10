export function getLocal(storageName) {
    return typeof window !== 'undefined' && JSON.parse(localStorage.getItem(storageName));
  }
  
  export function setLocal(storageName, item) {
    localStorage.setItem(storageName, item);
  }
  
  export function getLocalStr(storageName) {
    return typeof window !== 'undefined' && localStorage.getItem(storageName);
  }
  