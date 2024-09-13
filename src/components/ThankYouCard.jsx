import '../styles/thank_you_card.css'

export default function ThankYouCard( { rating } ) {
  
    return (
      <div className='thank-you-card'>
        <img className='thank-you-card__img' src='illustration-thank-you.svg'></img>
  
        <p className='thank-you-card__rating'>You selected {rating} out of 5</p>
  
        <h1 className='thank-you-card__header'>Thank You!</h1>
  
        <p className='thank-you-card__body'>
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>
    )
  }