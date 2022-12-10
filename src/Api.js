import React, { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'

const Api = () => {

    const[state,setState] = useState([])
    // const[state,setState] = useState([])
    // const[state,setState] = useState([])
    // const[state,setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(state => setState(state.splice(0,20)))
    }, [])
    

  return (

    <div>
        <h1 className='bg-info'>Fetch API Data</h1>

        {state.map((regu)=>(
            <div className="" key={regu.id}>
                <Card className=" mt-3 bg-primary text-white shadow p-3 mb-5  rounded ">
                <h2>{regu.title}</h2>
                <p>{regu.body}</p>
                <p>{regu.id}</p>
                </Card>
            </div>
            
        ))}


    </div>
  )
}

export default Api