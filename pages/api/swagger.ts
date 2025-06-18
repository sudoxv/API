import { NextApiRequest, NextApiResponse } from 'next';
import specs from '../../../swagger'; // pastikan path ini benar

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(specs);
}
