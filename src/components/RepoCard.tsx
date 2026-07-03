import type { GithubRepo } from "../types/github";

interface Props{
    repo: GithubRepo;
}

export default function repoCard({repo}: Props){
    return(
        <div>
            <p>Repo Name: {repo.name}</p>
            <p>Description: {repo.description}</p>
            <p>Star count: {repo.stargazers_count}</p>
            <p>Language: {repo.language}</p>
            <p>Fork Count: {repo.forks_count}</p>
            <p>Updated at: {repo.updated_at}</p>
            <a href={repo.html_url}>{repo.name}</a>
        </div>
    )
}