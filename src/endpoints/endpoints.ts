type ApiEndpoints = {
  [key: string]: string;
};

const v1: string = '/v1'

const rawEndpoints: ApiEndpoints = {
  LOGIN: '/login',
}

const endpoints = Object.keys(rawEndpoints).reduce((acc, key) => {
  acc[key as keyof ApiEndpoints] = `${v1}${rawEndpoints[key as keyof ApiEndpoints]}`;
  return acc;
}, {} as ApiEndpoints);

export default endpoints;
