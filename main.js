const snap = Snap('#SVG')
const yo_central = snap.select('#circulo_pequeno')
const yo_central_gradient = snap.select('#radial_gradient_yo_central')


const yo_1_circulo = snap.select('#yo_1_circulo')
const yo_1_brillo = snap.select('#yo_1_brillo')

const radialGradient33487 = snap.select('#radialGradient33487')
const stop_yo_1 = snap.select('#stop_yo_1')


yo_1_circulo.mouseover(function() {
    // yo_central.addClass('miclase')
    // yo_central.animate({ r: 0 }, 100)
    // yo_1_circulo.animate({ r: 400, fill: '#F1DBCB' }, 1000 ) 
})

yo_1_circulo.mouseout(function() {
    // yo_central.removeClass('miclase')
    // yo_central.animate({ r: 60 }, 1000)
    // yo_1_circulo.animate({ r: 51.694, fill: 0 }, 1000 ) 
})




yo_central.mouseover(function() {
    yo_central.animate({ r: 200 }, 1000 ) 
    yo_central_gradient.animate({ r: 200 }, 1000 )
})

yo_central.mouseout(function() {
    yo_central.animate({ r: 60 }, 1000 ) 
    yo_central_gradient.animate({ r: 60 }, 1000 )
})



