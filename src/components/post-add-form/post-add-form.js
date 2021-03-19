import React from 'react';

import './post-add-form.sass';

const PostAddForm = ({onAdd}) => {
    return (
        <div className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='о чем вы думаете сейчас?'
                className='form-control new-post-lapel'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
                onClick={() => onAdd('hello')}>
                Добавить</button>
        </div>
    )
}

export default PostAddForm;