import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import userReducer from './../reducers/userReducer';
import { getPostsFunction } from './../actions/user';



export const LinksPage = () =>  {
    const posts = useSelector(state => state.userReducer.posts)
    console.log('произошел рендер LinksPage')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsFunction())
    }, [ ])
    
   
    
    return(
        <div>
        <h1>LinksPAge</h1>
        {posts.length > 0 ? 
            <div>
                {posts.map((item) => <div>{item.title}</div>)}
            </div>:
            <div>Публикаций пока нет...</div>     
        }
        </div>
    )
}