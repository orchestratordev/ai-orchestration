import { bootstrap } from "./bootstrap";
import { initialize } from "./initialize";

import {
  transitionTo,
  KernelState,
} from "@/core/lifecycle";

export async function startup() {
  transitionTo(KernelState.BOOTING);

  await bootstrap();

  transitionTo(KernelState.INITIALIZING);

  await initialize();

  transitionTo(KernelState.READY);

  transitionTo(KernelState.RUNNING);
}
