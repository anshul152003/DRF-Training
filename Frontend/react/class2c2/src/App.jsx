import ChildOne from './components/ChildOne';
import { useState } from 'react';

function App() {

  const [money] = useState(1500);
  
  return (
    <div className="App">
      <ChildOne printMoney={money}/>
    </div>
  );
}

export default App;
