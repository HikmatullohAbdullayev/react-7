import React from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import {request} from "../../config/requset"
import { Button } from "../ul/button/button"

export const Form = ({dafaultValue }) =>{
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm({ dafaultValues:{...dafaultValue}});
    
      const submit =(data) =>{
        if (dafaultValue) {
            request.put(`/posts/${dafaultValue.id}`, data)
          return  navigate('/', {replace:true})
        }
        request.post('/posts', data)
        reset()
      }
    return (
        <>
        <form onSubmit={handleSubmit(submit)}> 
        <div>
            <input  {...register('title', {required: true})} type="text" />
            {errors.title && <p>xato</p>}
        </div>
        <div>
            <input {...register('price', {required: true})} type="text" />
            {errors.price && <p>xato</p>}
        </div>
        <div>
            <Button type="submit" variant="second"> 
                post
            </Button>
        </div>
      </form>
        </>
    )
}