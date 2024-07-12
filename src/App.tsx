import React, {FC, useEffect, useState} from 'react';
import './App.css';
import PostsComponent from "./components/PostsComponent";
import FormComponent from "./components/FormComponent/FormComponent";
import {IPosts} from "./models/IPosts";
import {postService} from "./services/postService";

const App:FC = () => {

    const [posts, setPosts] = useState<IPosts[]>([]);


    useEffect(() => {
        postService.getAll()
            .then(value => {
                setPosts(value.data)
            })
    }, []);

  return (
    <>
        <FormComponent posts={posts} setPosts={setPosts}/>
        <hr/>
        <PostsComponent posts={posts}/>
    </>
  );
}

export default App;
