import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetLanguage = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const acceptLanguage = request.headers['accept-language'];

    const supportedLanguages = ['en', 'ua'];
    const defaultLanguage = 'en';

    const lang = acceptLanguage
      ? supportedLanguages.find((lang) =>
          acceptLanguage.toLowerCase().startsWith(lang),
        ) || defaultLanguage
      : defaultLanguage;

    return lang;
  },
);

export type LanguageType = 'en' | 'ua';
