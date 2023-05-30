import { createMuiTheme } from 'material-ui/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  typography: {
    fontSize: defaultTheme.typography.fontSize + 2,
  },
});

export default theme;
