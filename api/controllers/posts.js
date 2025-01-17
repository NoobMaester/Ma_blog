import  jwt  from "jsonwebtoken";
import { db } from "../db.js "

export const getPosts = (req,res)=>{
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

    db.query(q,[req.query.cat], (err,data)=>{
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}
export const getPost = (req,res)=>{
    const q ="SELECT `id`,`title`,`caption`,`price`, `img`, `uid`,`cat` FROM posts WHERE id = ?"

    db.query(q, [req.params.id], (err,data)=>{
        if(err) return res.status(401).json(err)

        return res.status(200).json(data[0])
    })
};
export const addPost = (req,res)=>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid")

        const q = "INSERT INTO posts (`title`, `caption`,`price`, `img`, `cat`,`uid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.caption,
            req.body.price,
            req.body.img,
            req.body.cat,
            userInfo.id
        ]

        db.query(q,[values],  (err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("post created")
        });
    });
}
export const deletePost = (req,res)=>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("not authenticated!")


        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ?"

        db.query(q, [postId], (err,data)=>{

            return res.json("post has been deleted")
        })
    }
export const updatePost = (req,res)=>{
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("not authenticated!")

    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid")


        const postId = req.params.id
        const q = "UPDATE posts SET `title`=?, `caption`=?,`img`=?,`cat`=? WHERE `id`=? AND `uid`= ?"

        const values = [
            req.body.title,
            req.body.caption,
            req.body.price,
            req.body.img,
            req.body.cat,
        ]

        db.query(q,[...values,postId, userInfo.id],  (err,data)=>{
            if(err) return res.status(500).json(err);
            return res.json("post updated")
        });
    });
};

export const getShoes = (req,res)=>{
    const q = "SELECT * FROM posts WHERE `cat`=Shoes"

    db.query(q,[req.query.cat], (err,data)=>{
        if(err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}