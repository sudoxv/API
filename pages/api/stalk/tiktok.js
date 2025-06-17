import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;
    
    switch (method) {
        case 'GET':
            if (!query.username) {
                return res.status(400).json({ msg: 'Username parameter could not be found' });
            }
            const { data } = await axios.get('https://api.koboo.my.id/api/stalk/tiktok?username=' + query.username);
            return res.status(200).json(data);
        default:
            return res.status(405).json({ error: 'Method not allowed' });
    }
}
