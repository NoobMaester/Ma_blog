import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || "")
  const [caption, setCaption] = useState(state?.caption || "")
  const [price, setprice] = useState(state?.title || "")
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState(state?.cat || "")
  const navigate = useNavigate()
  const upload = async ()=> {
    try{
      const formData = new FormData();
      formData.append("file", file)
      const res = await axios.post("/upload", formData)
      return res.data
    }catch(err) {
      console.log(err)
    }
  }

  const handleSubmit = async e=>{
    e.preventDefault()
    const imgUrl = await upload()
    try{
        state ? await axios.put(`/posts/${state.id}`, {
          title,
          caption,
          price,
          cat,
          img: file, imgUrl : ""

        })
        : await axios.post(`/posts/`, {
          title,
          caption,
          price,
          cat,
          img: file ? imgUrl : ""
        })
        navigate("/posts")
    }catch(err){
      console.log(err)
    }
   
  }
  return (
    <div className='add'>
      <div className='auth'>
        <form>
        <input  type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)} />
        <input  type="text" value={caption} placeholder='Caption' onChange={e=>setCaption(e.target.value)} />
        <input  type="number" value={price} placeholder='Price' onChange={e=>setprice(e.target.value)} />
        <input  type="file"  onChange={e=>setFile(e.target.files[0])}/>
        <h1>Categories</h1>
        <div className='cat'>
        <input  type="radio" value='Shoes' placeholder='category'  checked={cat==="Shoes"} onChange={e=>setCat(e.target.value)} />
        <label htmlFor='Shoes'>Shoes</label>
        </div>
        <div className='cat'>
        <input  type="radio" value='Suit' placeholder='category' checked={cat==="Suit"} onChange={e=>setCat(e.target.value)} />
        <label htmlFor='Suit'>Suit</label>
        </div>
        <div className='cat'>
        <input  type="radio" value='Shirt' placeholder='category'  checked={cat==="Shirt"} onChange={e=>setCat(e.target.value)} />
        <label htmlFor='Shirt'>Shirt</label>
        </div>
        <div className='cat'>
        <input  type="radio" value='Underwear' placeholder='category'  checked={cat==="Underwear"} onChange={e=>setCat(e.target.value)} />
        <label htmlFor='Underwear'>Underwear</label>
        </div>
        <div className='cat'>
        <input  type="radio" value='Pants' placeholder='category'  checked={cat==="Pants"} onChange={e=>setCat(e.target.value)} />
        <label htmlFor='Pants'>Pants</label>
        </div>
        <button onClick={handleSubmit} >Add</button>
         <p></p>
    </form>
    </div>
    </div>
  )
}

export default Add