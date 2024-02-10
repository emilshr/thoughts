import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { cache } from "react";

const databaseId = process.env.NOTION_DATABASE_ID ?? "DATABASE_ID";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(() => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "published",
      },
    },
    database_id: databaseId,
  });
});

export const getPageContent = cache(async (pageId: string) => {
  const res = await notionClient.blocks.children.list({ block_id: pageId });
  return res.results as BlockObjectResponse[];
});

export const getPageBySlug = cache(async (slug: string) => {
  const res = await notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      and: [
        {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
        {
          property: "Status",
          select: {
            equals: "published",
          },
        },
      ],
    },
  });
  return res.results[0] as PageObjectResponse | undefined;
});
