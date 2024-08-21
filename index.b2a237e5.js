var e=document.querySelector("table"),t=!0,n=null,a=function(n){var a=Array.from(e.querySelectorAll("tbody tr"));a.sort(function(e,a){var o=e.children[n].innerText,r=a.children[n].innerText;return(3===n?(o=parseInt(o),r=parseInt(r)):4===n&&(o=parseFloat(o.replace(/[$,]/g,"")),r=parseFloat(r.replace(/[$,]/g,""))),"number"==typeof o&&"number"==typeof r)?t?o-r:r-o:t?o.localeCompare(r):r.localeCompare(o)}),a.forEach(function(t){return e.querySelector("tbody").appendChild(t)}),t=!t};e.querySelectorAll("th").forEach(function(e,t){e.addEventListener("click",function(){a(t)})}),e.querySelectorAll("tbody tr").forEach(function(e){e.addEventListener("click",function(){n&&n.classList.remove("active"),e.classList.add("active"),n=e})}),document.body.insertAdjacentHTML("beforeend",'\n<form class="new-employee-form">\n  <label>Name: <input name="name" type="text" data-qa="name"></label>\n  <label>Position: <input name="position" type="text" data-qa="position"></label>\n  <label>Office:\n    <select name="office" data-qa="office">\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age"></label>\n  <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n  <button type="button" id="save-button">Save to table</button>\n</form>\n');var o=document.querySelector(".new-employee-form"),r=document.createElement("div");r.className="notification",r.setAttribute("data-qa","notification"),document.body.appendChild(r);var l=function(e,t){r.innerHTML='<span class="title">'.concat(t.toUpperCase(),"</span> ").concat(e),r.className="notification ".concat(t),setTimeout(function(){r.className="notification"},2e3)};document.getElementById("save-button").addEventListener("click",function(){var t=o.querySelector('input[name="name"]').value,n=o.querySelector('input[name="position"]').value,a=o.querySelector('select[name="office"]').value,r=o.querySelector('input[name="age"]').value,c=o.querySelector('input[name="salary"]').value,i=!0;if(t.length<4&&(l("Name must be at least 4 characters long.","error"),i=!1),(r<18||r>90)&&(l("Age must be between 18 and 90.","error"),i=!1),n&&a&&c||(l("All fields are required.","error"),i=!1),i){var u=document.createElement("tr"),d="$".concat(parseInt(c).toLocaleString("en-US"));u.innerHTML="<td>".concat(t,"</td><td>").concat(n,"</td><td>").concat(a,"</td><td>").concat(r,"</td><td>").concat(d,"</td>"),e.querySelector("tbody").appendChild(u),l("Employee added successfully!","success"),o.reset()}}),e.querySelectorAll("tbody td").forEach(function(e){e.addEventListener("dblclick",function(){var t=e.innerText,n=document.createElement("input");n.className="cell-input",n.value=t,e.innerText="",e.appendChild(n),n.focus(),n.addEventListener("blur",function(){e.innerText=n.value||t}),n.addEventListener("keypress",function(a){"Enter"===a.key&&(e.innerText=n.value||t)})})});
//# sourceMappingURL=index.b2a237e5.js.map