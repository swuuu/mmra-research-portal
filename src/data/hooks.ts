import useSWR from "swr";

import { DatabaseItem, Investigator, Participant, Project, UUID } from "@/types";

const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

function makeDatabaseItemHook<DataType extends DatabaseItem>(makeUrl: (id: UUID) => string) {
    return function (id: UUID, initialData?: DataType) {
        const { data, error } = useSWR<DataType>(makeUrl(id), fetcher, { initialData });

        if (error) throw new Error(error);

        return data;
    }
}

export const useInvestigator = makeDatabaseItemHook<Investigator>(id => `/api/investigator/${id}`);
export const useParticipant = makeDatabaseItemHook<Participant>(id => `/api/participant/${id}`);
export const useProject = makeDatabaseItemHook<Project>(id => `/api/project/${id}`);

export function useProjects(ids: UUID[], initialData?: Project[]) {
    return ids.map((id, i) => useProject(id, initialData?.[i]));
}