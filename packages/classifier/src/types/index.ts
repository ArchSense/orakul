export enum Tags {
  SERVICE = 'service',
  MODULE = 'module',
  UTIL = 'util',
  CONTROLLER = 'controller',
  MODEL = 'model,'
}
;

export type TagsInput = {
  fileName: string;
  language: 'typescript';
  fileContent: string;
};

export type TagsResult = {
  fileName: string;
  tags: Tags[];
};
