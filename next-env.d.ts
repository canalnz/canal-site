/// <reference types="next" />
/// <reference types="next/types/global" />

// https://stackoverflow.com/a/44228423/
declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
