import * as THREE from '../build/three.module.js';

import Stats from './jsm/libs/stats.module.js';

import { STLLoader } from './jsm/loaders/STLLoader.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';

var container, stats;

var camera, cameraTarget, scene, renderer;

init();
animate();
var controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 2.5;
controls.maxDistance = 4;
controls.enablePan = false; 
// const axesHelper = new THREE.AxesHelper();
// scene.add( axesHelper );
function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 32, window.innerWidth / window.innerHeight, 1, 1000 );    
    // camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0, 3 ); 
    let xx = 0 ,yy = 0,zz = 3;
    camera.position.set(xx, yy, zz);
    document.querySelector('.back').addEventListener('click', function(){camera.position.set( xx, yy, -zz);});
    document.querySelector('.left').addEventListener('click', function(){camera.position.set( zz, yy, xx);});
    document.querySelector('.right').addEventListener('click', function(){camera.position.set( -zz, yy, xx);});
    document.querySelector('.front').addEventListener('click', function(){camera.position.set( xx, yy, zz);});
    document.querySelector('.top').addEventListener('click', function(){camera.position.set( 0, zz, 0);});
    document.querySelector('.buttom').addEventListener('click', function(){camera.position.set( 0, -zz, 0);});
    cameraTarget = new THREE.Vector3(0, 0, 0 );
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xD9E3EC );
    scene.fog = new THREE.Fog( 0x6FA8DC, 2, 15 );



    var loader = new STLLoader();
    var GingivaLower = [];
    var GingivaLowerfileUrls = ['./models/stl/binary/Gingiva/brittoGingivaLower (1).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaLower (2).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaLower (3).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaLower (4).stl',
                                './models/stl/binary/Gingiva/brittoGingivaLower (5).stl',
                                './models/stl/binary/Gingiva/brittoGingivaLower (6).stl',
                                './models/stl/binary/Gingiva/brittoGingivaLower (6).stl'
                ];
    var TeethLower = [];
    var TeethLowerfileUrls = ['./models/stl/binary/teeth/brittoTeethLower (1).stl', 
                              './models/stl/binary/teeth/brittoTeethLower (2).stl', 
                              './models/stl/binary/teeth/brittoTeethLower (3).stl', 
                              './models/stl/binary/teeth/brittoTeethLower (4).stl',
                              './models/stl/binary/teeth/brittoTeethLower (5).stl',
                              './models/stl/binary/teeth/brittoTeethLower (6).stl',
                              './models/stl/binary/teeth/brittoTeethLower (6).stl'
            ];
    var GingivaUpper = [];
    var GingivaUpperfileUrls = ['./models/stl/binary/Gingiva/brittoGingivaUpper (1).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaUpper (2).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaUpper (3).stl', 
                                './models/stl/binary/Gingiva/brittoGingivaUpper (4).stl',
                                './models/stl/binary/Gingiva/brittoGingivaUpper (5).stl',
                                './models/stl/binary/Gingiva/brittoGingivaUpper (6).stl',
                                './models/stl/binary/Gingiva/brittoGingivaUpper (7).stl'
            ];
    var TeethUpper = [];
    var TeethUpperfileUrls = ['./models/stl/binary/teeth/brittoTeethUpper (1).stl', 
                              './models/stl/binary/teeth/brittoTeethUpper (2).stl', 
                              './models/stl/binary/teeth/brittoTeethUpper (3).stl', 
                              './models/stl/binary/teeth/brittoTeethUpper (4).stl',
                              './models/stl/binary/teeth/brittoTeethUpper (5).stl',
                              './models/stl/binary/teeth/brittoTeethUpper (6).stl',
                              './models/stl/binary/teeth/brittoTeethUpper (7).stl'
];
    
    
    GingivaLowerfileUrls.forEach(function (GingivaLowerfileUrl) {
    loader.load( GingivaLowerfileUrl, function ( geometry ) {
    var material = new THREE.MeshPhongMaterial( { color: 0xFF6470, specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(-0.04, 0.1, 0 );
    mesh.rotation.set( 0.1, -0.1, 0.02);
    mesh.scale.set( 0.015, 0.015, 0.015 );
    scene.add( mesh );
    GingivaLower.push(mesh);
      } );
    });

    TeethLowerfileUrls.forEach(function (TeethLowerfileUrl) {
    loader.load( TeethLowerfileUrl, function ( geometry ) {
    var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( -0.04, 0.1, 0 );
    mesh.rotation.set( 0.1, -0.1, 0.02);
    mesh.scale.set( 0.015, 0.015, 0.015 );
    scene.add( mesh );
    TeethLower.push(mesh);
      } );
});
    GingivaUpperfileUrls.forEach(function (GingivaUpperfileUrl) {
    loader.load( GingivaUpperfileUrl, function ( geometry ) {
    var material = new THREE.MeshPhongMaterial( { color: 0xFF6470, specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(-0.04, 0.1, 0 );
    mesh.rotation.set( 0.1, -0.1, 0.02);
    mesh.scale.set( 0.015, 0.015, 0.015 );
    scene.add( mesh );
    GingivaUpper.push(mesh);
      } );
    });
    TeethUpperfileUrls.forEach(function (TeethUpperfileUrl) {
    loader.load( TeethUpperfileUrl, function ( geometry ) {
     var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 200 } );
     var mesh = new THREE.Mesh( geometry, material );
     mesh.position.set(-0.04, 0.1, 0 );
     mesh.rotation.set( 0.1, -0.1, 0.02);
     mesh.scale.set( 0.015, 0.015, 0.015 );
     scene.add( mesh );
     TeethUpper.push(mesh);
       } );
     });


     function updateCheckboxes(clickedCheckbox) {
      // Get all checkboxes with class 'checkbox'
      const checkboxes = document.querySelector('.checkbox');

      // Uncheck all checkboxes
      for (const checkbox of checkboxes) {
        if (checkbox !== clickedCheckbox) {
          checkbox.checked = false;
        }
      }
    }
    const slider = document.querySelector('.slider');
    slider.addEventListener('input', function (event) {
    let value = event.target.value;
//   Set the visibility of the meshes based on the slider value
  TeethLower.forEach(function (mesh, index) {

        if (index == value) {
       mesh.visible = true;
      } else {
      mesh.visible = false;
       }
       });
  GingivaLower.forEach(function (mesh, index) {

        if (index == value) {
       mesh.visible = true;
      } else {
      mesh.visible = false;
       }
       });
  GingivaUpper.forEach(function (mesh, index) {

        if (index == value) {
       mesh.visible = true;
      } else {
      mesh.visible = false;
       }
       });   
 TeethUpper.forEach(function (mesh, index) {

        if (index == value) {
       mesh.visible = true;
      } else {
      mesh.visible = false;
       }
       });    
  });

   
    // Lights

    scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

    addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
    addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );
    // renderer

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.shadowMap.enabled = true;

    container.appendChild( renderer.domElement );

    // stats

    stats = new Stats();
    container.appendChild( stats.dom );
    console.log(stats);

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function addShadowedLight( x, y, z, color, intensity ) {

    var directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set( x, y, z );
    scene.add( directionalLight );

    directionalLight.castShadow = true;

    var d = 1;
    directionalLight.shadow.camera.left = - d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = - d;

    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4;

    directionalLight.shadow.bias = - 0.002;

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    render();
    stats.update();

}

function render() {

    camera.lookAt( cameraTarget );

    renderer.render( scene, camera );

}