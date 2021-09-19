import React, {useContext} from 'react';
import { CategoryContext } from '../App';

const Category = ({category})=>{
    const context = useContext(CategoryContext)
    return (
        <div className = 'col-6 col-sm-4 col-md-3'>
            <button type = 'button'
                    className = 'btn btn-outline-primary my-1 w-100'
                    onClick = {()=>{
                        context.changeCategory(category.strCategory)
                    }}>
                        <img src={category.strCategoryThumb} className="card-img-top"   alt={category.strCategory} />
                        {category.strCategory}
                    </button>
        </div>
    )
}

export default Category