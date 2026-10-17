import { ContributionDay } from '../types';

export interface HeatmapColumn {
  weekIndex: number;
  days: (ContributionDay | null)[];
}

export interface MonthHeader {
  name: string;
  columnIndex: number;
}

export function buildContributionMatrix(days: ContributionDay[]): {
  columns: HeatmapColumn[];
  monthHeaders: MonthHeader[];
} {
  if (!days || days.length === 0) {
    return { columns: [], monthHeaders: [] };
  }

  const columns: HeatmapColumn[] = [];
  const monthHeaders: MonthHeader[] = [];

  let currentColumn: (ContributionDay | null)[] = [];
  let currentMonth = -1;

  // The first day's day-of-week (0 = Sunday, 6 = Saturday)
  const firstDay = new Date(days[0].date);
  const firstDayOfWeek = firstDay.getDay();

  // Pad initial column with nulls if not starting on Sunday
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentColumn.push(null);
  }

  days.forEach((day) => {
    const d = new Date(day.date);
    const month = d.getMonth();

    if (month !== currentMonth && currentColumn.length === 0) {
      currentMonth = month;
      monthHeaders.push({
        name: d.toLocaleString('en-US', { month: 'short' }),
        columnIndex: columns.length,
      });
    }

    currentColumn.push(day);

    if (currentColumn.length === 7) {
      columns.push({
        weekIndex: columns.length,
        days: currentColumn,
      });
      currentColumn = [];
    }
  });

  if (currentColumn.length > 0) {
    while (currentColumn.length < 7) {
      currentColumn.push(null);
    }
    columns.push({
      weekIndex: columns.length,
      days: currentColumn,
    });
  }

  return { columns, monthHeaders };
}

export function getContributionColorClass(level: number): string {
  switch (level) {
    case 1:
      return 'bg-[#381630] border-[#4A1D40] hover:border-[#E8B4CB]';
    case 2:
      return 'bg-[#5A234E] border-[#7E316E] hover:border-[#E8B4CB]';
    case 3:
      return 'bg-[#A54D7C] border-[#D6A66D] shadow-[0_0_8px_rgba(232,180,203,0.3)]';
    case 4:
      return 'bg-[#E8B4CB] border-[#D6A66D] shadow-[0_0_12px_rgba(214,166,109,0.5)]';
    default:
      return 'bg-[#120A13] border-[#2A1B28] hover:border-[#4A1D40]';
  }
}
