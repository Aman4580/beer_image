import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react';
import Card from './Card';


const Data = () => {

    const {posts} = useContext(AppContext);

  return (
    <div>
    <div className='cards'>
      {
        posts.map((card)=> (
          <Card data = {card}/>
        ))
       }

    </div>
    </div>
  )
}
export default Data;