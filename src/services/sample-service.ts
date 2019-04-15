import * as HttpService from './http-service';

const BASE_URL = 'https://httpbin.org/get';

export function get(id: string) {
  console.log(id || 'null');
  return HttpService.get(BASE_URL /* + id */);
}
