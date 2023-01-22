import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Posts = () => {
    const [posts,setPosts] = useState([])
    const cat = useLocation().search
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
},[cat])

  return (
    <div className='products'>
        <div className='cards'>
        {posts.map((post)=>(
        <div className='product'key={post.id}>
            <div className='img'>
            <img src={`../upload/${post.img}`} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
                <Link to={`/posts/?cat=${post.cat}`} ><button className='edit'>More</button></Link>
               <Link to={`/single/${post.id}`} path='single/:pid'> <button className='btn' >Edit</button></Link>
        </div>
        ))}
    </div>
    <Link to='/add'><button className='btn'>Add Post</button></Link>
</div>
  )
}

export default Posts