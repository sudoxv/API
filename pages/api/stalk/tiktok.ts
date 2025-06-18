import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

/**
 * @openapi
 * /api/stalk/tiktok:
 *   get:
 *     summary: Tiktok Stalker
 *     parameters:
 *       - in: query
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, query } = req;

    if (method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!query.username) {
        return res.status(400).json({ msg: 'Username parameter could not be found' });
    }

    try {
        const { data } = await axios.get('https://api.koboo.my.id/api/stalk/tiktok?username=' + query.username);
        return res.status(200).json(data);
    } catch (e) {
        return res.status(500).json({ error: 'Failed to fetch TikTok data' });
    }
}
