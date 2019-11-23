import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'
import { type } from 'os';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
let postsElements = props.posts.map(p => <Post message ={p.message} likeCount={p.likeCount}/>);

let newPostElement =React.createRef();

let onAddPost = () =>{
  props.addPost();
}

let onPostChange = () => {
let text = newPostElement.current.value;
props.updateNewPostText(text);
}

return(<div className='content'>
        <h2 className="MyPosts">My posts</h2>
        <div className="postsBlock">
          <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
          <button onClick={ onAddPost}>Add post</button>
          <button>Remove post</button>
          </div>
        </div>
        <div className ='item-post'>
        {postsElements}
        </div>
      </div>)
}
export default MyPosts;