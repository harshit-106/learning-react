import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function App() {
  const [state, setstate] = useState(false);
 const navigate = useNavigate()

  const handleclick = () =>{
    setstate(!state)
  }

  return (
    <div className=" bg-slate-400">
     <button  className="text-white bg-blue-950 p-3" onClick={handleclick}>submit</button>
    {state && navigate('/')}
      

    </div>
  )
}
