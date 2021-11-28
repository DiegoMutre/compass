import styled from 'styled-components';

import { getColor, getInvertedColor } from '@common/helpers/colors';
import { colorNameByPriority } from '@common/styles/colors';
import { Priorities } from '@common/types/entities';
import { InvertedColorNames } from '@common/types/styles';

export interface Props {
  priority: Priorities;
  isDragging?: boolean;
}

export const Styled = styled.div<Props>`
  cursor: ${({ isDragging }) => (isDragging ? 'grabbing' : 'pointer')};
  background: ${({ priority }) => getColor(colorNameByPriority[priority])};
  border-radius: 2px;
  height: 32px;
  width: 100%;
  margin-bottom: 2px;
  padding: 5px;
  color: ${({ priority }) =>
    getInvertedColor(
      colorNameByPriority[priority] as unknown as InvertedColorNames
    )};

  opacity: ${({ isDragging }) => isDragging && 0.5};
`;
