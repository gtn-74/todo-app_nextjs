import { setupServer } from "msw/node";
import { handlers } from "./handlers";

console.log('serve側')
export const server = setupServer(...handlers);
