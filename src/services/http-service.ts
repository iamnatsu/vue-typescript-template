import axios from 'axios';
export const http = axios.create();

export function get(url: string) {
  return http.get(url);
}

export function post(url: string, data: any) {
    return http.post(url, data);
}

export function put(url: string, data: any) {
    return http.post(url, data);
}

export function del(url: string) {
    return http.delete(url);
}
