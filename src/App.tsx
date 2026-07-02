
  import { useState } from 'react';
  import './App.css'
  import SearchBar from './components/searchbar';
  import { useFetch } from './hooks/useFetch';

  function App() {

    const [username, setUsername] = useState<string | null>(null);
    const {data, loading, error} = useFetch(
      username? `https://api.github.com/users/${username}`: ""
    );
    console.log(data, loading, error);
    
    
    return (
      <>
        <h1>GitHub Explorer</h1>
        <SearchBar onSearch={(query)=>{setUsername(query);}}/>


      </>
    )
  }

  export default App
