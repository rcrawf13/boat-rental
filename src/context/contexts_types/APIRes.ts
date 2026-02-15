export interface DaySchedule {
        startHour:number;
        startMinute:number;

        endHour:number;
        endMinute:number;

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