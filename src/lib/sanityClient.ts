import { createClient } from "next-sanity";
import { apiVersion, dataset,projectId,useCdn } from "../../sanity/env";

export const client=createClient({
    token:process.env.SANITY_Access_Token,
    apiVersion:"v2023-07-05",
    dataset:"production",
    projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn:useCdn
})