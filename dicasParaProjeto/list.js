function buildList(elementId, data, user) {
  const destinationElement = document.getElementById(elementId);
  data.forEach(element => {
    const item = document.createElement("div");
    destinationElement.appendChild(item);
    item.classList.add("flat");

    /*
      <div>
        <div>
          <img src="https://via.placeholder.com/150">
        </div>
      </div>
    */
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.classList.add("flat-image");
    image.src = element.image;
    imageContainer.appendChild(image);
    item.appendChild(imageContainer);


    /*
      <div display: flex; flex-direction: row>
        <div>
          <img src="https://via.placeholder.com/150">
        </div>
        <div>
          <p>Name</p>
          <p>Description</p>
          <p>Price</p>
        </div>
        <div>
          <svg>
        </div>
      </div>
    */
    const elementInfo = document.createElement("div");
    elementInfo.classList.add("flat-info");
    const name = document.createElement("p");
    name.innerText = element.name;
    elementInfo.appendChild(name);

    const description = document.createElement("p");
    description.innerText = element.description;
    elementInfo.appendChild(description);

    const price = document.createElement("p");
    price.innerHTML = `&#8364; ${element.price}`;
    elementInfo.appendChild(price);
    item.appendChild(elementInfo);

    const favIconContainer = document.createElement("div");
    const favButton = document.createElement("button");
    favButton.id = element.id;
    favButton.innerHTML = `
    <svg height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-10 0 600 600" xml:space="preserve">
      <path class="fav-icon" d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
	c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
	c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
	c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
	c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
	C512,137.911,498.388,101.305,474.655,74.503z" />
    </svg>
    `;

    if (user.favorites.includes(element.id.toString())) {
      favButton.children[0].children[0].classList.add('fav-on');
    }

    favButton.onclick = function() {
      if (this.children[0].children[0].classList.contains('fav-on')) {
        this.children[0].children[0].classList.remove('fav-on');

        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        user.favorites = user.favorites.filter(fav => fav !== this.id);

        localStorage.setItem('user', JSON.stringify(user));
      } else {
        this.children[0].children[0].classList.add('fav-on');

        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        user.favorites.push(this.id);
  
        localStorage.setItem('user', JSON.stringify(user));
      }
    }
    favIconContainer.appendChild(favButton);
    item.appendChild(favIconContainer);
  });
}


