// export type GovernmentBuildingsAddressStreetType = {
//     title: string
// }
//
// export type GovernmentBuildingsAddressType = {
//     street: GovernmentBuildingsAddressStreetType
// }

export type GovernmentBuildingsType = {
    type: "Hospital" | "Fire-station"
    budget: number
    staffCount: number
    address: AddressType
}

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}