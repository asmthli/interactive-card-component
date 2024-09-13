import { useState } from 'react'
import '../styles/card.css'
import RatingCard from './RatingCard.jsx'
import ThankYouCard from './ThankYouCard.jsx'

export default function App() {

  const [ rating, setRating ] = useState(1)
  const [ isRated, setIsRated ] = useState(false)

  if ( !isRated ) {

    return (
      <div className='Card'>
        <RatingCard setRating={setRating} setIsRated={setIsRated}></RatingCard>
      </div>
    )
  } else {
    return (
      <div className='Card'>
        <ThankYouCard rating={ rating }></ThankYouCard>
      </div>
    )
  }
}