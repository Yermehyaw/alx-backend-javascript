export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let countEndpointCall = weakMap.get(endpoint) || 0; // no of times a spec endpoint is called

  countEndpointCall += 1;

  if (countEndpointCall >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, countEndpointCall);
}
