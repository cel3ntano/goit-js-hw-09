import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},s="feedback-form-state",a=document.querySelector(".feedback-form"),m=a.elements.email,l=a.elements.message;try{const e=JSON.parse(localStorage.getItem(s));m.value=e.email||"",l.value=e.message||""}catch{}function r(e){t.email=e.currentTarget.elements.email.value.trim(),t.message=e.currentTarget.elements.message.value.trim(),localStorage.setItem(s,JSON.stringify(t))}function o(e){e.preventDefault(),t.email.trim()!==""&&t.message.trim()!==""?(console.log(t),localStorage.removeItem(s),a.reset()):alert("Fill please all fields")}a.addEventListener("input",r);a.addEventListener("submit",o);
//# sourceMappingURL=commonHelpers2.js.map