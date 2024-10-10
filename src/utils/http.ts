import axios, { type AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN',
  }
});

export const post = async (url: string, payload: Object): Promise<AxiosResponse<any, any>> => {
  const response = await apiClient.post(url, payload);

  return response
}