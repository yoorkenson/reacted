import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.sass';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {


    const elements = posts.map((item) => {
        const {id, label, important, like} = item;
        if (typeof item === 'object' && isEmpty(item)) {
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem
                        label={label} 
                        important={important}
                        like={like}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}/>
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for (let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;