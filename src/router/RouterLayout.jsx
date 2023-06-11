//import App from "../App";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
export default function RouterLayout(){
return (
    <div>
        <MainHeader/>
        <Outlet/>
    </div>
)
}