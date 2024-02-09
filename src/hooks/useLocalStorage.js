import React from "react";

function useLocalStorage(nameItem, initialValue) {
    //Utilizamos localStorage para guardar la información inicial de la aplicación
    const localStorageItem = localStorage.getItem(nameItem);
 
    let parsedItem;
  
    if (!localStorageItem) {
      localStorage.setItem(nameItem, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
 
    const [item, setItem] = React.useState(parsedItem);
 
    const saveItem = (newItem) => {
     localStorage.setItem(nameItem, JSON.stringify(newItem));
     setItem(newItem);
   };
   return [item, saveItem];
 }

 export {useLocalStorage};