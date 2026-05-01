declare module "@hot-labs/near-connect" {
  export class NearConnector {
    constructor(config: {
      network: string;
      footerBranding?: {
        icon?: string;
        heading?: string;
        link?: string;
        linkText?: string;
      };
    });
  }
}