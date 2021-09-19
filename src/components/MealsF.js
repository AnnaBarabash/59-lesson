import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Error from './Error';
import Meal from './Meal';
import FoodApi from '../data';

const MealsF = ({ category }) => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        setError(null)
        FoodApi.getMealsByCategory(category)
            .then(data => {
                console.log(data)
                setTimeout(() => {
                    setLoading(false);
                    setMeals(data.meals)
                    }, 1000)
                })
            .catch((error) => {
                setLoading(false);
                setError(error.message)
            })
    },[category])

    const renderMeals = () => {
        if (meals) {
            return loading && !error ? <Loader /> : error ? <Error message={error} /> :
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
        }
    }

    /* componentDidMount(){
      this.componentChangeCountry(this.props.country)
    }
    componentDidUpdate(prevProps){
        if(prevProps.country !== this.props.country)
        this.componentChangeCountry(this.props.country)
    } */

    

    return (
        <div className='row'>
            {renderMeals()}
        </div>)


}

export default MealsF