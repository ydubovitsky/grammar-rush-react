declare module ".css"
declare module "*.module.css";
declare module "*.module.scss";
declare module '*.jpg';
declare module '*.png';
declare module '*.html' {
  const value: string;
  export default value
}