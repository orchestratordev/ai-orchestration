import { bootstrap } from "./bootstrap";
import { initialize } from "./initialize";

export async function startup() {
  await bootstrap();

  await initialize();
}
