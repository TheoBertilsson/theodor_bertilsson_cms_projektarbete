import { Document } from "@contentful/rich-text-types";

export interface AboutMeFields {
  name: string;
  aboutMeInfo: Document;
  profile: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export type EducationFields = {
  title: string;
  description: Document;
};

export type ExperienceFields = {
  fields: {
    title: string;
    description: Document;
  };
};

export type ContentfulEntry<T> = {
  sys: {
    id: string;
  };
  fields: T;
};

export type ContentfulResponse<T> = {
  items: ContentfulEntry<T>[];
};
