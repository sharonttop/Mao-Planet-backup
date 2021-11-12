import React, { Component } from 'react'
import SearchInput, { createFilter } from 'react-search-input'
import CAT_PRODUCT from '../product-local-json/cat-product.json'
import DOG_PRODUCT from '../product-local-json/dog-product.json'
import '../Styles/SearchBar.scss'

const KEYS_TO_FILTERS = ['title']

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render() {
    const totalProduct = [CAT_PRODUCT, DOG_PRODUCT]
    const filteredTitle = totalProduct.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div>
        <SearchInput
          className="ACsearch-input"
          onChange={this.searchUpdated}
          placeholder="搜尋產品名稱"
        />

        {filteredTitle.map((totalProduct) => {
          return (
            <div className="id" key={(CAT_PRODUCT.id, DOG_PRODUCT.id)}>
              <div className="title">
                {(CAT_PRODUCT.title, DOG_PRODUCT.title)}
              </div>
              <div className="url">{(CAT_PRODUCT.URL, DOG_PRODUCT.URL)}</div>
              <div className="price">
                {(CAT_PRODUCT.price, DOG_PRODUCT.price)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}

export default SearchBar
