type site = 'chene' | 'sapin' | 'palmier';
export const SITES: site[] = ['chene', 'sapin', 'palmier']

export function getSite (hostname = '') :  string {
  let currentHost = hostname.includes('localhost')
      ? hostname.replace('.localhost:3000', '')
      : hostname
          .replace(/www\.(.*)\.com/, '$1')
          .replace(`.ferme.ca`, '')
          .replace(`.platformize.vercel.app`, '')

  if (!currentHost || !isValidSite(currentHost)) {
    console.warn(`${currentHost} is not a valid site, overriding it to palmier`)
    currentHost = /[^a-zAZ0-9]/.test(currentHost) ? 'palmier' : currentHost;
  }

  return currentHost;
}


export function isValidSite (override : any) : override is site  {
  return SITES.indexOf(override) > -1;
}
