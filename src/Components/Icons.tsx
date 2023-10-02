export const sound = (
  width: number | string,
  height: number | string,
  style?: React.CSSProperties,
  children?: React.ReactElement,
): React.ReactElement => (
  <svg
    {...{
      viewBox: "0 0 24 24",
      width,
      height,
      style,
    }}>
    <path
      {...{
        style: {
          fill: "currentColor",
        },
        d: "M3.5 12a8.5 8.5 0 1 1 14.762 5.748l.992 1.135A9.966 9.966 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.966 9.966 0 0 0 2.746 6.883l.993-1.134A8.47 8.47 0 0 1 3.5 12Z",
      }}
    />
    <path
      {...{
        style: {
          fill: "currentColor",
        },
        d: "M19.25 12.125a7.098 7.098 0 0 1-1.783 4.715l-.998-1.14a5.625 5.625 0 1 0-8.806-.15l-1.004 1.146a7.125 7.125 0 1 1 12.59-4.571Z",
      }}
    />
    <path
      {...{
        style: {
          fill: "currentColor",
        },
        d: "M16.25 12a4.23 4.23 0 0 1-.821 2.511l-1.026-1.172a2.75 2.75 0 1 0-4.806 0L8.571 14.51A4.25 4.25 0 1 1 16.25 12Z",
      }}
    />
    <path
      {...{
        style: {
          fill: "currentColor",
        },
        d: "M12 12.5a.75.75 0 0 1 .564.256l7 8A.75.75 0 0 1 19 22H5a.75.75 0 0 1-.564-1.244l7-8A.75.75 0 0 1 12 12.5Z",
      }}
    />
    {children}
  </svg>
);

export * as default from "./Icons";
