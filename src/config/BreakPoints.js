// BreakPoints
const breakPoints = {
  mobile: '700px',
  tabletN: '701px',
  tabletX: '1024px',
  desktopN: '1025px',
  desktopX: '1440px',
  desktopL: '1441px',
};

// Device
const device = {
  mobile: `(max-width: ${breakPoints.mobile})`,
  tablet: `(min-width: ${breakPoints.tabletN}) and (max-width: ${breakPoints.tabletX})`,
  desktop: `(min-width: ${breakPoints.desktopN}) and (max-width: ${breakPoints.desktopX})`,
  desktopL: `(min-width: ${breakPoints.desktopL})`,
};

// Default export
export default device;
