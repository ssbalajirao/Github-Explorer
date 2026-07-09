import type { GithubRepo } from "../types/github";

interface Props{
    sortBy: "stars" | "forks" | "updated"
    onSortChange: (value:string) => void
    language: string[]
    filterBy: string
    onfilterChange: (value:string) => void
}

export default function RepoFilter ({ sortBy, onSortChange, filterBy, onfilterChange, language }: Props) {
    return(
        <div>
            Sort By:
            <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="stars">Most Stars</option>
                <option value="forks">Most Forks</option>
                <option value="updated">Recently Updated</option>
            </select>
            Language Filter:
            <select value={filterBy} onChange={(e) => onfilterChange(e.target.value)}>
                <option value="all">all</option>
                {language.map(lang =>(
                    <option key={lang} value={lang}>{lang}</option>
                ))}
            </select>
        </div>
    )
}