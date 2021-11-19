import React from 'react';
import './App.css';
import A from './components/A';
import { MyReactContextProvider } from './context/MyReactContext';

function App() {
  
  const [data, setData] = React.useState("Hey, Kuntal Danech, Welcome");
  const value = {data,setData};
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <MyReactContextProvider value={value}>
            <A/>
          </MyReactContextProvider>
        </h1>
      </header>
    </div>
  );
}

export default App;
