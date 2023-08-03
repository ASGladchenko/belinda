import axios from 'axios';
import useSWR from 'swr';
import Link from 'next/link';

import { productRoot } from '@/http';
import { useDelayAnimation } from '@/hooks';
import { Delete, Edit } from '@/assets/icons';
import { Button, Overlay, showMessage } from '@/components';

import { getStyles } from './styles';
import { IProductLink } from './types';
import { useState } from 'react';

export const ProductLink = ({
  id,
  url,
  name,
  onEdit,
  baseHref,
  notModify,
  swrStorage,
}: IProductLink) => {
  const [isFetching, setIsFetching] = useState(false);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(300);

  const { link, remove, edit, removeContainer, text } = getStyles();
  const { data, mutate } = useSWR(swrStorage);

  const onDelete = async (id: string) => {
    setIsFetching(true);
    try {
      await productRoot.remove(id, url);
      if (data?.length) {
        mutate(data?.filter((item) => item.id !== id));
      }

      showMessage.success('Deleted');
    } catch (error) {
      if (axios.isAxiosError(error)){
      showMessage.error(error.response?.data.message);}
    } finally {
      setOpen(false);
      setIsFetching(false);
    }
  };

  return (
    <>
      <Link href={baseHref + id} className={link}>
        <p>{name}</p>

        <div className="flex gap-3">
          {!notModify && (
            <Button
              type="button"
              className={edit}
              variant="ghost-primary"
              icon={<Edit width={24} height={22} />}
              onClick={(event) => {
                event.preventDefault();
                if (onEdit) onEdit(id);
              }}
            />
          )}

          <Button
            type="button"
            className={remove}
            variant="ghost-primary"
            icon={<Delete width={24} height={24} />}
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
          />
        </div>
      </Link>

      <Overlay
        isOpen={isOpen}
        duration={300}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <div className={removeContainer}>
          <h2 className={`text-3xl ${text}`}>Delete</h2>

          <p className={`text-xl ${text}`}>
            Are you sure you want to delete{' '}
            <span className="text-2xl capitalize">{name}?</span>
          </p>

          <div className="flex justify-end w-full gap-10">
            <Button
              text="Cancel"
              variant="primary"
              onClick={() => setOpen(false)}
              className=" max-w-[80px] md:max-w-[150px] w-full"
            />

            <Button
              text="Delete"
              variant="secondary"
              disabled={isFetching}
              isFetching={isFetching}
              onClick={() => onDelete(id)}
              className=" max-w-[80px] md:max-w-[150px] w-full"
            />
          </div>
        </div>
      </Overlay>
    </>
  );
};
