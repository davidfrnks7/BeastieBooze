import React from 'react'
import { useParams } from 'react-router-dom'
import { drinks } from '../../dummyData'

import ingredientParser from '../../utils/parseIng'

const DrinkView = () => {
  // useParams will grab the param passed in url. grabbing drinkId from params.
  const { drinkId } = useParams()

  //! this will be replaced by an axios call. for now we're just grabbing 
  //! the corresponding drink object from the dummy data
  const drink = drinks.find(e => {
    return drinkId == e.idDrink;
  });

  //* the ingredients and measurements come in a pretty weird format, so we wrote a helper function
  //* to parse through it and return them in an array of arrays, formatted like dis:  [ingredient, measurement]
  const ingredients = ingredientParser(drink);

  //* grab what we need from drink object, reassign names for clarity and brevity 
  const { 
    idDrink: id, 
    strDrink: name, 
    strDrinkThumb: thumbnail,
    strAlcoholic: alcoholic,
    strGlass: glass,
    strInstructions: directions, 
  } = drink;

  return (
    <div className="container">
      <h2 className="page-heading">{name}</h2>
      <div className="row">
        <div className="col-md-8">
      <img src={thumbnail} className="img-fluid drink-display" alt={name} />
        </div>
      <div className="col-md-4">
      <h4>{alcoholic}</h4>
      <h4>Glass: {glass}</h4>
      <hr></hr>
      <h5>Ingredients</h5>
      <ul>
        {ingredients.map((i, index) => {
          return <li key={index}>{i[1]}  {i[0]}</li>   //* each element is an array containing an ingredient followed by it's measurement
        })}
      </ul>
      <h4 className="sub-heading">Directions</h4>
      <p>{directions}</p>
      <div className='virgin-button'>
      <button type="button" className="btn btn-dark">Make Virgin</button>
      </div>
      <div className="favorite-button">
      <button type="button" class="btn btn-info">Add To Favorites</button>
      </div>
      </div>
      </div>
    </div>
  )

}

export default DrinkView