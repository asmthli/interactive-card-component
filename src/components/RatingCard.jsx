import '../styles/rating_card.css'

export default function RatingCard( { setRating, setIsRated }) {

  function ratingHandler(e) {
    setRating(e.target.innerText)
    
    for (let button of e.target.parentElement.children) {
      if (button === e.target) {
        button.className = 'rating-card__rating-button rating-card__rating-button--selected'
      } else {
        button.className = 'rating-card__rating-button'
      }
    }
  }

  function submitHandler() {
    setIsRated(true)
  }
    
  return (
    <div className='rating-card'>
      <img className='rating-card__img' src='icon-star.svg'></img>

      <h1 className='rating-card__header'>How did we do?</h1>
      <p className='rating-card__body'>Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>

      <div className='rating-card__button-group'>
          <button className='rating-card__rating-button' onClick={ ratingHandler }>1</button>
          <button className='rating-card__rating-button' onClick={ ratingHandler }>2</button>
          <button className='rating-card__rating-button' onClick={ ratingHandler }>3</button>
          <button className='rating-card__rating-button' onClick={ ratingHandler }>4</button>
          <button className='rating-card__rating-button' onClick={ ratingHandler }>5</button>
      </div>

      <button className='rating-card__submit-button' onClick={ submitHandler }>Submit</button>
    </div>
  )
}