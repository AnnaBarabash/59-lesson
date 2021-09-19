import React from 'react';
import Loader from './Loader';
import Error from './Error';
import Meal from './Meal';
import FoodApi from '../data';

export default class Meals extends React.Component{

    state = {
        loading: true,
        meals:[],
        error: null
    }
    

    renderMeals(){
        const {loading, meals, error} = {...this.state}
        return loading && !error ? <Loader /> : error ? <Error message = {error} /> :
        meals.map(meal => <Meal key = {meal.idMeal} meal = {meal}/>)
    }

    componentDidMount(){
      this.componentChangeCategory(this.props.category)
    }

    componentDidUpdate(prevProps){
        if(prevProps.category !== this.props.category)
        this.componentChangeCoategory(this.props.category)
    }

    componentChangeCoategory(category){
        this.setState({...this.state, loading:true, error:null})
        FoodApi.getMealsByCategory(category)
        .then (data =>{
            console.log(data)
            setTimeout(()=>{
                this.setState({
                    ...this.state,
                    loading: false,
                    meals: [...data.meals]
                })
            }, 1500)
        })
        .catch((error)=>{
            this.setState({
                ...this.state,
                loading: false,
                error: error.message
            })
        })
    }

    render(){
        return(
        <div className = 'row'>
            {this.renderMeals()}
        </div>)

    }
}