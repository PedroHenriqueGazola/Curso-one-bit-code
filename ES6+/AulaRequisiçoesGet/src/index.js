import "core-js"
import "regenerator-runtime/runtime"
import Neo from "./neo"
import { getNeo } from "./neo_services"

async function loadNeos() {
    let neos = getNeo()
    let data = await getNeo()
    data.forEach(neo => {
        const minDiameter = neo.estimated_diameter.kilometers.estimated_diameter_min
        const maxDiameter = neo.estimated_diameter.kilometers.estimated_diameter_max
        const averageEstimatedDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo.id, neo.name, averageEstimatedDiameter.toFixed(2), neo.is_sentry)
        neos.push(newNeo)
    })
    addNeos(neos)

}

loadNeos()

function addNeos(neos) {
    var ulElements = document.getElementById('neos-list')
    neos.forEach(neos => {
        var liElement = document.createElement('li')
        liElement.innerHTML = `id: ${neos.id}nome: ${neos.name} - diametro medio: ${neos.averageEstimatedDiameter} - sentido: ${neos.isSentry}`
        ulElements.appendChild(liElement)
    })
}