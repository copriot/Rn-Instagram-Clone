import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
export const Options = props => (
  <Svg
    width={14}
    height={3}
    viewBox="0 0 14 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={1.5} cy={1.5} r={1.5} fill="black" />
    <Circle cx={7} cy={1.5} r={1.5} fill="black" />
    <Circle cx={12.5} cy={1.5} r={1.5} fill="black" />
  </Svg>
);
