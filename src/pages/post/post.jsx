import React from "react";
import { useForm } from "react-hook-form";
import style from "./post.module.css";
import {request} from "../../config/requset"
import { Button } from "../../components/ul/button/button";

export const Post = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit =(data) =>{
    request.post('/posts', data)
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
  );
};
