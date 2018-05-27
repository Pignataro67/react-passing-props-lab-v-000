import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props =>
  <div className='fruit-basket'>
    <Filter filters={props.filters} updateFilterCallback={props.handleChange} />
    <FilteredFruitList currentFilter={props.currentFilter} fruit={props.fruit} />
  </div>;

  FruitBasket.defaultProps = {
    currentFilter: null,
    filters: [],
    fruit: [],
    updateFilterCallback: () => {}
  };

export default FruitBasket;
