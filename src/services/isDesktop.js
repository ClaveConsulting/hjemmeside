export default () =>
  typeof window !== 'undefined' && !window.matchMedia('only screen and (max-width: 760px)').matches;