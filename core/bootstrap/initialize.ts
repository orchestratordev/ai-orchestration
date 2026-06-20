import { logger } from "@/lib/logger";
import { initializeProviders } from "@/core/providers";

export async function initialize() {

  logger.info("Initializing services...");

  await initializeProviders();

}
