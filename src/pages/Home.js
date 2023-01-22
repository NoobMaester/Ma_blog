import { Link, NavLink, useLocation } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import pinup from "./../img/pinup.png";
import clothing from "./../img/clothing.png";
import Slideshow from "../components/Slideshow";
import { useEffect, useState } from "react";
import axios from "axios";




  

const Home = () => {
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
    <div>
      <Slideshow />
      
      <div className="hero">
        <div className="content">
          <h4>2022 Fashion Inspiration</h4>
          <h1>Make Your Style Looks Perfect.</h1>
          <p>
            Our collection will help your fashion looks better and we will
            provide the best for you.
          </p>
          <button className="btn">Shop Now</button>
        </div>
        <img src={pinup} alt=""></img>
        <img className="small" src={clothing} alt=""></img>
      </div>

      <div className="products">
        <h4>Our Product</h4>
        
        <h1>Trending Outfit of The Week</h1>
        <div className='cards'>
        {posts.map((post)=>(
        <div className='product'key={post.id}>
            <div className='img'>
            <img src={`../upload/${post.img}`} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
        </div>
        ))}
        </div>
        <Link to = "/contact"><button className="edit">More Info</button></Link>
        <h1>Suits</h1>
        <div className='cards'>
        {posts.map((post)=>(
        <div className='product'key={post.id}>
            <div className='img'>
            <img src={`../upload/${post.img}`} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
        </div>
        ))}
        
        </div>
        <Link to = "/contact"><button className="edit">More Info</button></Link>
        <h1>Shoes</h1>
        <div className='cards'>
        {posts.map((post)=>(
        <div className='product'key={post.id}>
            <div className='img'>
            <img src={`../upload/${post.img}`} alt=""/>
                </div>
                <h4> {post.title} </h4>
                <p>{post.caption}</p>
                <p>Rwf {post.price}</p>
        </div>
        ))}
        
        </div>
        <Link to = "/contact"><button className="edit">More Info</button></Link>
      <Testimonial />
      </div>
    </div>
  );
};

export default Home;
