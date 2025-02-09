import{render, screen} from '@testing-library/react'
import { Greet } from './greet'
import React from 'react'

test("this the test to check greet render",()=>{
    render(<Greet/>)
    const textElement=screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument();
})


