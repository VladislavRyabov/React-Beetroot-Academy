import { useQuery } from '@apollo/client';
import { GET_POST } from '../../data/Posts'
import '../../component/Test/Test.scss'
import Test from "../../component/Test/Test";
function Service() {
    const { loading, error, data } = useQuery(GET_POST);
    const Posts = data?.posts.data.map(item => <Test key={item.id} item={item}/>)

    if (loading) return <h1>...Loading</h1>
    if (error) return <h1>Error: {error.message}</h1>
    console.log(data.posts.data)
    return (
        <div>
            <div className="cart-ul">
                {Posts}
            </div>
        </div>
    )
}
export default Service