import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Figure from './components/Figure';

function App() {
  const[currentFontSize,setFontSize]=useState('14px')

  const changeFontSize=(size)=>{
    switch(size){
      case 'small':
        setFontSize('18px');
        break;
      case 'mediam':
        setFontSize('22px');
        break;
      case 'large':
        setFontSize('26px');
        break;
      default:
        setFontSize('20px')
    }
  }
  return (
    <div className="App" style={{fontSize:currentFontSize}}>
      <p>Welcome</p>
      <button onClick={()=>changeFontSize('small')}>Small</button>
      <button onClick={()=>changeFontSize('mediam')}>Mediam</button>
      <button onClick={()=>changeFontSize('large')}>Large</button>
      <Figure/>
    </div>
  );
}

export default App;
