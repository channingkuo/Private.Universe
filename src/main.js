import * as THREE from 'three'

const scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
})
var cube = new THREE.Mesh(geometry, material)
// scene.add(cube)

var texture1 = new THREE.ImageUtils.loadTexture('./static/images/earthmap1k.jpg')
var sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 100, 100),
    // new THREE.MeshLambertMaterial({ map: texture1 })
    new THREE.MeshBasicMaterial({
        color: 0x00ff00
    })
)
scene.add(sphere1)
sphere1.position.set(1, 1, 1)
var texture2 = new THREE.ImageUtils.loadTexture('./static/images/moonmap1k.jpg')
var sphere2 = new THREE.Mesh(
    new THREE.SphereGeometry(1, 1, 1),
    // new THREE.MeshLambertMaterial({ map: texture2 })
    new THREE.MeshBasicMaterial({
        color: 0x00ff00
    })
)
// scene.add(sphere2)

camera.position.z = 5

var animate = function () {
    // requestAnimationFrame(animate)

    cube.rotation.x += 0.1
    cube.rotation.y += 0.1

    renderer.render(scene, camera)
}

animate()
