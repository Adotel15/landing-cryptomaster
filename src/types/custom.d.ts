declare global {
  interface Window {
    ethereum: {
      isMetaMask: boolean;
      request: (...args: any[]) => Promise<any>;
    };
  }
}

export {};
