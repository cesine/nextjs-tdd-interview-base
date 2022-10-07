type brand = 'chene' | 'sapin' | 'palmier';
export const BRANDS: brand[] = ['chene', 'sapin', 'palmier']

export function getBrand (hostname = '') :  string {
  let currentHost = hostname.includes('localhost')
      ? hostname.replace(`.localhost:3000`, '')
      : hostname
          .replace(/www\.(.*)\.com/, '$1')
          .replace(`.ferme.ca`, '')
          .replace(`.platformize.vercel.app`, '')

  if (!currentHost || !isValidBrand(currentHost)) {
    // TODO cant use palmier because it is a 404 which prevents cypress from starting
    console.warn(`${currentHost} is not a valid brand, overriding it to palmier`)
    currentHost = 'palmier';
  }

  return currentHost;
}


export function isValidBrand (override : any) : override is brand  {
  return BRANDS.indexOf(override) > -1;
}
