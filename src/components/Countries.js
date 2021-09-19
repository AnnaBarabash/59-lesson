import React from 'react';
import Loader from './Loader';
import Error from './Error';
import Country from './Country';
import FoodApi from '../data';

export default class Countries extends React.Component {
    state = {
        loading: true,
        countries: [],
        error: null
    }

    componentDidMount() {
        FoodApi.getCountries()
            .then(data => {
                setTimeout(() => { this.setState({ ...this.state, loading: false, countries: [...data.meals] }) }, 1000)
            })
            .catch((error) => {
                this.setState({ ...this.state, loading: false, error: error.message })
            })

    }

    renderCountries() {
        return (
            <>
                {this.state.loading ?
                    <Loader /> : this.state.error ? <Error message={this.state.error} /> :
                        this.state.countries.map(country => <Country key={country.strArea} country={country} />)}
            </>
        )
    }


    render() {
        return (
            <div className='row'>
                {this.renderCountries()}
            </div>
        )
    }

}