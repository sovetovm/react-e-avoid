import React from 'react';
import { useSelector } from 'react-redux';

import Arr from '../Arr';
import { selectSearch } from '../redux/slices/searchSlice';

const MoreInfo: React.FC = () => {
  const searchValue = useSelector(selectSearch);
  const result = Arr.find((obj) => obj.number === searchValue.search);

  return <div>{result?.description}</div>;
};

export default MoreInfo;
