import axios from "axios";

export async function getData(endPoint: string): Promise<any> {
  const request = await axios.get(`https://api.themoviedb.org/3${endPoint}`);
  return request;
}
