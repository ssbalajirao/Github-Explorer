
  import { useState } from 'react';
  import './App.css'
  import SearchBar from './components/searchbar';
  import { useFetch } from './hooks/useFetch';
  import ProfileCard from './components/profileCard';
  import type { GithubRepo, GithubUser } from './types/github';
  import RepoCard from './components/repoCard';
  function App() {

    const [username, setUsername] = useState<string | null>(null);
    const {data, loading, error} = useFetch<GithubUser>(
      username? `https://api.github.com/users/${username}`: ""
    );
    // console.log(data, loading, error);
    const {data: repoData, loading: repoLoading, error:repoError} = useFetch<GithubRepo[]>(
      username? `https://api.github.com/users/${username}/repos`:""
    )
    
    
    return (
      <>
        <h1>GitHub Explorer</h1>
        <SearchBar onSearch={(query)=>{setUsername(query);}} onClear={()=> setUsername(null)}/>
        {loading && <p>Loading...</p>}
        {error && <p>Error finding UserName...</p>}
        {data && <ProfileCard user={data}/>}
        {repoData && repoData.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}



      </>
    )
  }

  export default App
