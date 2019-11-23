import React from 'react'
import './Post.css'
const Post =(props) => {
return <div className ='item-post'>
            <img src="https://zvetnoe.ru/upload/images/blog/Almazka/cat.jpg"></img>
          {props.message}
          <div>
          <button>Like</button>
          <div>likes {props.likeCount}</div>
        </div>
        </div>  
}
export default Post;