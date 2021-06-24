import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/data/backend';
import type { UUID } from '@/types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id = req.query.id as UUID;
    const { data, error } = await supabase.from('investigators').select('*').eq('id', id);
    res.status(200).json({ name: 'John Doe' })
}
