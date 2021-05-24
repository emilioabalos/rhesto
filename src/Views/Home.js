import React from 'react'
import RecipeCard from '../Components/RecipeCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
  const recipes_url = "http://localhost:3001/"
  const url = `${recipes_url}recipes/`

  let recipes = useAxiosGet(url)
  let content = null

  if (recipes.error) {
    content = <div className="text-center py-10">There was an error</div>
  }

  if (recipes.loading) {
    content = <div className="text-center py-10">...loading</div>
  }

  if (recipes.data) {
    content =
      recipes.data.map((recipe, key) =>
        <div key={key}>
          <RecipeCard recipe={recipe} />
        </div>
      )
  }

  let home = "Recipes"
  let homeId = home.replace(/\s+/g, '-').toLowerCase()

  return (
    <div className="container" aria-labelledby={homeId}>
      <div className="card card-type-access">
        <div className="card-head p-5">
          <h1 id={homeId} className="m-0">{home}</h1>
        </div>
      </div>
      {content}
    </div>
  )
}

export default Home