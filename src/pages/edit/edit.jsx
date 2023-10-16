import React from "react";
import style from "./edit.module.css"
import {Form} from "../../components/form/form"
import { useLocation } from "react-router-dom";

export const Edit = () =>{
const params = useLocation()
console.log(params.state);
    return (
        
        <div>
            <Form defaultValue={params.state}/>
        </div>
        
    )
}