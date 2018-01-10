import { injectGlobal } from 'styled-components';
import theme from './theme';

const initStyles = () => {
  injectGlobal`
    html,
    body {
      width: 100%;
      height: 100%;
      font-family: ${theme.fontDefault}
    }
    
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
`;
};

export default initStyles;
