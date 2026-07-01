
import './App.css'
import SearchBar from './components/searchbar'

function App() {

  return (
    <>
      <h1>GitHub Explorer</h1>
      <SearchBar onSearch={(query)=>console.log(query)} />
    </>
  )
}

export default App
