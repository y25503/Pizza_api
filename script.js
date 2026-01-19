
const API_URL = 'https://foodish-api.com/api/images/pizza';


const imgElement = document.getElementById('pizza-img');
const loadingText = document.getElementById('loading-text');
const btnElement = document.getElementById('reload-btn');


async function fetchpizzaImage() {
    
    imgElement.style.display = 'none';
    loadingText.style.display = 'block';
    btnElement.disabled = true;

    try {

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('通信エラー');

        const data = await response.json();
        const imageUrl = data.image;

        imgElement.onload = () => {
            loadingText.style.display = 'none';
            imgElement.style.display = 'block';
            btnElement.disabled = false;
        };

        imgElement.src = imageUrl;

    } catch (error) {
        console.error('エラー:', error);
        loadingText.textContent = '（取得失敗）';
        btnElement.disabled = false;
    }
}


window.addEventListener('load', fetchpizzaImage);


btnElement.addEventListener('click', fetchpizzaImage);