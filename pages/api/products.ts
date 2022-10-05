import type { NextApiRequest, NextApiResponse } from 'next'
import { getBrand } from '@lib/brand';

const products = [{
  id: '123-abc',
  name: '2in flooring',
  brand: 'chene',
  thumbnail: 'https://image.shutterstock.com/image-photo/-260nw-731352850.jpg'
}, {
  id: '456-efg',
  name: 'spruce',
  brand: 'sapin',
  thumbnail: 'https://image.shutterstock.com/image-photo/-260nw-1932235397.jpg'
}, {
  id: '567-ihj',
  name: 'fur',
  brand: 'sapin',
  thumbnail: 'https://image.shutterstock.com/image-photo/-260nw-41031721.jpg'
}, {
  id: '789-hjk',
  name: 'Date Palm',
  brand: 'palmier',
  thumbnail: 'https://image.shutterstock.com/image-photo/-260nw-563268664.jpg'
}];

/**
 * @docs https://nextjs.org/docs/api-routes/introduction
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('query', req.query)
  const brand = req.query.brand || getBrand(req.headers.host);

  res.json({
    products: products.filter((product) => product.brand === brand)
  })
}
