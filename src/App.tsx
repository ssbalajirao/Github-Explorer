
  import { useState, useEffect } from 'react';
  import './App.css'
  import SearchBar from './components/searchbar';
  import { useFetch } from './hooks/useFetch';
  import ProfileCard from './components/profileCard';
  import type { GithubRepo, GithubUser } from './types/github';
  import RepoCard from './components/RepoCard';
  import RepoFilter from './components/RepoFilters';
  import { userHistoryStore } from './store/userHistoryStore';
  function App() {

    const [username, setUsername] = useState<string | null>(null);
    const {data, loading, error} = useFetch<GithubUser>(
      username? `https://api.github.com/users/${username}`: ""
    );
    
    const {data: repoData, loading: repoLoading, error:repoError} = useFetch<GithubRepo[]>(
      username? `https://api.github.com/users/${username}/repos`:""
    );
    // console.log(repoData, loading, error);
    const [sortBy, setSortBy] = useState<"stars"|"forks"|"updated">("stars");
    
    // Custom sorting function 
    const sortedRepos = repoData ? [...repoData].sort((a, b)=>{
      if(sortBy ==="stars") return  b.stargazers_count - a.stargazers_count;
      if(sortBy === "forks") return b.forks_count - a.forks_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();

    }) :[];

    // getting all the languages from the repodata 
    const languages = repoData ? [...new Set(repoData.map(repoData => repoData.language).filter(Boolean))]:[];
    console.log(languages);

    const [filterby, setFilterBy] = useState("all");

    const filteredRepos = filterby === "all" ? sortedRepos : sortedRepos.filter(repoData => repoData.language === filterby);

    // user history 
    const {history, addToHistory} = userHistoryStore();
    
    useEffect(()=>{
      if (data && username) addToHistory(username);
    },[data]);
    
    return (
      <>
        <h1>GitHub Explorer</h1>
        <SearchBar onSearch={(query)=>{setUsername(query);
          // addToHistory(query);
        }} onClear={()=> setUsername(null)}/>
        {history.map(item =>(
          <button key={item} onClick={()=> setUsername(item)}>{item}</button>
        ))}
        {loading && <p>Loading...</p>}
        {error && <p>Error finding UserName...</p>}
        {data && <ProfileCard user={data}/>}
        <RepoFilter sortBy={sortBy} onSortChange={(value)=>setSortBy(value as "stars" | "forks" | "updated")} language={languages} filterBy={filterby} onfilterChange={(value)=>setFilterBy(value)}/>
        {filteredRepos && filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}



      </>
    )
  }

  export default App
