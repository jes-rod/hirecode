import { Country, State }  from 'country-state-city';
import { useState } from 'react';
import {searchJobs} from '../../api/apiFunctions.js'

const SearchBar = (props) => {
  const [country, setCountry] = useState({});
  const [state, setState] = useState('');
  const [query, setQuery] = useState('Front end developer');
  const [remote, setRemote] = useState('Remote');
  const [states, setStates] = useState([]);
  const countries = Country.getAllCountries();

  const selectCountry = (e) => {
    const countryName = e.target.value;
    let localCountry = {};
    if(countryName === '---Select country---'){
      localCountry = {
      }
      setCountry(localCountry);
      setStates([]);
    } else {
      localCountry = countries.filter(c => c.name === countryName)[0];
      setCountry(localCountry);
      setStates(State.getStatesOfCountry(localCountry.isoCode));
    }

  }

  const selectState = (e) => {
    let stateName = e.target.value;
    if(stateName === '---Select State---'){
      stateName = '';
    }
    setState(stateName);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobs = await searchJobs(query, country, state, remote);
    props.setJobs(jobs);
    props.setFlag(true);
  }
  
  return (
    <div className="row px-10 py-10 justify-content-center">
      <form  method="post" className="row" onSubmit={handleSubmit} >
        <div className="mb-6">
          <label className="form-label" >Search by query</label>
          <input className="form-control" type="text" name="field-name" placeholder="Front end developer" id="" onChange={(e) => setQuery(e.currentTarget.value)}/>
        </div>
          
        <div className="mb-6 col-md">
          <label className="form-label" htmlFor="">Select Country</label>
          <select className="form-select" name="country-name" onChange={selectCountry}>
            <option>---Select country---</option>
            {
              countries.map((country, id) => <option key={id}>{country.name}</option>)
            }
          </select>
        </div>
          
        <div className="mb-6 col-md">
          <label className="form-label" >Select State</label>
          <select className="form-select" name="state-name" onChange={selectState}>
            <option>---Select State---</option>
            {
              states.map((state, id) => <option key={id}>{state.name}</option>)
            }
           </select>
        </div>
        <div className="mb-6 col-md">
          <label className="form-label" >Remote or on-site?</label>
          <select className="form-select" name="field-name" onChange={(e) => setRemote(e.currentTarget.value)}>
            <option>Remote</option>
            <option>On-site</option>
            <option>Either</option>
          </select>
        </div>
       </form>
      <button className="mb-6 btn submit-button btn-dark" type="submit" onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchBar ;
