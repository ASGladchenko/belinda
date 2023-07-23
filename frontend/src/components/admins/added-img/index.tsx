'use client';
import { useState } from 'react';
import { Field, FieldProps } from 'formik';

import { Plus } from '@/assets/icons';
import { showMessage } from '@/components/toast';
import { AddedImg, IHandleImageChange, IOnClear } from './types';

const AddedImg = ({ imgUrl, name }: AddedImg) => {
  const [previewURL, setPreviewURL] = useState<string>(imgUrl);

  const handleImageChange = ({ event, form }: IHandleImageChange) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (file?.type.replace('image/', '') !== 'png') {
      showMessage.error('.png extension only');
      setPreviewURL('');
      return;
    }

    const imageURL = URL.createObjectURL(file);
    setPreviewURL(imageURL);
    form.setFieldValue(name, file);
    event.target.value = '';
  };

  const onClear = ({ event, form }: IOnClear) => {
    event.preventDefault();
    form.setFieldValue(name, '');
    setPreviewURL('');
  };

  return (
    <Field name={name}>
      {({ form }: FieldProps) => {
        return (
          <label className="mt-0 sm:mt-3 relative flex w-full h-full min-h-[128px] rounded-xl border-admin-primary border-2 border-dashed max-w-[128px] fill-admin-primary cursor-pointer hover:border-admin-primaryHover hover:fill-admin-primaryHover transition">
            <div className="flex items-center justify-center w-full">
              {previewURL === '' && imgUrl === '' && (
                <Plus width={64} height={64} />
              )}

              <input
                type="file"
                className="hidden w-0 h-0"
                onChange={(event) => handleImageChange({ event, form })}
              />

              {previewURL && (
                <img
                  alt="Preview"
                  className="block w-full"
                  src={previewURL ? previewURL : imgUrl}
                />
              )}

              {previewURL && (
                <div
                  className="absolute top-0 right-0 rotate-45 translate-x-1/2 -translate-y-1/2 rounded-full bg-admin-lighten-main dark:bg-admin-darken-second group"
                  onClick={(event) => onClear({ event, form })}
                >
                  <Plus
                    width={20}
                    height={20}
                    className="transition group-hover:fill-red-600"
                  />
                </div>
              )}
            </div>
          </label>
        );
      }}
    </Field>
  );
};

export { AddedImg };
