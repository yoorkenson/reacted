import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.sass';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        if (typeof item === 'object' && isEmpty(item)) {
            return (
                <li key={item.id} className='list-group-item'>
                    <PostListItem
                        label={item.label} 
                        important={item.important}
                        onDelete={() => onDelete(item.id)}
                        onToggleImportant={() => onToggleImportant(item.id)}
                        onToggleLiked={() => onToggleLiked(item.id)}/>
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