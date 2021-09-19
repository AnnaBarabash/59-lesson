import React from 'react';
import './App.css';
import Categories from './components/Categories';
import Meals from './components/MealsF';
import Search from './components/Search';

export const CountryContext = React.createContext();
export const CategoryContext = React.createContext();

class App extends React.Component {
  state = {
    currentCountry: null,
    currentCategory: null,
  }

  changeCountry = (country) => {
    console.log(country)
    this.setState({ ...this.state, currentCountry: country })
  }

  changeCategory = (category) => {
    console.log(category)
    this.setState({ ...this.state, currentCategory: category })
  }

  render() {
    return (
      <>
        <CategoryContext.Provider value ={{
          changeCategory:this.changeCategory
        }}>
          <Search />
          <div className='container my-5'>
            <Categories />
          </div>
        </CategoryContext.Provider>
        <div className='container my-5'>
          {this.state.currentCategory ? <Meals category={this.state.currentCategory} /> : null}
        </div>
      </>
    )
  }
}

export default App;