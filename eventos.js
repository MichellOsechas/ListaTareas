const input = document.querySelector('#input');
const button = document.querySelector('#main-desc-btn');
const container = document.querySelector('.container');
const list = document.querySelector('#list');
const conteo = document.querySelector('#conteo');

console.log(list);

container.addEventListener('submit', e => {
    e.preventDefault();
    const newTask = document.createElement('li');
    newTask.classList.add('list-item');
    newTask.innerHTML = `
    <button class="seleccion">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.3"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
    <div class="tarea">
        ${input.value}
    </div>
    <button class="delete">
        <i class="fa-solid fa-trash" style="color: #f64456;"></i>
    </button>
    `;
    list.append(newTask);
    input.value = '';

    localStorage.setItem('task', list.innerHTML);
});
