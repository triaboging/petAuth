import React, {useState, useEffect} from 'react'
import {getDetailLink} from '../actions/user'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
export const DetailPage = () =>{
    const[link, setLink] = useState()
    console.log('link', link)
    const linkId = useParams().id
   const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailLink(linkId, setLink))
    }, [])
    return(
        <div>
            <div>Страница постов</div>
            {link && <><div>{link.post.title}</div>
            <div>{link.post.discription}</div>
            <div>Создал пользователь: {link.email}</div>
            </> }
            
        </div>
    )
}