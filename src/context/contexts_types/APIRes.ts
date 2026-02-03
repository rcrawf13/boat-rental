// type weekDayAvailability = {startTime:number, endTime:number};
// type weekEndAvailiability = {startTime?:number, endTime?:number};
// export interface APIResponse {
//         weekDayAvailability:weekDayAvailability;
//         weekendAvailability?:weekEndAvailiability;
// }



export interface DaySchedule {
        startHour:number;
        endHour:number;
        isOpen:boolean;

}

export interface BookedRange {
        start:string;
        end:string;
}


export interface APIResponse {
        schedule:DaySchedule[];
        bookedSlots:BookedRange[];
}