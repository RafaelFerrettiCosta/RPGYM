declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.mp3' {
  const asset: number; // no RN assets viram um número interno
  export default asset;
}
