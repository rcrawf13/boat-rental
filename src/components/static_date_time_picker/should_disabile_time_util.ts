import type { Dayjs } from "dayjs";
import type { TimeView } from "@mui/x-date-pickers/models";
import type { APIResponse } from "../../context/contexts_types/APIRes";
import dayjs from "dayjs";


// Function for determining if a time should be disabled based on API Response
export const shouldDisableTime = (timeValue: Dayjs, view: TimeView, APIRes:APIResponse) => {
    // 1. Basic Setup
    const dayIndex = timeValue.day();
    const dailyRule = APIRes.schedule[dayIndex];
    if (!dailyRule || !dailyRule.isOpen) return true; // Closed today

    // 2. Validate Opening Hours (The "-2" Logic)
    // We assume the MINIMUM duration is 2 hours for a start time to be valid
    const minDuration = 2;
    const isTooEarlyHour = timeValue.hour() < dailyRule.startHour;
    const isTooLateHour  = timeValue.hour() > (dailyRule.endHour - minDuration);

    if (view === 'hours' && (isTooEarlyHour || isTooLateHour)) {
        return true;
    }

    if (view === 'minutes') {
        // If we are in the "Opening Hour" (e.g., 5 PM), 
        // disable any minutes before the "Start Minute" (e.g., 30).
        if (timeValue.hour() === dailyRule.startHour) {
            return timeValue.minute() < dailyRule.startMinute;
        }

        // Disable minutes after 8PM, because min duration for appointment is 2hours
        if(timeValue.hour() === dailyRule.endHour - minDuration) {
            return timeValue.minute() > 0;
        }
        
        // ... rest of your minute logic (e.g. collision or closing checks)
    }

    // 3. Validate Collision with Existing Bookings
    // We check if a theoretical 2-hour appointment starting here would hit a wall.
    const proposedStart = timeValue;
    const proposedEnd = timeValue.add(minDuration, 'hour');

    const hasCollision = APIRes.bookedSlots.some((booking) => {
        const bookStart = dayjs(booking.start);
        const bookEnd = dayjs(booking.end);

        // Simple Overlap Check: (StartA < EndB) and (EndA > StartB)
        return proposedStart.isBefore(bookEnd) && proposedEnd.isAfter(bookStart);
    });

    if (view === 'hours' && hasCollision) {
        return true;
    }

    return false;
};



import type { PickerValue } from "@mui/x-date-pickers/internals";

export const handleChange = (e:PickerValue,prevHourRef:React.RefObject<number | null>,setSelectedDayJSObj:React.Dispatch<React.SetStateAction<dayjs.Dayjs>>) => {
                            if (!e) return;

                            const hour = e.hour();
                            // useRef keeps track of the previous Hour so we don't fight mui component
                            const prevHour = prevHourRef.current;

                            let newValue = e;

                            // Only run when hour changes
                            if (hour !== prevHour) {
                                if (hour === 17) {
                                    newValue = e.minute(30);
                                } else if (hour > 17) {
                                    newValue = e.minute(0);
                                }
                            }

                            prevHourRef.current = hour;
                            setSelectedDayJSObj(newValue);
                        }