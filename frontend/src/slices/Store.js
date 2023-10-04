import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem("store", serializedStore);
  } catch (e) {
    console.log(e);
  }
}
  
  function loadFromLocalStorage() {
    try {
      const serializedStore = window.localStorage.getItem("store");
      if (serializedStore === null) return undefined;
      return JSON.parse(serializedStore);
    } catch (e) {
      console.log(e)
      return undefined;
    }
  }
  
  
  export const store = configureStore({
    reducer: rootReducer,
    preloadedState:loadFromLocalStorage()
  });

  store.subscribe(() => saveToLocalStorage(store.getState()));

