import { logger } from "@/lib/logger";

export async function shutdown() {
  logger.warn("Kernel shutting down...");
}
