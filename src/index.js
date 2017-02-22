// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

function playlist(state = [], action) {
  // console.log(action);
  if (action.type === 'ADD_TRACK') {
    return [
    ...state,
    // ... добавит значение в массив и вернет новый массив
    action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);
// store - хранилище всех наших данных в приложении

console.log(store.getState());

store.subscribe(() => {
  console.log('subscribe',store.getState());
  const list = document.querySelectorAll('.list')[0];
  list.innerHTML = '';
  document.querySelectorAll('.trackInput')[0].value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  })
})
// подписка когда у нас будет совершаться какоето собитие, изменения будут в консоли 




const addTrackBtn = document.querySelectorAll('.addTrack')[0];
addTrackBtn.addEventListener('click', () => {
  const trackName = document.querySelectorAll('.trackInput')[0].value;
  console.log('trackName', trackName);// вешает лисенер на кнопку addTrack
  store.dispatch({ type: 'ADD_TRACK', payload: trackName});
    // вистреливает екшин, меняет store
    // принимает на вход обьект поле type обезательное
}); 
