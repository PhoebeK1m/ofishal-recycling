import { client } from "https://cdn.jsdelivr.net/npm/@gradio/client/+esm";

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const background = document.querySelector('.navbar__container')

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
    background.classList.toggle('active')
});

function createListFromData(data) {
    const listItem = document.createElement('li');
    if (Array.isArray(data)) {
        const subList = document.createElement('ul');
        data.forEach(item => {
            subList.appendChild(createListFromData(item));
        });
        listItem.appendChild(subList);
    } else if (typeof data === 'object') {
        const subList = document.createElement('ul');
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const subListItem = document.createElement('li');
                subListItem.innerHTML = `${JSON.stringify(data[key])}`;
                subList.appendChild(subListItem);
            }
        }
        listItem.appendChild(subList);
    } else {
        listItem.textContent = data;
    }
    return listItem;
}

const imageInput = document.getElementById('image-input');
const uploadedImage = document.getElementById('uploaded-image');
const deleteButton = document.getElementById('delete-button');
const resultContainer = document.getElementById('result-container');

imageInput.addEventListener('change', async function () {
    const file = imageInput.files[0];
    if (file) {
        uploadedImage.src = URL.createObjectURL(file);
        uploadedImage.style.display = 'block';
        deleteButton.style.display = 'block';
        resultContainer.style.textAlign = "center";
        resultContainer.innerHTML = '\nloading...';

        const response = await fetch(URL.createObjectURL(file));
        const inputImage = await response.blob();

        const app = await client("https://beansbeansbeansbeans-recycletree.hf.space/");
        const result = await app.predict(1, [
            inputImage,
        ]);

        const resultList = document.createElement('ul');

        for (const key in result.data) {
                console.log(key);
                const listItem = document.createElement('li');
                listItem.appendChild(createListFromData(result.data[key]));
                if (key === "2") {
                    listItem.innerHTML = `<strong>Item:</strong> ${listItem.textContent}`;
                    resultList.appendChild(listItem);
                } else if (key === "3") {
                    listItem.innerHTML = `<strong>Is it recyclable?</strong> ${listItem.textContent}`;
                    resultList.appendChild(listItem);
                }            
        }

        resultContainer.innerHTML = ''; 
        resultContainer.style.textAlign = "left";
        resultContainer.appendChild(resultList);
        console.log(result.data);
    }
});

deleteButton.addEventListener('click', function () {
    uploadedImage.src = '';
    uploadedImage.style.display = 'none';
    deleteButton.style.display = 'none';
    imageInput.value = '';
    resultContainer.innerHTML = '';
});