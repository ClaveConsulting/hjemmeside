export const onDesktop = (styles) => `@media screen and (min-width: 720px) {
    ${styles}
  }`;

export const onMobile = (styles) => `@media only screen and (max-width: 719px) {
    ${styles}
}`;
