import { logger } from "@/lib/logger";

import {
  listProviders,
} from "./registry";

export async function initializeProviders() {

  logger.info("Initializing Providers...");

  for (const provider of listProviders()) {

    await provider.initialize();

    logger.info(`${provider.id} initialized`);

  }

}
