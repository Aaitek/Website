import type { Schema, Struct } from '@strapi/strapi';

export interface RelatedRelated extends Struct.ComponentSchema {
  collectionName: 'components_related_relateds';
  info: {
    displayName: 'Related';
  };
  attributes: {};
}

export interface RelatedRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_related_related_articles';
  info: {
    displayName: 'Related Articles';
    icon: 'magic';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'related.related': RelatedRelated;
      'related.related-articles': RelatedRelatedArticles;
    }
  }
}
