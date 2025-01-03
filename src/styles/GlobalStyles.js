import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

:root {
  &, &.light-mode{
  /* Grey */

  --color-grey-50: #0a0a0a;
  --color-grey-100: #171717;
  --color-grey-200: #262626;
  --color-grey-300: #404040;
  --color-grey-400: #525252;
  --color-grey-500: #737373;
  --color-grey-600: #a3a3a3;
  --color-grey-700: #d4d4d4;
  --color-grey-800: #e5e5e5;
  --color-grey-900: #f5f5f5;
  --color-grey-950: #fafafa;


  --color-red-0: #ffe7e7;
  --color-red-50: #ffb6b6;
  --color-red-100: #ff8585;
  --color-red-200: #ff6c6c;
  --color-red-300: #ff3b3b;
  --color-red-400: #ff2323;
  --color-red-500: #ff0a0a;
  --color-red-600: #e60909;
  --color-red-700: #cc0808;
  --color-red-800: #b30707;
  --color-red-900: #990606;
  --color-red-950: #660404;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --color-bg: rgba(255, 255, 255, 0.8);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);


  --image-grayscale: 0;
  --image-opacity: 100%;

  background:radial-gradient(at top left, white 25%,transparent 70%)

  /* rgba(249, 146, 151, 0.2) */

  /* radial-gradient(92.05% 69.94% at 76.34% 50.09%, rgba(0, 0, 0, 0.00) 21.7%, rgba(0, 0, 0, 0.80) 53.83%, rgba(0, 0, 0, 0.95) 100%) */
 
  /* drop-shadow(24px 32px 24px rgba(0, 0, 0, 0.6)) */
}

  &.dark-mode{

  --color-grey-50: #fafafa;
  --color-grey-100: #f5f5f5;
  --color-grey-200: #e5e5e5;
  --color-grey-300: #d4d4d4;
  --color-grey-400: #a3a3a3;
  --color-grey-500: #737373;
  --color-grey-600: #525252;
  --color-grey-700: #404040;
  --color-grey-800: #262626;
  --color-grey-900: #171717;
  --color-grey-950: #0a0a0a;

   
  --color-bg: rgba(0, 0, 0, 0.8);


  --backdrop-color: rgba(0, 0, 0, 0.3);

  --backdrop-gradient: linear

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  --image-grayscale: 10%;
  --image-opacity: 90%;
  }

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  color: var(--color-grey-50);
  /* background-color: var(--color-grey-950);  */
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
 }

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;

  transition: all 0.1s;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

@keyframes sideAnimation {
  0% {
    transform: translateX(4rem);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/


`;

export default GlobalStyles;
