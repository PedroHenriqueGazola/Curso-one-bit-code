import 'core-js'
import 'regenerator-runtime/runtime'
import Object from "./objects";
import { getObjects } from './objects_services';

async function armazenarObjetos() {
    var sentryObjects = []
    let sentryObjectsJson = await getObjects()
    sentryObjectsJson.forEach(sentry => {
        const newSentry = new Object(sentry.sentryId, sentry.fullname, sentry.year_range_min, sentry.year_range_max)
        sentryObjects.push(newSentry)
    })
    showObjects(sentryObjects);
}

armazenarObjetos();

function showObjects(sentryObjects) {
    sentryObjects.forEach(sentry => {
        var newLi = document.createElement('li');
        newLi.innerHTML = `(${sentry.id}) ${sentry.name}, risco de colisão minimo?: ${sentry.sentryyearmin}, risco de colisão maximo?: ${sentry.sentryyearmax}`;
        document.getElementById('list-objects').appendChild(newLi);
    });
}

