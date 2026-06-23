
// Loader
gsap.to('#loader',{opacity:0,delay:1,onComplete:()=>loader.remove()});

// Lenis
const lenis=new Lenis(); function raf(t){lenis.raf(t);requestAnimationFrame(raf)} requestAnimationFrame(raf);

// Cursor
const c=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>gsap.to(c,{x:e.clientX,y:e.clientY,duration:.15}));

// Counters
document.querySelectorAll('.counter').forEach(el=>{
 let target=+el.dataset.target,obj={v:0};
 gsap.to(obj,{v:target,scrollTrigger:el,onUpdate:()=>el.textContent=Math.floor(obj.v)});
});

// Menu
menuBtn.onclick=()=>mobileMenu.style.display=mobileMenu.style.display==='flex'?'none':'flex';

// Magnetic buttons
document.querySelectorAll('.magnetic').forEach(btn=>{
 btn.addEventListener('mousemove',e=>gsap.to(btn,{x:(e.offsetX-btn.offsetWidth/2)/5,y:(e.offsetY-btn.offsetHeight/2)/5}));
 btn.addEventListener('mouseleave',()=>gsap.to(btn,{x:0,y:0}));
});

// Horizontal scroll
gsap.to('.track',{xPercent:-200,ease:'none',scrollTrigger:{trigger:'.horizontal',pin:true,scrub:1}});

// Three.js particles
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(75,innerWidth/innerHeight,.1,1000);
const renderer=new THREE.WebGLRenderer({canvas:bg,alpha:true});
renderer.setSize(innerWidth,innerHeight);
const geo=new THREE.BufferGeometry(); const verts=[];
for(let i=0;i<3000;i++) verts.push((Math.random()-.5)*50,(Math.random()-.5)*50,(Math.random()-.5)*50);
geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));
const pts=new THREE.Points(geo,new THREE.PointsMaterial({size:.05})); scene.add(pts); camera.position.z=5;
(function animate(){requestAnimationFrame(animate);pts.rotation.y+=.001;renderer.render(scene,camera)})();
