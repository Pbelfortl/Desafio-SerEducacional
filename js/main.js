function showMenu (element) {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("show-menu")
}

function openPhoto (photo) {

    const container = document.querySelector(".container")

    const photoDiv = `
    <div class="show-photo">
        <div>
            <button onclick="closePhoto()">X</button>
            <img src="${photo}" />
        </div>
    </div>
    `
    container.innerHTML = container.innerHTML + photoDiv
}

function closePhoto () {
    const element = document.querySelector(".show-photo")
    element.remove()
} 