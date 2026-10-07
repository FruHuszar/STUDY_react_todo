export type AllapotTipus = "folyamatban" | "törölve" | "kész" | "alap"

export interface TodoTipus {
    id: number,
    tennivalo: string,
    allapot: AllapotTipus
}

export const TODOLISTA: TodoTipus[] = [
    { id: 1, tennivalo: "Bevásárlás", allapot: "alap" },
    { id: 2, tennivalo: "Házi feladat", allapot: "alap" },
    { id: 3, tennivalo: "Szoba kitakarítása", allapot: "alap" },
    { id: 4, tennivalo: "Edzés", allapot: "alap" }
]
