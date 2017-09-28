import React from 'react';
import styled from 'styled-components';

export type Props = {
  className: string
};

const <%= componentName %> = (props: Props) => {
  const { className } = props;
  return (
    <div className={className} />
  );
};

export default styled(<%= componentName %>)`
`;
