import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchParticipant } from '@/data/backend';
import type { UUID } from '@/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.query.id as UUID;
    const { data, error } = await fetchParticipant(id);

    if (error)
        res.status(500).json(error);
    else
        res.status(200).json(data)
}
