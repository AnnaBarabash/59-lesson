const Meal = ({ meal }) => {
  return (
      <div className="col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch">
          <div className="card mb-2" >
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="card-body" >
                  <h5 className="card-title">{meal.strMeal}</h5>
              </div>
          </div>
      </div>
  )
}

export default Meal