import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Container } from 'react-bootstrap';

const App1 = () => {
    const states = [
        {
            name:"Kerala" ,
            language :  'malayalam',
            population : 1000
        },
        {
            name:"Tamilnad" ,
            language :  'Tamil',
            population : 2000
        },
        {
            name:"Orissa" ,
            language :  'Oriya',
            population : 3000
        },
        {
            name:"Delhi" ,
            language :  'Hindi',
            population : 4000
        },
        
    ]
  return (
    <div  className='text-center '>
        <Container>
        <Header lulu = {states} />
        
        </Container>
        
    </div>
  )
}

export default App1