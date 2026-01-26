import { createContext } from "react";
import type { NumberValue } from "./contexts_types/NumberValue";
const NumberValueContext  = createContext<NumberValue>({
    numberValue:2,
    setNumberValue:()=>2
});

export default NumberValueContext;