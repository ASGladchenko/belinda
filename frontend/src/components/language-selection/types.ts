export interface ILanguages {
  abb: string;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ILanguageSelection {
  selectLang: string;
  onSelect: IOnSelect;
}

export interface ISelectableLanguage extends ILanguages {
  onClose: () => void;
  onSelect: IOnSelect;
}

export type IOnSelectArgs = string;

export type IOnSelect = (selected: IOnSelectArgs) => void;
