import { createContext } from "react"
import Child1 from "../components/Child1";
import Child2 from "../components/Child2";
import Child3 from "../components/Child3";

export const myContext = createContext();

function MyContext({user}){
    return (
    <myContext.Provider value={user}>
      <Child1/>
      <Child2/>
      <Child3/>
    </myContext.Provider>
    )
}

export default MyContext;