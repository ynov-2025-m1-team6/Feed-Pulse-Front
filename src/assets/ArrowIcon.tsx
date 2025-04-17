import React from "react";

type SvgProps = {
  width: number;
  height: number;
  fill: string;
};

const ArrowIcon: React.FC<SvgProps> = ({ width, height, fill }: SvgProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props} // Permet de passer des props dynamiques comme fill, className, etc.
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.53033 0.53033L8 0L6.93934 1.06066L7.46967 1.59099L11.4393 5.56066H0.75H0V7.06066H0.75H11.4393L7.46967 11.0303L6.93934 11.5606L8 12.6214L8.53033 12.091L13.6036 7.01776C13.9941 6.62724 13.9941 5.99407 13.6036 5.60355L8.53033 0.53033Z"
      fill={fill}
    />
  </svg>
);

export default ArrowIcon;
