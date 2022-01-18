import React from "react";

function SearchForm({type, onSearch, onType}) {
    const placeholders = ["🔍 Search for products, by name or description...", "🔍 Search for products, by location..."]

    const handleInput = (event) => {
        onSearch(event.target.value)
    }

    return (
        <div className="search-field input-group rounded">
            <input
                className="form-control rounded"
                onChange={handleInput}
                placeholder={placeholders[type]}
            />
            <select className="search-type-select"  onChange={e => onType(e.target.value)}>
                <option value={0}>Products</option>
                <option value={1}>Location</option>
            </select>
        </div>
    );
}

export default SearchForm