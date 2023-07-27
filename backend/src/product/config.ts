export const putProperty = {
  name: { type: 'string' },
  name_ua: { type: 'string' },
  description: { type: 'string' },
  description_ua: { type: 'string' },
  img_url: {
    type: 'string',
    format: 'binary',
  },
};

export const postProperty = {
  name: { type: 'string' },
  name_ua: { type: 'string' },
  description: { type: 'string' },
  description_ua: { type: 'string' },
  categoryId: { type: 'string' },
  img_url: {
    type: 'string',
    format: 'binary',
  },
};
