import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    
    switch (method) {
        case 'GET':
        return res.status(200).json({ msg: "Yaya bisa" });
    default:
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
