import {Button} from '../ul/button/button'
import {request} from '../../config/requset'
import { useNavigate } from 'react-router-dom';
export const PostCard = ({id,title,price, refetch}) => {

   const navigate = useNavigate()
    const delData = async () => {

        try {
          const res = await request.delete(`/posts/${id}`);
          refetch()
        } catch (error) {
        }
      };

    const editPost = async () => {
       navigate('/edit', {state:{id, title, price}})
    }
    return(
        <>
        <div>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <Button onClick={delData} variant="frist">delete</Button>
            <Button onClick={editPost} variant="second">edit</Button>

        </div>
        </>
    );
};
