import axios, { AxiosRequestConfig, ResponseType } from 'axios';

interface FetchOptions extends AxiosRequestConfig {
  method: string,
  url: string,
  responseType: ResponseType | undefined
}

export const fetchData = async (options: FetchOptions): Promise<any> => {
  try {
    const response = await axios(options);
    return response.data;
  } catch (err : any) {
    throw new Error(err);
  }
};