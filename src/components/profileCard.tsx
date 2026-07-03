import type { GithubUser } from "../types/github";

interface Props {
    user: GithubUser;

}

export default function ProfileCard({user}: Props){
    return(
        <div>
            <img src={user.avatar_url} alt="User image" />
            <p>Name: {user.name}</p>
            <p>UserName: {user.login}</p>
            <p>Bio: {user.bio}</p>
            <div>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
            <span>Repos: {user.public_repos}</span>
            </div>
        </div>
    )
}