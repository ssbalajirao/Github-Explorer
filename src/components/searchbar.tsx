import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
    onSearch: (query: string)=> void;
}

export default function SearchBar({ onSearch }: Props) {
    const [query, setQuery] = useState("");
    const debounced = useDebounce(query, 300);

    useEffect(()=>{
        if(debounced) onSearch(debounced);
    }, [debounced]);
    
    return(
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Github UserName!"
        />
    );
}