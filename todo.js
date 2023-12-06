// Get references to DOM elements
const addResourceBtn = document.getElementById('add-resource-btn');
const addResourceModal = document.getElementById('add-resource-modal');
const resourceNameInput = document.getElementById('resource-name');
const saveResourceBtn = document.getElementById('save-resource-btn');
const cancelResourceBtn = document.getElementById('cancel-resource-btn');

const editResourceModal = document.getElementById('edit-resource-modal');
const editResourceNameInput = document.getElementById('edit-resource-name');
const updateResourceBtn = document.getElementById('update-resource-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

const todoItemsList = document.querySelector('.todo-items');

// Create Resource
addResourceBtn.addEventListener('click', () => {
  addResourceModal.style.display = 'block';
});

saveResourceBtn.addEventListener('click', () => {
  const resourceName = resourceNameInput.value.trim();
  if (!resourceName) {
    return;
  }

  // Add resource to list
  const resourceItem = createResourceItem(resourceName);
  todoItemsList.appendChild(resourceItem);

  // Clear input field and close modal
  resourceNameInput.value = '';
  addResourceModal.style.display = 'none';
});

cancelResourceBtn.addEventListener('click', () => {
  addResourceModal.style.display = 'none';
});



// Edit Resource
function editResource(resourceName) {
    editResourceNameInput.value = resourceName;
    editResourceModal.style.display = 'block';
  
    // Store the resource item being edited
    const resourceItem = document.querySelector(`.todo-items li[data-resource-name="${resourceName}"]`);
  }
  
  

// Delete Resource
function deleteResource(resourceName) {
  // Remove resource from list
  const resourceItem = document.querySelector(`.todo-items li[data-resource-name="${resourceName}"]`);
  resourceItem.parentNode.removeChild(resourceItem);
}

// Create Resource Item
function createResourceItem(resourceName) {
  const resourceItem = document.createElement('li');
  resourceItem.setAttribute('data-resource-name', resourceName);
  resourceItem.textContent = resourceName;

  // Add edit and delete icons
  const editIcon = document.createElement('i');
  editIcon.className = 'bx bx-pencil';
  editIcon.addEventListener('click', () => editResource(resourceName));

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'bx bx-trash';
  deleteIcon.addEventListener('click', () => deleteResource(resourceName));

  resourceItem.appendChild(editIcon);
  resourceItem.appendChild(deleteIcon);

  return resourceItem;
}
