import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const Schedule = () => {
    const calendarDays = Array.from({ length: 35 }, (_, i) => {
        // Simple mock for January 2026 starting on Thursday (Jan 1)
        // 2026 starts on Thursday. 
        // Array index 0 = Mon Dec 29 (prev month)
        // Let's just hardcode the visually correct grid for Jan 2026 to look perfect.
        // Jan 1 2026 is Thursday.
        // Grid usually starts Sunday or Monday. Let's say Monday.
        // Mon Tue Wed Thu Fri Sat Sun
        // 29  30  31  1   2   3   4
        // ...
        return i;
    });

    // Helper to determine day status
    const getDayContent = (dayIndex) => {
        // Alignment: Jan 1 is Thursday.
        // Row 1: 29(M), 30(T), 31(W), 1(T), 2(F), 3(S), 4(S)
        // Index 0..6

        let date = null;
        let isCurrentMonth = false;
        let isClass = false;
        let isBreak = false;

        const offset = 3; // Jan 1 is at index 3 (0,1,2,3)
        // Wait, if start Mon:
        // 0: Mon 29 Dec
        // 1: Tue 30 Dec
        // 2: Wed 31 Dec
        // 3: Thu 01 Jan 2026

        const dayNum = dayIndex - 2; // Adjust logic

        if (dayNum >= 1 && dayNum <= 31) {
            date = dayNum;
            isCurrentMonth = true;
        }

        // Classes: Jan 24 (Masterclass), Jan 31 (Class 4)
        // Adjust logic for Jan 2026.
        // Jan 24 is Saturday. Jan 31 is Saturday.
        if ([24, 31].includes(date)) isClass = true;
        // Masterclass special highlight could be added but using same style for now

        // Break: None in this short period mentioned in new truth source
        // if (date === 17) isBreak = true; // Removing break as per source

        if (dayIndex < 3 && dayIndex >= 0) {
            // Dec days
            date = 29 + dayIndex;
            isCurrentMonth = false;
        }

        return { date, isCurrentMonth, isClass, isBreak };
    };

    return (
        <section id="calendario" className="py-24 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Calendario <span className="text-gradient">Enero 2026</span>
                </h2>
                <p className="text-slate-400 mb-12">
                    Clases los sábados de 9:00 AM a 10:00 AM (hora CDMX). <br />
                    <span className="text-primary-400 font-medium">Masterclass de Inicio (24 Ene): 9:00 AM - 12:30 PM</span>
                </p>

                <div className="glass-card p-8 rounded-2xl border border-white/10">
                    <div className="grid grid-cols-7 gap-4 mb-4 text-slate-500 text-sm font-medium">
                        <div>L un</div>
                        <div>Mar</div>
                        <div>Mié</div>
                        <div>Jue</div>
                        <div>Vie</div>
                        <div>Sáb</div>
                        <div>Dom</div>
                    </div>

                    <div className="grid grid-cols-7 gap-4">
                        {Array.from({ length: 35 }).map((_, i) => {
                            const { date, isCurrentMonth, isClass, isBreak } = getDayContent(i);
                            return (
                                <div key={i} className={`
                            relative aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all
                            ${!isCurrentMonth ? 'text-slate-700' : 'text-slate-300'}
                            ${isClass ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20 scale-110 border border-primary-400' : ''}
                            ${isBreak ? 'bg-slate-800/50 border border-slate-700/50 opacity-50' : ''}
                            ${!isClass && isCurrentMonth ? 'hover:bg-white/5' : ''}
                        `}>
                                    {date}
                                    {isClass && (
                                        <div className="absolute -bottom-2 px-2 py-0.5 bg-primary-800 text-[10px] rounded-full text-primary-100 whitespace-nowrap hidden sm:block">
                                            Clase
                                        </div>
                                    )}
                                    {isBreak && (
                                        <span className="absolute text-[10px] bottom-1 text-slate-500">Libre</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                            <span className="text-slate-300">Clase Presencial Online</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700"></div>
                            <span className="text-slate-500">Sin Clase</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-primary-500/10 border border-primary-500/20 rounded-xl inline-flex items-center gap-3 text-primary-200 text-left">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                        <strong>Inicio:</strong> Sábado 24 de Enero con una Masterclass Intensiva.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
