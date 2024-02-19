import {render,screen} from '@testing-library/react'
import Async from './Async'

describe('Async component',()=>{

    test('renders posts if request succeeds',async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'First post'}]
        })
        render(<Async/>)
        const listItemElements=  await screen.getAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)

    })

    //서버내용을 건드리지 않고 post요청테스트를 하기위해 1. 요청x 2. 테스트서버에 post
    test('Async post',()=>{

    })

})