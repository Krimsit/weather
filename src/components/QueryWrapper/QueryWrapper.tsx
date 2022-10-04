import { FC } from 'react';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { LoaderWrapperProps } from './QueryWrapper.interface';

import { Loader } from './QueryWrapper.styles';

const QueryWrapper: FC<LoaderWrapperProps> = ({
  children,
  key = 'weather',
  status,
  loader = <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
}) => {
  if (status === 'loading' || status === 'idle') {
    return <Loader>{loader}</Loader>;
  }

  return <>{children}</>;
};

export default QueryWrapper;
