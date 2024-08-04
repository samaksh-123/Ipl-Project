import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";

function App() {


  return(
   
    <div className="max-w-screen min-h-screen mx-auto bg-black">
    <Routes className="w-full">
    <Route path ="/" element={<Navbar/>}>
    <Route path="/" element = {<Home/>}/>
    
    <Route path="/pointsTable" element = {<PointsTable/>}/>
    <Route path="/news" element = {<h1>Coming soon...</h1>}/>
    </Route>
   
    <Route path ="/matchDetail/:id" element={<MatchDetail/>}/>
   </Routes>
   
    </div>
  
  );
}

export default App
