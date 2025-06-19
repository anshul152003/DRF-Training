import { createContext} from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

//Context API
//.step 1 : create the context
export const myContext = createContext();

//step 2 : write all thee variables and function jo app use karna chahte ho
const uName = "aviraj";
function printTable(){
  for(let i=1; i<=10;i++){
    console.log(`2 + {i}=`, 2*i)
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

//step 3 : mount your component jo ke andhr comtext ka use karenge.. make sure apke context ka use ho 

root.render(
  <myContext.Provider value={{uName,printTable}}>
    <App />
  </myContext.Provider>
)
