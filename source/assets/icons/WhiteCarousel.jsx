import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
export const WhiteCarousel = props => (
  <Svg
    width={13}
    height={12}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.484436} width={9.48777} height={9.42863} rx={2} fill="white" />
    <Path
      d="M12.991 9.99999V3.21827C12.991 2.86101 12.7014 2.57138 12.3442 2.57138C11.9869 2.57138 11.6973 2.86101 11.6973 3.21828V8.71427C11.6973 9.81884 10.8018 10.7143 9.69726 10.7143H4.14613C3.79108 10.7143 3.50327 11.0021 3.50327 11.3571C3.50327 11.7122 3.79108 12 4.14612 12H10.991C12.0956 12 12.991 11.1046 12.991 9.99999Z"
      fill="white"
    />
  </Svg>
);
