import { useState, useEffect } from "react";

export function useFetch<T>(url:string){
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        if (!url) return;

        const fetchData = async ()=>{
            setLoading(true)
            setError(null);

            try{
                const response  = await fetch(url);
                if(!response.ok) throw new Error("User Not Found");
                const result =  await response.json();
                setData(result);

            }catch(err: any){
                setError(err.message);

            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[url]);
    return{data, loading, error};
}