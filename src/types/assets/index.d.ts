/* per a note on this site:
 * https://duncanleung.com/typescript-module-declearation-svg-img-assets/
 * "the index.d.ts module declaration files must be in a subfolder since each
 * subfolder under typeRoots is considered a "package" and is added to your project."
 * Their module declarations are more robust than what's included here, but I
 * want to read more before including that.
 */

declare module '*.gif';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
