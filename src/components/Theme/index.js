import React, { useState } from 'react';
import PropTypes from "prop-types";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export const useDarkMode = () => {
  const timeNowHour = new Date().getHours();//取得当前时间的小时
  const [ctlDarkMode, setCtlDarkMode] = useState(timeNowHour > 6 && timeNowHour < 18 ? 'dark' : 'light');
  const toggle = ()=> setCtlDarkMode(ctlDarkMode === 'light' ? 'dark' : 'light');

  return [ctlDarkMode, toggle];
}

export const ThemeSwitch = ({ mode, onChange })=> {
  const Comp = mode === 'light' ? Brightness7Icon : Brightness4Icon;

  return (
    <Comp 
      onClick={onChange}
    />
  )
  // <>
  //   <Brightness7Icon />
  //   <Switch
  //     checked={mode === 'light'}
  //     onChange={onChange}
  //     color="primary"
  //     name="checked"
  //     inputProps={{ 'aria-label': 'primary checkbox' }}
  //   />
  //   <Brightness4Icon />
  // </>
}

export const Theme = ({ children, mode }) => {
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`);

  const theme = React.useMemo(() =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  );
}

export const themeSwitchProp = {
  mode: PropTypes.oneOf(['dark', 'light']),
  onChange: PropTypes.func,
};

ThemeSwitch.propTypes = {
  ...themeSwitchProp,
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['light', 'dark']),
};