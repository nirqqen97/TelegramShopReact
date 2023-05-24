import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

export const App = () => {

  useEffect(() => {
  tg.ready()
  }, []);
  
  
  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      <button type='button' onClick={onClose}>
        Close
        </button>
      React homework template
    </div>
  );
};
