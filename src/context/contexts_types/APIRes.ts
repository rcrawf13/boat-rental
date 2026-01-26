type weekDayAvailability = {startTime:number, endTime:number};
type weekEndAvailiability = {startTime?:number, endTime?:number};
export interface APIResponse {
        weekDayAvailability:weekDayAvailability;
        weekendAvailability?:weekEndAvailiability;
}


