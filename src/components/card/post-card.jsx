import {Button} from '../ul/button/button'
import {request} from '../../config/requset'
export const PostCard = ({id,title,price, refetch}) => {

   
    const delData = async () => {
        try {
          const res = await request.delete(`/posts/${id}`);
          refetch()
        //   console.log(res.id);
        } catch (error) {
          // console.log(error);
        }
      };
    return(
        <>
        <div>
            <h2>{title}</h2>
            <h5>{price}</h5>
            <Button onClick={delData} variant="frist">delete</Button>
            <Button variant="second">edit</Button>

        </div>
        </>
    );
};
