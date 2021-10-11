
import { SetStateAction, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import printJobs from './print_jobs_response.json'

const App = () => {
  const data = printJobs.data
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([{ printer_name: '', status: '', owner: '', created_at: '' }]);

  const searchItems = (searchValue: SetStateAction<string>) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = data.filter((item) => Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(data)
    }
  }

  return (
    <div className="App">

      <input type="text" placeholder='Search...' onChange={(e) => searchItems(e.target.value)} />
      {searchInput.length > 1 ?
        filteredResults.map((job, i) => <div key={i}>
          <h2>{job.printer_name}</h2>
          <strong><p>{job.status}</p></strong>
          <p>{job.owner}</p>
          <p>{job.created_at}</p>
        </div>)
        :
        data.map((job, i) => <div key={i}>
          <h2>{job.printer_name}</h2>
          <strong><p>{job.status}</p></strong>
          <p>{job.owner}</p>
          <p>{job.created_at}</p>
        </div>
        )
      }
    </div>
  );
}

export default App;
