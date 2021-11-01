import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBj13Ert718vlMc66YEQUtAOICrHuW37x8',
  authDomain: 'ema-john-50d63.firebaseapp.com',
  projectId: 'ema-john-50d63',
  storageBucket: 'ema-john-50d63.appspot.com',
  messagingSenderId: '1015172239009',
  appId: '1:1015172239009:web:91ff36940826ba1804eae0',
};

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;
