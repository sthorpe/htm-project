import React from 'react';
import Autosuggest from 'react-autosuggest';
import theme from '../css/style.css';

const languages = [
  {
    name: 'Arthrex 300 Power System AR-300',
    year: 1972
  },
  {
    name: 'Breas (GE) Breas iSleep 20+',
    year: 2012
  },
  {
    name: 'Covidien D:X800 Expiratory Filter',
    year: 2012
  },
  {
    name: 'Datex-Ohmeda (GE) 7800 Ventilator',
    year: 2012
  },
  {
    name: 'GE CT 9800',
    year: 2012
  },
  {
    name: 'GE Healthcare 1.5T 4CH Large Flex Coil',
    year: 2012
  },
  {
    name: 'Health-o-meter_1100KL',
    year: 2012
  },
  {
    name: 'GE Healthcare Optima MR360',
    year: 2012
  },
  {
    name: 'Iris Beckman Coulter CytoFuge 2',
    year: 2012
  },
  {
    name: 'Medi-Temp II Blood:Fluid Warmer',
    year: 2012
  },
  {
    name: 'Nellcor N-600x',
    year: 2012
  },
  {
    name: 'Omron BP710 IntelliSense BP Monitor',
    year: 2012
  },
  {
    name: 'Panasonic MCO-170AIC (incubator)',
    year: 2012
  },
  {
    name: 'Siemens 2120i Hematology System',
    year: 2012
  },
  {
    name: 'Stryker Neptune 2',
    year: 2012
  },
  {
    name: 'Wallach LLCO2 Cryosurgery System',
    year: 2012
  },
  {
    name: 'Welch Allyn Spot Vital Signs 420TB',
    year: 2012
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }
  
  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
    debugger
  };

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Device Indentifier, Name, or Company',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div>
        <Autosuggest
          theme={theme}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}          
        />
      </div>
    );
  }
}
