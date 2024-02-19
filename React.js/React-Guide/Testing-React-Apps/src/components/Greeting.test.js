import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";



describe('greeting component',()=>{

test('renders helloworld',()=>{
    // ARRANGE
    render(<Greeting/>)

    //ACT

    //ASSERT
    const helloWorldElement = screen.getByText('hello wrold')
    expect(helloWorldElement).toBeInTheDocument()
})


test('renders good to see you if the button was not clicked',()=>{

    render(<Greeting/>)
    const outputElement = screen.getByText('good time')
    expect(outputElement).toBeInTheDocument()

})


test('renders bad to see you if the button was not clicked',()=>{
    //Arrange
    render(<Greeting/>)

    //ACT
    const buttonEelement = screen.getByRole('button');
    userEvent.click(buttonEelement)

    //Assert
    const outputElement = screen.getByText('bad time')
    expect(outputElement).toBeInTheDocument()

})

test('renders not good to see you if the button was not clicked',()=>{
    render(<Greeting/>)

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    const outputEelement = screen.getByText('bad time')
    expect(outputEelement).not.toBeInTheDocument()
})

}


)

