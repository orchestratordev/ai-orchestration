import { logger } from "@/lib/logger";

import { Kernel } from "./kernel";

export const kernel = new Kernel();

export async function startKernel() {

  logger.info("Starting Kernel Engine...");

  kernel.initialized = true;

  kernel.running = true;

  logger.info("Kernel Engine Started.");

}

export async function stopKernel() {

  logger.warn("Stopping Kernel Engine...");

  kernel.running = false;

}
