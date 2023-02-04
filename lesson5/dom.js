const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    if(input.value !== "") {
        let myName = input.value;
     
								const li = document.createElement("li");
								const deleteBtn = document.createElement("button");
					
        li.textContent = myName;
								deleteBtn.texContent = '🎈';
								deleteBtn.addEventListener("click", () => {
										list.removeChild(li);
								});
					
								li.appendChild(deleteBtn);
        list.appendChild(li);
        
    }
				input.Value = "";
				input.focus();
});