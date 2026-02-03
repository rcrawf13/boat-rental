import { createContext } from "react";
import type { APIResponse } from "./contexts_types/APIRes";

    const standardWeekday = {startHour:17, endHour: 22, isOpen: true};
    const standardWeekend = { startHour: 10, endHour: 20, isOpen: true };

const APIResContext = createContext<APIResponse>({
    schedule:[
        standardWeekend,
        standardWeekday,
        standardWeekday,
        standardWeekday,
        standardWeekday,
        standardWeekday,
        standardWeekend
    ],
    bookedSlots:[],

});

export default APIResContext;