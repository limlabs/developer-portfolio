/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    media: Media;
    pages: Page;
    projects: Project;
    technologies: Technology;
    users: User;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    header: Header;
    profile: Profile;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  layout?:
    | (
        | {
            contentFields?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: number | Page;
                        } | null)
                      | ({
                          relationTo: 'projects';
                          value: number | Project;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            form: number | Form;
            id?: string | null;
            blockName?: string | null;
            blockType: 'form';
          }
        | {
            mediaFields?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  media: number | Media;
                  mediaFit?: ('cover' | 'contain') | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            fields?:
              | {
                  alignment?: ('contentMedia' | 'mediaContent') | null;
                  mediaSize?: ('oneThird' | 'half' | 'twoThirds') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: number | Page;
                        } | null)
                      | ({
                          relationTo: 'projects';
                          value: number | Project;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  media: number | Media;
                  mediaFit?: ('cover' | 'contain') | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaContent';
          }
        | {
            id?: string | null;
            blockName?: string | null;
            blockType: 'profile-cta';
          }
        | {
            project: (number | Project)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'projectGrid';
          }
      )[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  title: string;
  description: {
    [k: string]: unknown;
  }[];
  technologiesUsed: (number | Technology)[];
  featuredImage?: number | Media | null;
  layout?:
    | (
        | {
            contentFields?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: number | Page;
                        } | null)
                      | ({
                          relationTo: 'projects';
                          value: number | Project;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            richText?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            form: number | Form;
            id?: string | null;
            blockName?: string | null;
            blockType: 'form';
          }
        | {
            mediaFields?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  media: number | Media;
                  mediaFit?: ('cover' | 'contain') | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            fields?:
              | {
                  alignment?: ('contentMedia' | 'mediaContent') | null;
                  mediaSize?: ('oneThird' | 'half' | 'twoThirds') | null;
                  richText?:
                    | {
                        [k: string]: unknown;
                      }[]
                    | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: number | Page;
                        } | null)
                      | ({
                          relationTo: 'projects';
                          value: number | Project;
                        } | null);
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  media: number | Media;
                  mediaFit?: ('cover' | 'contain') | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaContent';
          }
      )[]
    | null;
  slug?: string | null;
  role: ('uiUxDesigner' | 'frontEndDeveloper' | 'backEndDeveloper')[];
  startDate?: string | null;
  endDate?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "technologies".
 */
export interface Technology {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'pages';
                value: number | Page;
              } | null)
            | ({
                relationTo: 'projects';
                value: number | Project;
              } | null);
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "profile".
 */
export interface Profile {
  id: number;
  name: string;
  location?: string | null;
  title?: string | null;
  aboutMe?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  profileImage?: number | Media | null;
  socialLinks?: {
    github?: string | null;
    linkedin?: string | null;
    email?: string | null;
    twitter?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}