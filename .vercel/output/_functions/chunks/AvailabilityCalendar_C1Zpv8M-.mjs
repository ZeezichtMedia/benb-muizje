import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';

const AvailabilityCalendar = ({ lang = "nl" }) => {
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);
  const [currentDate, setCurrentDate] = useState(/* @__PURE__ */ new Date());
  const [blockedDates, setBlockedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await fetch("/api/calendar");
        if (!response.ok) throw new Error("Failed to fetch calendar");
        const data = await response.json();
        setBlockedDates(data);
      } catch (err) {
        console.error(err);
        setError("Kon beschikbaarheid niet laden.");
      } finally {
        setLoading(false);
      }
    };
    fetchCalendar();
  }, []);
  const handleDateClick = (date) => {
    if (date < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0))) return;
    if (selectedStart && selectedEnd || selectedStart && date < selectedStart) {
      setSelectedStart(date);
      setSelectedEnd(null);
      return;
    }
    if (selectedStart && !selectedEnd && date > selectedStart) {
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
        alert(lang === "nl" ? "De geselecteerde periode bevat bezette dagen." : "Selected period contains occupied days.");
        return;
      }
      setSelectedEnd(date);
    } else {
      setSelectedStart(date);
      setSelectedEnd(null);
    }
  };
  const confirmSelection = () => {
    if (selectedStart && selectedEnd) {
      const event = new CustomEvent("booking-dates-selected", {
        detail: { start: selectedStart, end: selectedEnd }
      });
      window.dispatchEvent(event);
    }
  };
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth2 = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const startingDay2 = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    return { daysInMonth: daysInMonth2, startingDay: startingDay2 };
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  getDaysInMonth(currentDate);
  const monthNames = {
    nl: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  };
  const weekDays = {
    nl: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  };
  const isBlocked = (year, month, day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return blockedDates.includes(dateStr);
  };
  const isSameDay = (d1, d2) => {
    if (!d1) return false;
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-[400px] bg-brand-light/30 rounded-3xl", children: /* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 text-brand-green animate-spin" }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-[2.5rem] shadow-xl border border-brand-clay/20", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevMonth,
          className: "p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group",
          "aria-label": "Previous month",
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 28, className: "group-hover:-translate-x-1 transition-transform" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex-1 hidden md:block" }),
      " ",
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextMonth,
          className: "p-3 hover:bg-brand-light rounded-full transition-colors text-brand-green group",
          "aria-label": "Next month",
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 28, className: "group-hover:translate-x-1 transition-transform" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [0, 1].map((offset) => {
      const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
      const { daysInMonth: daysInMonth2, startingDay: startingDay2 } = getDaysInMonth(monthDate);
      const visibilityClass = offset === 1 ? "hidden md:block" : "";
      return /* @__PURE__ */ jsxs("div", { className: `relative ${visibilityClass}`, children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-heading font-bold text-brand-dark mb-6 text-center capitalize", children: [
          monthNames[lang][monthDate.getMonth()],
          " ",
          monthDate.getFullYear()
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-7 gap-1 mb-2", children: weekDays[lang].map((day) => /* @__PURE__ */ jsx("div", { className: "text-center text-xs font-bold text-brand-dark/50 py-2", children: day }, day)) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-7 gap-1", children: [
          Array.from({ length: startingDay2 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square" }, `empty-${i}`)),
          Array.from({ length: daysInMonth2 }).map((_, i) => {
            const day = i + 1;
            const dateObj = new Date(monthDate.getFullYear(), monthDate.getMonth(), day);
            const blocked = isBlocked(monthDate.getFullYear(), monthDate.getMonth(), day);
            const isToday = (/* @__PURE__ */ new Date()).toDateString() === dateObj.toDateString();
            const isPast = dateObj < new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
            const isStart = isSameDay(selectedStart, dateObj);
            const isEnd = isSameDay(selectedEnd, dateObj);
            const isInRange = selectedStart && selectedEnd && dateObj > selectedStart && dateObj < selectedEnd;
            let bgClass = "bg-brand-light/20 text-brand-dark hover:bg-brand-green/10 cursor-pointer";
            if (blocked) bgClass = "bg-red-50 text-red-400 line-through decoration-red-400/50 cursor-not-allowed";
            if (isPast) bgClass = "bg-gray-50 text-gray-300 cursor-not-allowed";
            if (isStart) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-l-xl rounded-r-none";
            if (isEnd) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-r-xl rounded-l-none";
            if (isStart && isEnd) bgClass = "bg-brand-green text-white font-bold ring-2 ring-brand-green/30 transform scale-105 shadow-md z-10 rounded-xl";
            if (isInRange) bgClass = "bg-brand-green/20 text-brand-dark font-medium rounded-none";
            if (isToday && !blocked && !isStart && !isEnd && !isInRange) bgClass = "bg-brand-light text-brand-dark font-bold border border-brand-green/30";
            if (isStart && selectedEnd) bgClass += " rounded-l-xl rounded-r-none";
            if (isEnd && selectedStart) bgClass += " rounded-r-xl rounded-l-none";
            if ((isStart || isEnd) && (!selectedStart || !selectedEnd)) bgClass += " rounded-xl";
            return /* @__PURE__ */ jsx(
              "button",
              {
                disabled: blocked || isPast,
                onClick: () => handleDateClick(dateObj),
                className: `
                                                aspect-square flex items-center justify-center text-sm transition-all duration-300 relative
                                                ${bgClass}
                                                ${isStart || isEnd ? "rounded-xl" : ""} /* Fallback to rounded if just clicking around */
                                            `,
                children: day
              },
              day
            );
          })
        ] })
      ] }, offset);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-6 text-sm font-medium text-brand-dark/60 justify-center mb-8 border-t border-brand-dark/5 pt-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-light/50 border border-brand-dark/10" }),
        /* @__PURE__ */ jsx("span", { children: "Beschikbaar" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-50 border border-red-100" }),
        /* @__PURE__ */ jsx("span", { children: "Bezet" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-brand-green" }),
        /* @__PURE__ */ jsx("span", { children: "Geselecteerd" })
      ] })
    ] }),
    selectedStart && selectedEnd && /* @__PURE__ */ jsx("div", { className: "flex justify-center animate-slide-up", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: confirmSelection,
        className: "bg-brand-green text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-brand-dark hover:scale-[1.02] active:scale-95 transition-all duration-300",
        children: lang === "nl" ? "Datum overnemen" : lang === "en" ? "Use these dates" : "Datum übernehmen"
      }
    ) })
  ] });
};

export { AvailabilityCalendar as A };
