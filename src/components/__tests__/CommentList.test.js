import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates one LI per comment', () => {
    console.log('test_output: ', wrapper.find('li').length)
})
  