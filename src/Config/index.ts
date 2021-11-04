export type ConfigType = {
  BASE_URL: string
  API_URL: string
  MEDIA_URL: string
}

export const getConfig = (BASE_URL = 'https://localhost:3000') => {
  // const BASE_URL = store.getState().config?.baseurl || 'https://localhost:3000'
  return {
    // API_URL: 'https://10.0.2.2:3000/api/',
    // API_URL: 'http://cloud.akshay-naik.com:3000/api',
    // MEDIA_URL: 'http://cloud.akshay-naik.com:3000/media',
    BASE_URL: BASE_URL,
    API_URL: BASE_URL + '/api',
    MEDIA_URL: BASE_URL + '/media',
  } as ConfigType
}
