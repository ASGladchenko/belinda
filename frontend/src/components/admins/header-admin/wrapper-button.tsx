'use client';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next-intl/client';

import { Button } from '@/components';
import { Login } from '@/assets/icons';
import { removeTokensCookies } from '@/utils';
import { USE_AUTH, routes } from '@/constants';

export const WrapperButton = ({ text }: { text: string }) => {
  const router = useRouter();

  const { mutate } = useSWRConfig();

  const onExit = () => {
    removeTokensCookies();
    mutate(USE_AUTH, null);
    router.push(routes.login);
  };

  return (
    <Button
      text={text}
      type="button"
      onClick={onExit}
      className="px-2 py-1"
      variant="ghost-primary"
      icon={<Login width={20} height={20} />}
    />
  );
};
