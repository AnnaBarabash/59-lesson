import React, {useContext} from 'react';
import { CountryContext } from '../App';

const Country = ({country})=>{
    const context = useContext(CountryContext)
    return (
        <div className = 'col-6 col-sm-4 col-md-3'>
            <button type = 'button'
                    className = 'btn btn-outline-primary my-1 w-100'
                    onClick = {()=>{
                        context.changeCountry(country.strArea)
                    }}>
                        {country.strArea}
                    </button>
        </div>
    )
}

export default Country