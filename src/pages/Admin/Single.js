import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2]

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
                console.log(res)
            } catch(err) {
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);

const handleDelete = async ()=>{
    try {
        await axios.delete(`/posts/${postId}`)
        navigate("/posts")
    } catch(err) {
        console.log(err)
    }
};

  return (
    <div >
        <div className='cards'>
        <div className='product' >
            <div className='img'>
                <img src={`../upload/${post.img}`} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
       <Link to={`/add?edit=${post.id}`} state={post}> <button className='delete'>Edit</button></Link>
        <button className='btn' onClick={handleDelete}>Delete</button>
    </div>
    </div>
    </div>
  )
}

export default Single