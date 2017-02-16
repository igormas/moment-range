import moment = require('moment');

export type Shorthand = 'years' | 'quarters' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export declare class DateRange {
    constructor(start: Date, end: Date);
    constructor(start: moment.Moment, end: moment.Moment);
    constructor(range: [Date, Date]);
    constructor(range: [moment.Moment, moment.Moment]);
    constructor(range: string);

    adjacent(other: DateRange): boolean;

    add(other: DateRange): DateRange;

    by(interval: Shorthand, options?: { exclusive: boolean; step: number; }): Iterable<moment.Moment>;

    byRange(interval: DateRange, options?: { exclusive: boolean; step: number; }): Iterable<moment.Moment>;

    center(): moment.Moment;

    clone(): DateRange;

    contains(other: Date | DateRange | moment.Moment, options?: { exclusive: boolean; }): boolean;

    diff(unit: Shorthand, rounded: boolean): number;

    duration(unit: Shorthand, rounded: boolean): number;

    intersect(other: DateRange): DateRange;

    isEqual(other: DateRange): boolean;

    isSame(other: DateRange): boolean;

    overlaps(other: DateRange, options: { adjacent: boolean; }): boolean;

    reverseBy(interval: Shorthand, options?: { exclusive: boolean; step: number; }): Iterable<moment.Moment>;

    reverseByRange(interval: DateRange, options?: { exclusive: boolean; step: number; }): Iterable<moment.Moment>;

    subtract(other: DateRange): Array<DateRange>;

    toDate(): Array<Date>;

    toString(): string;

    valueOf(): number;
}

declare module 'moment' {
    interface Moment {
        range(start: Date, end: Date): DateRange;
        range(start: Moment, end: Moment): DateRange;
        range(range: Date[]): DateRange;
        range(range: Moment[]): DateRange;
        range(range: string): DateRange;

        within(range): boolean;
    }
}

export declare function extendMoment(moment: moment) : moment;
