export const TMDB_CONFIG = {
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchPopularMovies = async({query}:{query:string})=>{
    
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`
    


    const response = await fetch(endpoint,{
        method:'GET',
        headers:TMDB_CONFIG.headers,
    });

    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGFjN2QwOWVhMzhkODY3MzE4NTAyMGNlMDg2YWE4YyIsIm5iZiI6MTc1ODIwNTUwMi4xMTksInN1YiI6IjY4Y2MxNjNlYTQ3NWU2ODI2YmJkMGM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nba3lDD4Ga5AbN2YTlbDxPIi4goHnNKGDA1uvlMnGTs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));