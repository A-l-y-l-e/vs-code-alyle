
type ThemeVariables = any;
const lyl = {} as any;

export const STYLES = (theme: ThemeVariables) => {
  return {
    root: lyl `{
      // comment
      font-family: ${theme.typography.fontFamily}
      color: ${theme.text.default}
      border-radius: 3px
      outline: none
      font-weight: 500
      box-sizing: border-box
      border: 0
      padding: 0 1em
    }`
  };
};
