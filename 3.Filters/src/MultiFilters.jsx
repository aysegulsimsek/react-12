import React, { useState, useEffect } from 'react'
import { items } from './items'
import './App.css'

function MultiFilters() {
    const [selectedFilters, setSelectedFilters] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)
    let filters = ["Bags", "Watches", "Sports", "Sunglasses"]

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    }

    useEffect(() => {
        if (selectedFilters.length === 0) {
            setFilteredItems(items)
        } else {
            setFilteredItems(items.filter(item => selectedFilters.includes(item.category)))
        }
    }, [selectedFilters])
    return (
        <div>
            <div className='buttons-container'>
                {filters.map((category, idx) => (
                    <button onClick={() => handleFilterButtonClick(category)}
                        className={`button ${selectedFilters?.includes(category) ? "active" : ""}`}
                        key={`filters-${idx}`}>
                        {category}
                    </button>
                ))}

            </div>
            <div className='items-container'>
                {filteredItems.map((item, idx) => (
                    <div key={`items-${idx}`} className='item'>
                        <div>
                            <p>{item.name}</p>
                            <p className='category'>{item.category}</p>
                        </div>
                        <div style={{ width: '50px' }}><img style={{ height: '50px' }} src={item.img} alt="" /></div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default MultiFilters