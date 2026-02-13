
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

interface AvailabilityCalendarProps {
    lang: 'nl' | 'en' | 'de';
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ lang = 'nl' }) => {
    const [selectedStart, setSelectedStart] = useState<Date | null>(null);
    const [selectedEnd, setSelectedEnd] = useState<Date | null>(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [blockedDates, setBlockedDates] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                const response = await fetch('/api/calendar');
                if (!response.ok) throw new Error('Failed to fetch calendar');
                const data = await response.json();
                setBlockedDates(data);
            } catch (err) {
                console.error(err);
                setError('Kon beschikbaarheid niet laden.');
            } finally {
                setLoading(false);
            }
        };

        fetchCalendar();
    }, []);

    const handleDateClick = (date: Date) => {
        // Prevent clicking past dates
        if (date < new Date(new Date().setHours(0, 0, 0, 0))) return;

        // Reset if we have a full range or clicking before start
        if ((selectedStart && selectedEnd) || (selectedStart && date < selectedStart)) {
            setSelectedStart(date);
            setSelectedEnd(null);
            // dispatchSelection(date, null); // Manual confirm only
            return;
        }

        // Set end date if we have a start and clicking after
        if (selectedStart && !selectedEnd && date > selectedStart) {
            // Check if range includes blocked dates
            let iter = new Date(selectedStart);
            iter.setDate(iter.getDate() + 1);
            let hasBlocked = false;
            while (iter <= date) {
                if (isBlocked(iter.getFullYear(), iter.getMonth(), iter.getDate())) {
                    hasBlocked = true;
                    break;
                }
                iter.setDate(iter.getDate() + 1);
            }

            if (hasBlocked) {
                alert(lang === 'nl' ? "De geselecteerde periode bevat bezette dagen." : "Selected period contains occupied days.");
                return;
            }

            setSelectedEnd(date);
            // dispatchSelection(selectedStart, date); // Manual confirm only
        } else {
            // Start new selection
            setSelectedStart(date);
            setSelectedEnd(null);
            // dispatchSelection(date, null); // Manual confirm only
        }
    };

    const confirmSelection = () => {
        if (selectedStart && selectedEnd) {
            const event = new CustomEvent('booking-dates-selected', {
                detail: { start: selectedStart, end: selectedEnd }
            });
            window.dispatchEvent(event);
        }
    };

    const dispatchSelection = (start: Date | null, end: Date | null) => {
        const event = new CustomEvent('booking-dates-selected', {
            detail: { start, end }
        });
        window.dispatchEvent(event);
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday

        // Adjust for Monday start (0 = Mon, 6 = Sun)
        const startingDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        return { daysInMonth, startingDay };
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const { daysInMonth, startingDay } = getDaysInMonth(currentDate);

    const monthNames = {
        nl: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
    };

    const weekDays = {
        nl: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
        en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
    };

    const isBlocked = (year: number, month: number, day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return blockedDates.includes(dateStr);
    };

    const isSameDay = (d1: Date | null, d2: Date) => {
        if (!d1) return false;
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[400px] bg-brand-light/30 rounded-3xl">
                <Loader2 className="w-8 h-8 text-brand-green animate-spin" />
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-brand-clay/20">
            {/* Header Navigation */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={prevMonth}
                    className="p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group"
                    aria-label="Previous month"
                >
                    <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="flex-1 hidden md:block" /> {/* Spacer */}

                <button
                    onClick={nextMonth}
                    className="p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group"
                    aria-label="Next month"
                >
                    <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[0, 1].map((offset) => {
                    // Calculate date for this month view
                    const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
                    const { daysInMonth, startingDay } = getDaysInMonth(monthDate);

                    /* On mobile, hide the second month */
                    const visibilityClass = offset === 1 ? 'hidden md:block' : '';

                    return (
                        <div key={offset} className={`relative ${visibilityClass}`}>
                            <h3 className="text-xl font-heading font-bold text-brand-dark mb-6 text-center capitalize">
                                {monthNames[lang][monthDate.getMonth()]} {monthDate.getFullYear()}
                            </h3>

                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {weekDays[lang].map(day => (
                                    <div key={day} className="text-center text-xs font-bold text-brand-dark/50 py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                                {Array.from({ length: startingDay }).map((_, i) => (
                                    <div key={`empty-${i}`} className="aspect-square" />
                                ))}

                                {Array.from({ length: daysInMonth }).map((_, i) => {
                                    const day = i + 1;
                                    const dateObj = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
                                    const blocked = isBlocked(monthDate.getFullYear(), monthDate.getMonth(), day);
                                    const isToday = new Date().toDateString() === dateObj.toDateString();
                                    const isPast = dateObj < new Date(new Date().setHours(0, 0, 0, 0));

                                    const isStart = isSameDay(selectedStart, dateObj);
                                    const isEnd = isSameDay(selectedEnd, dateObj);
                                    const isInRange = selectedStart && selectedEnd && dateObj > selectedStart && dateObj < selectedEnd;

                                    let bgClass = "bg-brand-light/20 text-brand-dark hover:bg-brand-green/10 cursor-pointer";
                                    if (blocked) bgClass = "bg-red-50 text-red-400 line-through decoration-red-400/50 cursor-not-allowed";
                                    if (isPast) bgClass = "bg-gray-50 text-gray-300 cursor-not-allowed";

                                    if (isStart) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-l-xl rounded-r-none";
                                    if (isEnd) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-r-xl rounded-l-none";
                                    if (isStart && isEnd) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-xl"; // Single day selection case (if allowed) or logic quirk fix

                                    // Make range look connected
                                    if (isInRange) bgClass = "bg-brand-green/20 text-brand-dark font-medium rounded-none";
                                    if (isToday && !blocked && !isStart && !isEnd && !isInRange) bgClass = "bg-brand-light text-brand-dark font-bold border border-brand-green/30";

                                    /* Fix styling for start/end to be rounded correctly when in range */
                                    if (isStart && selectedEnd) bgClass += " rounded-l-xl rounded-r-none";
                                    if (isEnd && selectedStart) bgClass += " rounded-r-xl rounded-l-none";
                                    if ((isStart || isEnd) && (!selectedStart || !selectedEnd)) bgClass += " rounded-xl";

                                    return (
                                        <button
                                            key={day}
                                            disabled={blocked || isPast}
                                            onClick={() => handleDateClick(dateObj)}
                                            className={`
                                                aspect-square flex items-center justify-center text-sm transition-all duration-300 relative
                                                ${bgClass}
                                                ${(isStart || isEnd) ? 'rounded-xl' : ''} /* Fallback to rounded if just clicking around */
                                            `}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-brand-dark/60 justify-center mb-8 border-t border-brand-dark/5 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-light/50 border border-brand-dark/10"></div>
                    <span>Beschikbaar</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-50 border border-red-100"></div>
                    <span>Bezet</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-green"></div>
                    <span>Geselecteerd</span>
                </div>
            </div>

            {selectedStart && selectedEnd && (
                <div className="flex justify-center animate-slide-up">
                    <button
                        onClick={confirmSelection}
                        className="bg-brand-green text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-brand-dark hover:scale-[1.02] active:scale-95 transition-all duration-300"
                    >
                        {lang === 'nl' ? 'Datum overnemen' : lang === 'en' ? 'Use these dates' : 'Datum übernehmen'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AvailabilityCalendar;
