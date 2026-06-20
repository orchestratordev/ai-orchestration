export interface Provider {

  id: string;

  initialize(): Promise<void>;

  health(): Promise<boolean>;

}
