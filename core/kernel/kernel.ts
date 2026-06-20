import { KERNEL_VERSION } from "./version";

export class Kernel {

  public initialized = false;

  public running = false;

  readonly version = KERNEL_VERSION;

}
