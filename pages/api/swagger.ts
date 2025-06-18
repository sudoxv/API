import { NextApiRequest, NextApiResponse } from 'next';
import specs from '../../swagger';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(specs);
}
