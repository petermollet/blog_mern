import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../lib/store-redux/actions';
import { useSelector } from 'react-redux';

const Menu = () => {
    const dispatch = useDispatch();
    const categories = ["All", "technology", "science", "design"];
    const active = useSelector(state => state.category);
    return (
        <div className='menu'>
            <ul className="categories">
                {categories.map((category, index) => (
                    <li 
                        className={`category ${ active === category && 'active' }`} 
                        key={index} 
                        onClick={ () =>  dispatch(setFilter(category)) }
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;