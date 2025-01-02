import { request } from '@/utils/request.ts'

export const login = () => {
    return request({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
    //   data: data,
    });
};