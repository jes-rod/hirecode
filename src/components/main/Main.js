import {useState} from 'react';
import NavBar from '../navbar/NavBar.js'
import Jumbotron from '../jumbotron/Jumbotron.js'
import SearchBar from '../searchBar/SearchBar.js'
import JobsBoard from '../jobsBoard/JobsBoard.js'
import Footer from './Footer.js';

const Main = () => {

  const [flag, setFlag] = useState(false);
  const [jobs, setJobs] = useState([]);

  
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <SearchBar setFlag={setFlag} setJobs={setJobs}/>
      {
        !flag ? <></> : <JobsBoard jobs={jobs}/>
      }
      <Footer />
    </div>
  )
}

export default Main