'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Field, FieldProps } from 'formik';

import { http } from '@/constants';
import { Plus } from '@/assets/icons';
import { showMessage } from '@/components/toast';

import { IAddedImg, IHandleImageChange, IOnClear } from './types';

const AddedImg = ({ imgUrl, name }: IAddedImg) => {
  const [previewURL, setPreviewURL] = useState<string>('');

  // TODO Change types
  const imageLoaderServer = ({ src, width, quality }: any) => {
    return `${http.url}/${src}?w=${width}&q=${quality || 75}`;
  };

  const handleImageChange = ({ event, form }: IHandleImageChange) => {
    const file = event.target.files && event.target.files[0];

    if (!file) return;

    if (file?.type.replace('image/', '') !== 'png') {
      showMessage.error('.png extension only');
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

  useEffect(() => {
    if (imgUrl) {
      setPreviewURL(imgUrl.replace(`${http.url}/`, ''));
    }
  }, []);

  return (
    <Field name={name}>
      {({ form }: FieldProps) => {
        return (
          <label className="mt-0 sm:mt-3 relative flex w-full h-[128px] rounded-xl p-1 border-admin-primary border-2 border-dashed max-w-[128px] fill-admin-primary cursor-pointer hover:border-admin-primaryHover hover:fill-admin-primaryHover transition">
            <div className="flex items-center justify-center w-full">
              {!previewURL && !imgUrl && <Plus width={64} height={64} />}
              <input
                type="file"
                accept=".png"
                className="hidden w-0 h-0"
                onChange={(event) => handleImageChange({ event, form })}
              />
              {previewURL && (
                <Image
                  alt={name}
                  width={124}
                  height={124}
                  src={previewURL}
                  loader={imageLoaderServer}
                />
              )}

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
            </div>
          </label>
        );
      }}
    </Field>
  );
};

export { AddedImg };
