import { Destination } from "./destination"
import { Crew } from "./crew"
import { Technology } from "./technology"

export default interface DataList {
    destinations: Destination[],
    crew: Crew[],
    technology: Technology[]
}