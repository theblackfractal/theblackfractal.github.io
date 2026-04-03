import{y as K,G as J,I as q,J as N,u as P,r as e,V as M,W as B,K as ee,N as H,e as z,T as te,U as F,X as Q,C as re,Y as ae,Z as ne,_ as oe,Q as se,$ as k,a0 as ie,a1 as le,a2 as ce}from"./index-Do7Bq5XE.js";const ue=new J(-1,1,1,-1,0,1);class me extends q{constructor(){super(),this.setAttribute("position",new N([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new N([0,2,0,0,2,0],2))}}const pe=new me;class fe{constructor(a){this._mesh=new K(pe,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,ue)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}const de=()=>parseInt(ae.replace(/\D+/g,"")),ve=de(),A=new M,W=new Q,b=new M,T=new M,D=new M,Z=new oe;e.forwardRef(({autoTransform:i=!0,matrix:a,axisLock:p,dragLimits:o,onHover:s,onDragStart:m,onDrag:n,onDragEnd:y,children:u,dragConfig:l,...r},c)=>{const w=P(d=>d.controls),{camera:h,size:v,raycaster:f,invalidate:E}=P(),t=e.useRef(null),_=ne({onHover:({hovering:d})=>s&&s(d??!1),onDragStart:({event:d})=>{w&&(w.enabled=!1);const{point:x}=d;t.current.matrix.decompose(A,new se,new M),b.copy(x),T.copy(b).sub(A),m&&m(A),E()},onDrag:({xy:[d,x],intentional:S,event:O})=>{if(!S)return;l&&l.preventOverlap&&O.preventDefault();const L=(d-v.left)/v.width*2-1,X=-((x-v.top)/v.height)*2+1;if(W.set(L,X),f.setFromCamera(W,h),!p)h.getWorldDirection(D).negate();else switch(p){case"x":D.set(1,0,0);break;case"y":D.set(0,1,0);break;case"z":D.set(0,0,1);break}Z.setFromNormalAndCoplanarPoint(D,b),f.ray.intersectPlane(Z,b);const I=t.current.matrix.clone(),U=t.current.matrixWorld.clone(),g=new M(b.x-T.x,b.y-T.y,b.z-T.z);if(o&&(g.x=o[0]?Math.max(Math.min(g.x,o[0][1]),o[0][0]):g.x,g.y=o[1]?Math.max(Math.min(g.y,o[1][1]),o[1][0]):g.y,g.z=o[2]?Math.max(Math.min(g.z,o[2][1]),o[2][0]):g.z),i){t.current.matrix.setPosition(g);const C=t.current.matrix.clone().multiply(I.invert()),R=t.current.matrix.clone().multiply(U.invert());n&&n(t.current.matrix,C,t.current.matrixWorld,R)}else{const C=new F().copy(t.current.matrix);C.setPosition(g);const R=C.clone().multiply(I.invert()),Y=C.clone().multiply(U.invert());n&&n(C,R,t.current.matrixWorld,Y)}E()},onDragEnd:()=>{w&&(w.enabled=!0),y&&y(),E()}},{drag:{filterTaps:!0,threshold:1,...typeof l=="object"?l:{}}});return e.useImperativeHandle(c,()=>t.current,[]),e.useLayoutEffect(()=>{a&&(t.current.matrix=a)},[a]),e.createElement("group",{ref:t,..._(),matrix:a,matrixAutoUpdate:!1,...r},u)});function V(i){const a=window.devicePixelRatio||1;return Math.round(i*a)/a}const $=e.createContext(null),G=new WeakMap;function he(){return e.useContext($)}e.forwardRef(({children:i,style:a,...p},o)=>{const s=he(),m=e.useRef(null);e.useImperativeHandle(o,()=>m.current,[]);const{width:n,height:y}=P(r=>r.size),u=e.useContext(k),l=e.useMemo(()=>{let r=G.get(s.fixed);return r||(r=ie.createRoot(s.fixed),G.set(s.fixed,r)),r},[s.fixed]);return z(()=>{if(s.delta>s.eps){let r=s.horizontal?-n*(s.pages-1)*s.offset:0,c=s.horizontal?0:y*(s.pages-1)*-s.offset;s.pixelPerfect&&(r=V(r),c=V(c)),m.current.style.transform=`translate3d(${r}px,${c}px,0)`}}),l.render(e.createElement("div",{ref:m,style:{...a,position:"absolute",top:0,left:0,willChange:"transform"},...p},e.createElement($.Provider,{value:s},e.createElement(k.Provider,{value:u},i)))),null});e.forwardRef(({name:i,defaultValue:a,normalized:p,usage:o=le,type:s="float"},m)=>{const n=e.useRef(null);e.useImperativeHandle(m,()=>n.current,[]),e.useLayoutEffect(()=>{const u=n.current.__r3f.parent.object;u.geometry.attributes[i]=n.current;const l=Array.isArray(a)?a:[a],r=Array.from({length:u.userData.limit},()=>l).flat();switch(s){case"float":n.current.array=new Float32Array(r);break;case"int":n.current.array=new Int32Array(r);break;case"uint":n.current.array=new Uint32Array(r);break;case"short":n.current.array=new Int16Array(r);break;case"ushort":n.current.array=new Uint16Array(r);break;case"byte":n.current.array=new Uint8Array(r);break}return n.current.itemSize=l.length,n.current.count=r.length/n.current.itemSize,()=>{delete u.geometry.attributes[i]}},[i]);let y=0;return z(()=>{const u=n.current.__r3f.parent.object;if(u.userData.frames===1/0||y<u.userData.frames){for(let l=0;l<u.userData.instances.length;l++){const c=u.userData.instances[l].current[i];c!==void 0&&(n.current.set(Array.isArray(c)?c:typeof c.toArray=="function"?c.toArray():[c],l*n.current.itemSize),n.current.needsUpdate=!0)}y++}}),e.createElement("instancedBufferAttribute",{ref:n,usage:o,normalized:p})});e.createContext(null);const j="__drei_view_tunnel__";globalThis[j]||(globalThis[j]=ce());e.createContext(null);function xe(){const i=P(a=>a.gl);return e.useEffect(()=>(i.shadowMap.autoUpdate=!1,i.shadowMap.needsUpdate=!0,()=>{i.shadowMap.autoUpdate=i.shadowMap.needsUpdate=!0}),[i.shadowMap]),null}class ye extends H{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new M(0,0,0)},lightColor:{value:new re("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new Q(0,0)}},transparent:!0,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;
        uniform vec3 spotPosition;
        uniform float attenuation;

        #include <common>
        #include <logdepthbuf_pars_vertex>

        void main() {
          // compute intensity
          vNormal = normalize(normalMatrix * normal);
          vec4 worldPosition = modelMatrix * vec4(position, 1);
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewZ = viewPosition.z;

          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);

          gl_Position = projectionMatrix * viewPosition;

          #include <logdepthbuf_vertex>
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying float vViewZ;
        varying float vIntensity;

        uniform vec3 lightColor;
        uniform float anglePower;
        uniform sampler2D depth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform float opacity;

        #include <packing>
        #include <logdepthbuf_pars_fragment>

        float readDepth(sampler2D depthSampler, vec2 uv) {
          float fragCoordZ = texture(depthSampler, uv).r;

          // https://github.com/mrdoob/three.js/issues/23072
          #ifdef USE_LOGDEPTHBUF
            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));
          #else
            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);
          #endif

          return viewZ;
        }

        void main() {
          #include <logdepthbuf_fragment>

          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));
          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);
          float intensity = vIntensity * angleIntensity;

          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry
          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;
          if (isSoft) {
            vec2 uv = gl_FragCoord.xy / resolution;
            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));
          }

          gl_FragColor = vec4(lightColor, intensity * opacity);

          #include <tonemapping_fragment>
          #include <${ve>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}}function ge({opacity:i=1,radiusTop:a,radiusBottom:p,depthBuffer:o,color:s="white",distance:m=5,angle:n=.15,attenuation:y=5,anglePower:u=5}){const l=e.useRef(null),r=P(t=>t.size),c=P(t=>t.camera),w=P(t=>t.viewport.dpr),[h]=e.useState(()=>new ye),[v]=e.useState(()=>new M);a=a===void 0?.1:a,p=p===void 0?n*7:p;const f=e.useMemo(()=>{if(!o)return null;const t=o.image.width,_=o.image.height,d=new B(t,_,{depthBuffer:!0,stencilBuffer:!1});d.depthTexture=new ee(t,_),d.depthTexture.format=o.format,d.depthTexture.type=o.type;const x=new H({uniforms:{tDepth:{value:null}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDepth;
        varying vec2 vUv;
        void main() {
          gl_FragDepth = texture2D(tDepth, vUv).r;
          gl_FragColor = vec4(0.0); // Color doesn't matter, we only care about depth
        }
      `,depthWrite:!0,depthTest:!1}),S=new fe(x);return{depthCopyTarget:d,copyMaterial:x,copyQuad:S}},[o]);e.useEffect(()=>()=>{f&&(f.depthCopyTarget.dispose(),f.depthCopyTarget.depthTexture?.dispose(),f.copyMaterial.dispose(),f.copyQuad.dispose())},[f]),e.useLayoutEffect(()=>{const t=o?[r.width*w,r.height*w]:[0,0];if(!o||!f){h.uniforms.depth.value=null,h.uniforms.resolution.value=[0,0];return}h.uniforms.depth.value=f.depthCopyTarget.depthTexture,h.uniforms.resolution.value=t},[h,o,f,r.width,r.height,w]),z(({gl:t})=>{if(!o||!f)return;const{depthCopyTarget:_,copyMaterial:d,copyQuad:x}=f;d.uniforms.tDepth.value=o;const S=t.getRenderTarget();t.setRenderTarget(_),x.render(t),t.setRenderTarget(S)},{before:"render"}),z(()=>{h.uniforms.spotPosition.value.copy(l.current.getWorldPosition(v)),l.current.lookAt(l.current.parent.target.getWorldPosition(v))});const E=e.useMemo(()=>{const t=new te(a,p,m,128,64,!0);return t.applyMatrix4(new F().makeTranslation(0,-m/2,0)),t.applyMatrix4(new F().makeRotationX(-Math.PI/2)),t},[m,a,p]);return e.createElement(e.Fragment,null,e.createElement("mesh",{ref:l,geometry:E,raycast:()=>null},e.createElement("primitive",{object:h,attach:"material","uniforms-opacity-value":i,"uniforms-lightColor-value":s,"uniforms-attenuation-value":y,"uniforms-anglePower-value":u,"uniforms-cameraNear-value":c.near,"uniforms-cameraFar-value":c.far})))}const Me=e.forwardRef(({opacity:i=1,radiusTop:a,radiusBottom:p,depthBuffer:o,color:s="white",distance:m=5,angle:n=.15,attenuation:y=5,anglePower:u=5,volumetric:l=!0,debug:r=!1,children:c,...w},h)=>{const v=e.useRef(null);return e.useImperativeHandle(h,()=>v.current,[]),e.createElement("group",null,r&&v.current&&e.createElement("spotLightHelper",{args:[v.current]}),e.createElement("spotLight",{ref:v,angle:n,color:s,distance:m,castShadow:!0,...w},l&&e.createElement(ge,{debug:r,opacity:i,radiusTop:a,radiusBottom:p,depthBuffer:o,color:s,distance:m,angle:n,attenuation:y,anglePower:u})),c&&e.cloneElement(c,{spotlightRef:v,debug:r}))});export{xe as B,Me as S};
