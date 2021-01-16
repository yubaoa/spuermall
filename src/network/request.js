import axios from 'axios'
export function instances(config) {
  
    const instance = axios.create({
      //baseURL: 'http://123.207.32.32:8000',
      baseURL: 'http://152.136.185.210:7878/api/m5',
      timeout: 5000
    })
    instance.interceptors.request.use(aaa => {
      //console.log(aaa);
      return aaa
    }, err => {console.log('err'+err);
    })
  instance.interceptors.response.use(res => {
    return res.data.data;
  }, err => console.log(err))
    return instance(config)
  }