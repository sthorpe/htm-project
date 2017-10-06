import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import theme from '../css/style.css';

import {InstantSearch, Hits, SearchBox, Highlight, Stats, SortBy, Pagination, RefinementList,Menu,ClearAll} from 'react-instantsearch/dom';

const Hit = ({hit}) => 
    <div className="hit">
        <div className="hit-image">
          <img src={hit.image}/>
        </div>
      <div className="hit-content">
        <div className="hit-name">
        <Highlight attributeName="brand_name" hit={hit}/>
        </div>
        <div className="hit-product">
          {hit.version_or_model_number}
        </div>

        <div className="hit-description">
        <Highlight attributeName="company_name" hit={hit}/>
        </div>
        
        <div className="hit-description">
        <Highlight attributeName="device_description" hit={hit}/>
        </div>
      </div>
    </div>
const Sidebar = () => 
  <div id="left-column">
    <h5>Company</h5>
    <RefinementList attributeName="company_name" />
    <h5>Category</h5>
    <RefinementList attributeName="product_codes.openfda.medical_specialty_description" with SearchBox />
    </div>

const Content =() => 
  <div id="right-column">
    <div id="info">
      <Stats/>
      
    </div>
    <Hits hitComponent={Hit}/>
    <div id="pagination">
      <Pagination showLast />
    </div>
  </div>;
export default class Search extends Component {
  render() {
    return ( 
  <InstantSearch
    appId="QT51YZMDBI"
    apiKey="0147beb5a02712c3fb637eb88d2c77be"
    indexName="test_DEVICES_UDI"
  >
  <header id="header">
    <img src="../src/images/medical-device.png"/>
    <SearchBox translations = {{placeholder:'Enter Device Name or ID'}}/>
  </header>

    <main>
      <Sidebar/>

      <Content/>
    </main>
    
  </InstantSearch>


  );
}
}