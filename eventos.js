const titleInput = document.querySelector('.title-input');
const button = document.querySelector('.container-btn');
const container = document.querySelector('.container');
const list = document.querySelector('#list');
const conteo = document.querySelector('#conteo');


let notas = []

const getListItemHtml = ({ title }) => {
    //TITLE Y DESCRIPTION SON LAS PROPIEDADES DE ESA NOTA

    //CREO EL HTML DEL LI
    const listItemHtml =
        `
        <button class="seleccion">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.3"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
        <div class="tarea">
        <p>${title}</p>                         // <--- COMENTARIO: Esto se puede poner asi????
        </div>
        <button class="delete">
            <i class="fa-solid fa-trash" style="color: #f64456;"></i>
        </button>
        </div>
    `
    //RETORNO EL HTML PARA PODER UTILIZARLO EN MI FORMULARIO
    return listItemHtml
}

const renderNotes = () => {
    //A PARTIR DEL ARRAY DE LAS NOTAS, USO UN BUCLE PARA ACCEDER A CADA NOTA
    notas.forEach(note => { //NOTE ES EL OBJETO O VALOR DE CADA NOTA
        //CREO EL ELEMENTO LI
        const listElement = document.createElement('li')

        //AÑADO LA CLASE CORRESPONDIENTE
        listElement.classList.add('list-item')

        //USANDO LA FUNCION, OBTENGO EL HTML DEL ELEMENTO
        listElement.innerHTML = getListItemHtml(note)

        //AGREGO EL ELEMENTO CREADO A LA LISTA
        list.append(listElement)
    })
}

container.addEventListener('submit', e => {
    //preventDefault, ELIMIN EL ELEMENTO PREDEFINIDO DEL SUBMIT
    e.preventDefault()

    //CREO UN OBJETO CON LOS VALORES DE L OS INPUTS
    const newNote = {
        title: titleInput.value
    }

    //CREO UN ARRAY, AGREGANDO EL OBJETO
    notas = notas.concat(newNote)

    //GUARDO EL ARRAY EN LOCALSTOGE, EN FORMATO JSON
    localStorage.setItem('notes', JSON.stringify(notas))

    //RENDERIXO EL HTML
    renderNotes()

    //REINICIO LOS VALORES DE LOS INPUTS
    titleInput.value = ''

})

const getNotes = () => {
    //OBTENGO LAS NOTAS EN FORMATO JSON
    const notasJSON = localStorage.getItem('notes')
    console.log(notasJSON);

    //CREO UN NUEVO ARRAY CON UNA CONDICION, SI EXISTE UN ARRAY EN LOCALSTORAGE, USO ESE ARRAY, SI NO, CREO UN ARRAY VACIO
    notas = notasJSON ? JSON.parse(notasJSON) : []

    renderNotes()
}

getNotes()

