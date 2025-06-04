document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".download-btn"),o=document.querySelectorAll(".preview-btn");t.forEach(e=>{e.addEventListener("click",async function(){const r=this.getAttribute("data-download-id"),n=this.getAttribute("data-download-title"),i=this.querySelector(".download-text"),a=this.querySelector(".download-loading");this.disabled=!0,i.classList.add("hidden"),a.classList.remove("hidden");try{const d=await u(n),c=await fetch("/api/download",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({downloadId:r,userEmail:d,downloadType:d?"email-provided":"anonymous"})}),l=await c.json();if(c.ok)b(l.downloadUrl,l.filename),h(n);else throw new Error(l.error||"Download failed")}catch(d){console.error("Download error:",d),w(d.message)}finally{this.disabled=!1,i.classList.remove("hidden"),a.classList.add("hidden")}})}),o.forEach(e=>{e.addEventListener("click",function(){const r=this.getAttribute("data-preview-url");r?window.open(r,"_blank"):s("Preview not available for this resource.","info")})})});async function u(t){return new Promise(o=>{const e=m(t,o);document.body.appendChild(e)})}function m(t,o){const e=document.createElement("div");e.className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",e.innerHTML=`
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Download ${t}</h3>
        <p class="text-gray-600 mb-6">
          Get notified when we release new resources and receive our weekly analytics insights.
        </p>
        
        <form id="email-form" class="space-y-4">
          <div>
            <label for="download-email" class="block text-sm font-medium text-gray-700 mb-2">
              Email (optional)
            </label>
            <input 
              type="email" 
              id="download-email" 
              placeholder="your@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brandGreen focus:border-transparent"
            />
          </div>
          
          <div class="flex gap-3">
            <button 
              type="button" 
              id="skip-email"
              class="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Download Without Email
            </button>
            <button 
              type="submit"
              class="flex-1 bg-brandGreen text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Download & Subscribe
            </button>
          </div>
        </form>
      </div>
    `;const r=e.querySelector("#email-form"),n=e.querySelector("#download-email"),i=e.querySelector("#skip-email");return r.addEventListener("submit",a=>{a.preventDefault();const d=n.value.trim();document.body.removeChild(e),o(d||null)}),i.addEventListener("click",()=>{document.body.removeChild(e),o(null)}),e.addEventListener("click",a=>{a.target===e&&(document.body.removeChild(e),o(null))}),e}function b(t,o){const e=document.createElement("a");e.href=t,e.download=o,e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}function h(t){s(`${t} download started successfully!`,"success")}function w(t){s(`Download failed: ${t}`,"error")}function s(t,o="info"){const e=document.createElement("div");e.className=`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${o==="success"?"bg-green-100 border border-green-400 text-green-700":o==="error"?"bg-red-100 border border-red-400 text-red-700":"bg-blue-100 border border-blue-400 text-blue-700"}`,e.innerHTML=`
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${o==="success"?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>':o==="error"?'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>':'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'}
        </svg>
        <span>${t}</span>
      </div>
    `,document.body.appendChild(e),setTimeout(()=>{document.body.contains(e)&&document.body.removeChild(e)},5e3)}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".category-filter"),o=document.querySelectorAll(".category-section");t.forEach(e=>{e.addEventListener("click",function(){const r=this.getAttribute("data-category");t.forEach(n=>{n.classList.remove("bg-brandGreen","text-white"),n.classList.add("bg-white","text-gray-600","border")}),this.classList.remove("bg-white","text-gray-600","border"),this.classList.add("bg-brandGreen","text-white"),o.forEach(n=>{r==="all"||n.getAttribute("data-category-section")===r?n.style.display="block":n.style.display="none"})})})});
