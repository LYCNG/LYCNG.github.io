import.meta.env 

interface RequestOptions {
  method: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

export const exerciseOptions:RequestOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'zuka.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY as string,
  },
};

export const youtubeOptions:RequestOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url:string, options:RequestOptions) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};