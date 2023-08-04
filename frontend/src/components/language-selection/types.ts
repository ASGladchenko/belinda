export interface ILanguages {
  abb: string;
  name: string;
  Icon: React.ReactNode;
}

export interface ISelectableLanguage extends ILanguages {
  onClose: () => void;
}

export type IOnSelectArgs = string;

export type IOnSelect = (lang: IOnSelectArgs) => void;
