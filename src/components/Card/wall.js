import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import Tab from './tab';

const useStyles = makeStyles(theme => ({
  headerData: {
    height: '26px',
    lineHeight: '24px',
    margin: '10px 15px',
    padding: '0 10px 0 12px',
    textDecoration: 'none',
    position: 'relative',

    '&:after': {
      content: '" "',
      position: 'absolute',
      top: '15px',
      left: '25px',
      width: '4px',
      height: '4px',
      borderRadius: '2px',
      background: '#fff',
      boxShadow: '-1px -1px 2px #004977',
    },
  },
}));

const colors = [
  // '#1f77b4',
  // '#ff7f0e',
  // '#2ca02c',
  // '#d62728',
  // '#9467bd',
  // '#8c564b',
  '#f8f9f9',
  '#82e0aa',
  '#f9e79f',
  '#85c1e9',
  '#f5eef8',
  '#e8f8f5',
  '#f9ebea',
];

const Wall = ({ datas = [], link, select }) => {
  const classes = useStyles();

  return (
    datas && datas.map(item => (
      <div key={item.text} className={classes.headerData}>
        <Tab 
          name={item.text} 
          count={item.value} 
          colors={colors} 
          select={item.text === select} 
          onClick={() => window.location.href = `/${link}/${item.text}?t=wall`}
        />
      </div>
    ))
  )
}

Wall.propTypes = {
  datas: PropTypes.array,
  link: PropTypes.string,
  select: PropTypes.string,
};

export default Wall;