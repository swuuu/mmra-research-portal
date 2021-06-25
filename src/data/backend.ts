import { createClient } from '@supabase/supabase-js';

import type { UUID } from '@/types';

export const supabase = createClient('https://mydccwohktthpzprtgkr.supabase.co', process.env.SUPABASE_KEY!);

export const fetchInvestigator = (id: UUID) => supabase.from('investigators').select('*').eq('id', id);

export const fetchParticipant = (id: UUID) => supabase.from('participants').select('*').eq('id', id);

export const fetchProject = (id: UUID) => supabase.from('projects').select('*').eq('id', id);

export const fetchProjects = () => { throw new Error('fetchProjects() unimplemented') };

export const fetchProjectIDs = () => supabase.from('projects').select('id');