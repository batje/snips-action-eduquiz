import { handler } from "snips-toolkit";
import mathquiz from "./mathquiz";

// Add handlers here, and wrap them.
export default {
  mathquiz: handler.wrap(mathquiz)
};
