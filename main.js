const snap = Snap('#SVG')
const yo_central = snap.select('#circulo_pequeno')
const yo_central_gradient = snap.select('#radial_gradient_yo_central')
const yo_azul = snap.select('#feGaussianBlur41708')


yo_azul.animate({
    // stdDeviation: '10.468147 1 10.468147'
}, 1000)




yo_central.mouseover(function() {
    yo_central.animate({ r: 200 }, 1000 ) 
    yo_central_gradient.animate({ r: 200 }, 1000 )
})

yo_central.mouseout(function() {
    yo_central.animate({ r: 60 }, 1000 ) 
    yo_central_gradient.animate({ r: 60 }, 1000 )
})


setTimeout(function(){

}, 5000)

