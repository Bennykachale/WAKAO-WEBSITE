function showSection(sectionId) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => section.classList.add('hidden'));

  document.getElementById(sectionId).classList.remove('hidden');
}

function addItem(inputId, listId) {
  const input = document.getElementById(inputId);
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter something");
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  document.getElementById(listId).appendChild(li);
  input.value = "";
}
