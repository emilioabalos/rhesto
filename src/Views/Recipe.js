import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Recipe() {
  const { id } = useParams()
  const recipe_url = "http://localhost:3001/"
  const url = `${recipe_url}recipes/${id}`

  let recipe = useAxiosGet(url)
  let content = null

  const ingredients = () => {
    return recipe.data.ingredients.map((ingredient, index) => {
      let amount = ingredient.amount.toString()
      const repAmount = amount
        .replace("0.5", "½")
        .replace(".5", " ½")
        .replace("0.25", "¼")
        .replace(".25", " ¼")
        .replace("0.333", "⅓")
        .replace(".333", " ⅓")
        .replace("0.75", "¾")
        .replace(".75", " ¾")

      return (
        <li key={index}>
          <strong>{repAmount}</strong> <small>{ingredient.measurement}</small> <span><small>{ingredient.name}</small></span>
        </li>
      )
    })
  }

  const directions = () => {
    return recipe.data.directions.map((direction, index) => {
      const option = () => {
        let option = direction.optional
        if (option) {
          option = <small><span>(optional)</span></small>
        }
        return option
      }

      return (
        <li key={index}>
          <small>{direction.instructions}</small> {option()}
        </li>
      )
    })
  }

  const getDate = (date) => {
    return date.split(' ')[0]
  }

  if (recipe.error) {
    content = <div className="text-center py-10">There was an error</div>
  }

  if (recipe.loading) {
    content = <div className="text-center py-10">...loading</div>
  }

  if (recipe.data) {
    let recipeId = recipe.data.title
    recipeId = recipeId.replace(/\s+/g, '-').toLowerCase()

    content =
      <div className="card card-type-access" key={id} aria-labelledby={recipeId}>
        <div className="card-head">
          <div className="row">
            <div className="col-sm col-12">
              <h2 className="heading" id={recipeId}>{recipe.data.title}</h2>
            </div>
            <div className="col-sm-auto col-12">
              <small className="badge">Date Posted: {getDate(recipe.data.postDate)}</small>
            </div>
          </div>
          <small>{recipe.data.description}</small>
        </div>
        <div className="card-image">
          <img
            src={recipe_url + recipe.data.images.medium}
            alt={recipe.data.title}
            height="380"
            width="570" />
        </div>
        <div className="card-body pt-3">
          <div className="row">
            <div className="col">
              <span className="badge mr-2">Servings: <strong>{recipe.data.servings}</strong></span>
              <span className="badge mr-2">Prep Time: <strong>{recipe.data.prepTime}</strong>min</span>
              <span className="badge">Cook Time: <strong>{recipe.data.cookTime}</strong>min</span>
            </div>
            <div className="col-auto">
              <div><small>Last Edited: {getDate(recipe.data.editDate)}</small></div></div>
          </div>
          <hr />
          <h4 id="ingredients">Ingredients</h4>
          <ul className="card-list">
            {ingredients()}
          </ul>
          <hr />
          <h4 id="directions">Directions</h4>
          <ol className="card-list number">
            {directions()}
          </ol>
        </div>
        <div className="card-action">
          <a href="javascript:;" className="btn btn-link">Edit Recipe</a>
        </div>
      </div>
  }

  return (
    <div className="container">
      <Link to="/" className="btn btn-link">Go back</Link>
      {content}
    </div>
  )
}

export default Recipe