import React from "react";
import style from "./header.module.css"
import { useNavigate, useLocation   } from "react-router";
import { Button } from "../../components/ul/button/button";

export const Header = () =>{
    const navigate = useNavigate()
    const location = useLocation()

const changeRoute = () =>{
    if (location.pathname == "/post") {
        return navigate("/")
    }
        navigate('/post' )
}

    return(
        <>
        <div>
            <Button onClick={changeRoute} variant="text">
            {location.pathname == "/post"? "Back" :  "yangi qo'shish"}
                
                </Button>
        </div>
        
        </>
    )
}