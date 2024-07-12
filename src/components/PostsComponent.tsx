import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../models/IPosts";
import PostComponent from "./PostComponent";
import {postService} from "../services/postService";

type IProps = {
    trigger: boolean,
}

const PostsComponent: FC<IProps> = ({trigger}) => {

    const [posts, setPosts] = useState<IPosts[]>([]);


    useEffect(() => {
        postService.getAll()
            .then(value => {
                setPosts(value.data)
            })
    }, [trigger]);
    return (
        <div>
            {
                posts?.map((post) => <PostComponent key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>)
            }

        </div>
    );
};

export default PostsComponent;