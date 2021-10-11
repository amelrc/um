import { SetStateAction, useState } from 'react';
import './App.css';
import printJobs from './print_jobs_response.json';
import styled from 'styled-components'

const CardsWrap = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
padding: 16px;
border: 1px solid gray;
width: 260px;
`

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
      <h1>Available Print Jobs</h1>
      <input type="text" placeholder='Search...' value={searchInput} onChange={(e) => searchItems(e.target.value)} />
      <CardsWrap data-testid='section'>
        {searchInput.length > 1 ?
          filteredResults.map((job, i) => <Card key={i}>
            <h2>{job.printer_name}</h2>
            <p>status: <strong>{job.status}</strong></p>
            <p>owned by: <strong>{job.owner}</strong></p>
            <p>{job.created_at}</p>
          </Card>)
          :
          data.map((job, i) => <Card key={i}>
            <h2>{job.printer_name}</h2>
            <p>status: <strong>{job.status}</strong></p>
            <p> owned by: <strong>{job.owner}</strong></p>
            <p>{job.created_at}</p>
          </Card>
          )
        }
      </CardsWrap>
    </div>
  );
}

export default App;
