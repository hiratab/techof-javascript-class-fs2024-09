function buildForm(formId, inputs, buttons) {
  inputs.forEach(input => {
    const inputElement = document.createElement("input");
    inputElement.type = input.type;
    inputElement.id = input.id;
    inputElement.placeholder = input.placeholder;

    inputElement.addEventListener("input", (event) => {
      const result = input.validation(event.target.value);

      if (!result) {
        inputElement.style.border = "1px solid red";
      }
    })

    document.getElementById(formId).appendChild(inputElement)
      
    document.getElementById(formId).appendChild(document.createElement("br"));
  });

  buttons.forEach(button => {
    const buttonElement = document.createElement("button");
    buttonElement.id = button.id;
    buttonElement.onclick = button.onclick;
    buttonElement.innerText = button.label;

    document.getElementById(formId).appendChild(buttonElement);
  });
}

{/* <div id="formId">
  <input />
  <input />
  <input />
  <input />
  <input />
  <input />

  <button>Submit</button>
  <button>Submit</button>
  <button>Submit</button>
  <button>Submit</button>
  <button>Submit</button>
  <button>Submit</button>
</div> */}
