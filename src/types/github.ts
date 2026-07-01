export interface GithubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string;
    location: string;
}

export interface GithubRepo {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
    updated_at: string;
}