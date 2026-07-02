import type { GithubUser } from "../types/github";

interface Props {
    user: GithubUser;

}

export default function ProfileCard({user}: Props){
    return(
        <div>
            <img src={user.avatar_url} alt="User image" />
            <p>{user.name}</p>
            <p>{user.login}</p>
            <p>{user.bio}</p>
            <p>{user.followers}, {user.following}, {user.public_repos}</p>
        </div>
    )
}