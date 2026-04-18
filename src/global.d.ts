export {};

declare global {
  interface Window {
    less: {
      modifyVars: (vars: Record<string, string>) => Promise<void>;
    };
  }
}
