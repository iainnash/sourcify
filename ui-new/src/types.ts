export declare interface StringMap {
    [key: string]: string;
}
export type DropzoneFile = File & {
  size: number;
  path: string;
};

// Server session
export type SessionResponse = {
  contracts: SendableContract[];
  unused: string[];
  files: string[];
};

export type Status = "perfect" | "partial" | "error";

export type ContractMeta = {
  compiledPath?: string;
  name?: string;
  address?: string;
  chainId?: string;
  status?: Status;
  statusMessage?: string;
  storageTimestamp?: Date;
};

// contracts in the server response
export type SendableContract = ContractMeta & {
  files: {
    found: string[];
    missing: string[];
    invalid: StringMap;
  };
  verificationId?: string;
};

export type VerificationInput = {
  verificationId: string;
  chainId: string;
  address: string;
}
export interface Match {
    address: string | null;
    status: Status;
    storageTimestamp?: Date;
    message?: string;
    encodedConstructorArgs?: string;
    libraryMap?: StringMap;
}

export type CheckAllByAddressResult = {
  address: string;
  chainIds: {
    chainId: string,
    status: string
  }[]
}