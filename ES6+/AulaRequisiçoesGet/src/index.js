import "core-js"
import "regenerator-runtime/runtime"
import Neo from "./neo"
import { getNeo } from "./neo_services"

async function loadNeos() {
    const neos = []
    const data = await getNeo()
    data.forEach(neo => {
        const minDiameter = neo.estimated_diameter.kilometers.estimated_diameter_min
        const maxDiameter = neo.estimated_diameter.kilometers.estimated_diameter_max
        const averageEstimatedDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo.id, neo.name, averageEstimatedDiameter.toFixed(2), neo.is_sentry)
        neos.push(newNeo)
    })
    console.log(neos)
}
loadNeos()

