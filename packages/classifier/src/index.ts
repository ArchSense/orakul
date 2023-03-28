import { processTypescript } from './processors/typescript';
import { TagsInput, TagsResult } from './types';

export const getTags = async ({ fileContent, fileName, language }: TagsInput): Promise<TagsResult> => {
  const res: TagsResult = { fileName, tags: [] };
  switch (language) {
    case 'typescript':
      const tags = await processTypescript({fileName, fileContent});
      res.tags = tags;
      break;
  }
  return res;
};
 