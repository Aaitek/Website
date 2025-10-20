import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text';
  info: {
    displayName: 'Rich Text';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface CommonPublishing extends Struct.ComponentSchema {
  collectionName: 'components_common_publishing';
  info: {
    description: 'Display dates and flags';
    displayName: 'Publishing';
  };
  attributes: {
    displayDate: Schema.Attribute.DateTime;
    hideAuthor: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    readingTime: Schema.Attribute.Integer;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seo';
  info: {
    description: 'SEO and social meta';
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    nofollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface MediaHeroImages extends Struct.ComponentSchema {
  collectionName: 'components_media_hero_images';
  info: {
    description: 'Header + thumbnail bundle';
    displayName: 'Hero Images';
  };
  attributes: {
    altText: Schema.Attribute.String;
    credit: Schema.Attribute.String;
    headerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

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
      'blocks.image': BlocksImage;
      'blocks.rich-text': BlocksRichText;
      'common.publishing': CommonPublishing;
      'common.seo': CommonSeo;
      'media.hero-images': MediaHeroImages;
      'related.related': RelatedRelated;
      'related.related-articles': RelatedRelatedArticles;
    }
  }
}
