import React from 'react';
export const PostCard = ({id,title,price}) =>{

    return(
        <>
        <div>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <Button variant="frist">delete</Button>
            <Button variant="second">edit</Button>

        </div>
        </>
    )
}
