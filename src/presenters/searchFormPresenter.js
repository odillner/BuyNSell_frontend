import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {performSearch} from "../reducers/search";

import SearchForm from "../components/search/searchForm";
import {useNavigate} from "react-router-dom";

function SearchFormPresenter() {
    const [searchType, setSearchType] = useState(0)
    const [callBlocker, setBlocker] = useState(false)
    const {loading} = useSelector(state => state.search)
    const dispatch = useDispatch()
    const nav = useNavigate()

    const onSearch = (query) => {
        nav('/')
        if (!loading) {
            if (searchType == 0) {
                if (query !== '') {
                    dispatch(performSearch(searchType, query))
                } else {
                    dispatch(performSearch(searchType))
                }
            } else if (searchType == 1) {
                if (!callBlocker && query.length > 3) {
                    setBlocker(true)
                    dispatch(performSearch(searchType, query))

                    setTimeout(() => setBlocker(false), 1000);
                }
            }
        }
    }

    const onType = (type) => {
        setSearchType(type)
    }

    return (
        <SearchForm
            onSearch={onSearch}
            onType={onType}
            type={searchType}
        />
    )
}

export default SearchFormPresenter