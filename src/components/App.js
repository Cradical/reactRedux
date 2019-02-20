import React from 'react'
import { Route } from 'react-router-dom'
import CommentBox from 'components/CommentBox.js'
import CommentList from 'components/CommentList.js';

export default () => {
    return (
        <div>
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
        </div>
    )
}
