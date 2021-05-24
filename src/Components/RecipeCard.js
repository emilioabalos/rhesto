import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard(props) {
  const { uuid, title, description, images, servings, prepTime, cookTime, postDate, editDate } = props.recipe
  const recipe_url = "http://localhost:3001/"
  let recipeId = title
  recipeId = recipeId.replace(/\s+/g, '-').toLowerCase()

  const getDate = (date) => {
    return date.split(' ')[0]
  }

  return (
    <div className="card card-type-access" aria-labelledby={recipeId}>
      <div className="card-head">
        <div className="row">
          <div className="col-sm col-12">
            <h2 className="heading" id={recipeId}>{title}</h2>
          </div>
          <div className="col-sm-auto col-12">
            <small className="badge">Date Posted: {getDate(postDate)}</small>
          </div>
        </div>
        <small>{description}</small>
      </div>
      <Link to={`/recipes/${uuid}`} className="card-image">
        <img
          src={recipe_url + images.medium}
          alt={title}
          height="380"
          width="570" />
      </Link>
      <div className="card-body pt-3">
        <div className="row">
          <div className="col-sm col-12">
            <span className="badge mr-2">Servings: <strong>{servings}</strong></span>
            <span className="badge mr-2">Prep Time: <strong>{prepTime}</strong>min</span>
            <span className="badge">Cook Time: <strong>{cookTime}</strong>min</span>
          </div>
          <div className="col-sm-auto col-12">
            <div><small>Last Edited: {getDate(editDate)}</small></div></div>
        </div>
      </div>
      <div className="card-action">
        <Link to={`/recipes/${uuid}`} className="btn btn-link">View Recipe</Link>
      </div>
    </div>
  )
}

export default RecipeCard