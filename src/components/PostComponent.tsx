import React, {FC} from 'react';
import {IPosts} from "../models/IPosts";


const PostComponent: FC<IPosts> = ({userId, id, body, title}) => {
    return (
        <div>
            <b>{id}</b> <span>UserID {userId}</span>
            <p>{title}</p>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default PostComponent;