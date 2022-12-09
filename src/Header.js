import React from 'react'

const Header = ({lulu}) => {
  return (
    <div>
    {
        lulu.map((regu)=>(

            <div className='mt-4 bg-warning '>
            <h1>State :{regu.name} </h1>
            <h2>Language :{regu.language} </h2>
            <h2>Language :{regu.population} </h2>
        </div>

        ))
    }

       


</div>
  )
}

export default Header