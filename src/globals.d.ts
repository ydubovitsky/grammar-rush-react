declare module ".css"
declare module "*.module.css";
declare module "*.module.scss";
declare module '*.jpg';
declare module '*.png';
declare module '*.html' {
  const value: string;
  export default value
}
declare module '*.svg' {
  const content: string;
  export default content;
}