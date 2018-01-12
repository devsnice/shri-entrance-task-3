import React from 'react';

import styled from 'styled-components';

const InvisibleBlock = styled.div`
  visibility: hidden;
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

class Icons extends React.Component {
  render() {
    return (
      <InvisibleBlock>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="arrow" viewBox="0 0 9 14">
            <title>arrow</title>
            <g fill="none" fill-rule="evenodd">
              <path d="M-6-5h24v24H-6z" />
              <path
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                d="M7.657 12.314L2 6.657 7.657 1"
              />
            </g>
          </symbol>
          <symbol id="calendar" viewBox="0 0 12 12">
            <title>calendar</title>
            <g fill="none" fill-rule="evenodd">
              <path d="M-2-2h16v16H-2z" />
              <path
                d="M1 4v7h10V4H1zm9-3h2v11H0V1h2V0h2v1h4V0h2v1zM2 5v2h2V5H2zm3 0v2h2V5H5zM2 8v2h2V8H2z"
                fill="#000"
                fill-rule="nonzero"
              />
            </g>
          </symbol>
          <symbol id="close" viewBox="0 0 13 13">
            <title>close</title>
            <g fill="none" fill-rule="evenodd">
              <path d="M-6-5h24v24H-6z" />
              <path
                d="M6.364 4.95L2.121.707A1 1 0 0 0 .707 2.121L4.95 6.364.707 10.607a1 1 0 1 0 1.414 1.414l4.243-4.243 4.243 4.243a1 1 0 0 0 1.414-1.414L7.778 6.364l4.243-4.243A1 1 0 1 0 10.607.707L6.364 4.95z"
                fill="#000"
              />
            </g>
          </symbol>
          <symbol id="edit" viewBox="0 0 12 12">
            <title>edit</title>
            <g fill="none" fill-rule="evenodd">
              <path d="M-2-2h16v16H-2z" />
              <path
                d="M11.08 3.106a.58.58 0 0 0 0-.822L9.714.919a.58.58 0 0 0-.823 0L7.82 1.986l2.187 2.187 1.073-1.067zM.75 9.06v2.187h2.187l6.451-6.456-2.187-2.188L.75 9.061z"
                fill="#000"
                fill-rule="nonzero"
              />
            </g>
          </symbol>
        </svg>
      </InvisibleBlock>
    );
  }
}

export default Icons;
