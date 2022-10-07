import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/stylesheet'
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const customViewports = {
  phone: {
    name: 'Phone',
    styles: {
      width: '400px',
      height: '500px',
    },
  },
};

export const parameters = {
  decorators: theme,
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
       ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}