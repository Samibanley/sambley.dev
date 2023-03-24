import * as t from 'io-ts';

/* 
    TODO: add resume types and look into DynamoDB free tier. Then use that to build resume.
    Also, look into Svelte Material UI.
    Ideas for presenting data:
    Companies are tabs that will show details when pressed. Details include tech skills used
    Different option: interacting with company will highlight tech skills used in column.

    Make it personable! Add Pixel Art! Make it fun AND professional. Corporate work doesn't have to be boring.

    Then get used to the idea of blogging. What should I blog about? Tech stuff, more than likely.
    I could use it like Mark Volkmann does, to keep track of notes of the new stuff I learn.
    Would I enjoy that??? Maybe. It could also be a good way to keep notes, rather than having to rely on old projects that I don't have access to.

    Transform website into PDF resume

*/

const Location = t.type({
    city: t.string,
    state: t.string,
});

type Location = t.TypeOf<typeof Location>;

const GeneralInfo = t.type({
    fullName: t.string,
    preferredName: t.string,
    email: t.string,
    summary: t.string,
    linkedInUrl: t.string,
    location: Location,
});

export type GeneralInfo = t.TypeOf<typeof GeneralInfo>;

const SchoolInfo = t.type({
    name: t.string,
    degree: t.string,
    area: t.string,
    startYear: t.string,
    endYear: t.string,
    location: Location,
});

export type SchoolInfo = t.TypeOf<typeof SchoolInfo>;

const MonthYear = t.type({
    month: t.string,
    year: t.string,
});

type MonthYear = t.TypeOf<typeof MonthYear>;

const PastExperience = t.type({
    company: t.string,
    startDate: MonthYear,
    endDate: t.union([MonthYear, t.null]),
    location: Location,
    title: t.array(t.string),
    details: t.array(t.array(t.string)),
});

export type PastExperience = t.TypeOf<typeof PastExperience>;