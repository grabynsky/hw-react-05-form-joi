import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../models/IPosts";
import PostComponent from "./PostComponent";
import {postService} from "../services/postService";

type IProps = {
    posts: IPosts[],
}

const PostsComponent: FC<IProps> = ({ posts}) => {


    return (
        <div>
            {
                posts?.map((post) => <PostComponent key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>)
            }

        </div>
    );
};

export default PostsComponent;