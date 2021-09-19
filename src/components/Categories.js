import React from 'react';
import Loader from './Loader';
import Error from './Error';
import Category from './Category';
import FoodApi from '../data';

export default class Categories extends React.Component {
    state = {
        loading: true,
        categories: [],
        error: null
    }

    componentDidMount() {
        FoodApi.getCategories()
            .then(data => {
                console.log(data);
                setTimeout(() => { this.setState({ ...this.state, loading: false, categories: [...data.categories] }) }, 1000)
            })
            .catch((error) => {
                this.setState({ ...this.state, loading: false, error: error.message })
            })
    }

    renderCategories() {
        return (
            <>
                {this.state.loading ?
                    <Loader /> : this.state.error ? <Error message={this.state.error} /> :
                        this.state.categories.map(category => <Category key={category.idCategory} category={category} />)}
            </>
        )
    }


    render() {
        return (
            <div className='row'>
                {this.renderCategories()}
            </div>
        )
    }

}