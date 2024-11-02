import { Block } from 'payload'

export const SocialMediaEmbed: Block = {
  slug: 'socialMediaEmbed',
  labels: {
    singular: 'Social Media Embed',
    plural: 'Social Media Embeds',
  },
  fields: [
    {
      name: 'type',
      label: 'Type',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Facebook',
          value: 'facebook',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'Pinterest',
          value: 'pinterest',
        },
        {
          label: 'Youtube',
          value: 'youtube',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin',
        },
        {
          label: 'TikTok',
          value: 'tiktok',
        },
        {
          label: 'Twitter',
          value: 'twitter',
        },
      ],
    },
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
    },
  ],
}
