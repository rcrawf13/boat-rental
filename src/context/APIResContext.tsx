import { createContext } from "react";
import type { APIResponse } from "./contexts_types/APIRes";

const APIResContext = createContext<APIResponse>({
    weekDayAvailability:{startTime:0,endTime:0},
    weekendAvailability:{startTime:0,endTime:0}

});

export default APIResContext;