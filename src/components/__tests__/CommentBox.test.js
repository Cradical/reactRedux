import React from 'react'
import CommentBox from 'components/CommentBox'
import { mount } from 'enzyme'
import Root from 'Root'

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>)
})

afterEach(() => {
    wrapper.unmount()
})

it('displays text area and two buttons', () => {
    expect(wrapper.find('textarea').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(2)
}) 

describe('the text area', () => {
    beforeEach(() => {
        wrapper.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })
        wrapper.update()
    })
    
    it('has textarea user can type in', () => {
        expect(wrapper.find('textarea').prop('value')).toEqual('new comment')
    })

    it('clears text area after submit', () => {
        wrapper.find('form').simulate('submit')
        wrapper.update()
        expect(wrapper.find('textarea').prop('value')).toEqual('')
    })
})
