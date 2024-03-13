import { createContext,useState } from "react";



export const AppContext = createContext();

export function AppContextProvider({children}){
  
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    
    //data filling
    async function fetchBlogPosts(){
     setLoading(true);
    let  baseUrl = "https://api.punkapi.com/v2/beers";
    let url = `${baseUrl}`
     try {
        const result = await fetch(url);
        const data = await result.json();
        setPosts(data);
     } catch (error) {
        console.log("In Fetching data problem occur");
        setPosts([]);
     }
     setLoading(false);
    }

    const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    fetchBlogPosts,
}

return  <AppContext.Provider value = {value}>
    {children}
</AppContext.Provider>

}