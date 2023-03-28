import { Tags, TagsInput } from '../types';

type TypescriptProcessorInput = Omit<TagsInput, 'language'> 
export const processTypescript = async ({}: TypescriptProcessorInput): Promise<Tags[]> => {
  return [];
};