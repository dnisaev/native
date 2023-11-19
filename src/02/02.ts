type StudentTechnologiesType = {
    id: number
    title: string
}

type StudentAddressCityType = {
    title: string
    countryTitle: string
}

type StudentAddressType = {
    streetTitle: string
    city: StudentAddressCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: StudentAddressType
    technologies: Array<StudentTechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: "Dmitriy",
    age: 35,
    isActive: false,
    address: {
        streetTitle: "Leninsky",
        city: {
            title: "Moscow",
            countryTitle: "Russian"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}