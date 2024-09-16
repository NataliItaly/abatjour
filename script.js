import goods from "./goods.json" with {type: "json"};

const bestList = document.querySelector('.best__list');
const contactsSelect = document.querySelector('.contacts__select');

//console.log(goods)

function setBestCards(arr) {
  goods.forEach((good, i) => {
    const price = good.price.slice(0, -3) + " " + good.price.slice(-3);
    console.log(price)
    const cardClass = (i === 3 || i === 4) ? "card_large" : "";
    const itemClass = (i === 3 || i === 4) ? "best__item_large" : "";
    const html = `
       <li class="best__item ${itemClass}">
              <a href="#" class="best__card card ${cardClass}">
                <h3 class="card__title">${good.title}</h3>
                <div class="card__price">from ${price} $</div>
                <div class="card__info">
                  &#42; The cost varies depending on the size of the product
                </div>
                <button class="btn card__btn">
                  Order
                  <svg
                    width="81"
                    height="8"
                    viewBox="0 0 81 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M80.3536 4.35355C80.5488 4.15828 80.5488 3.8417 80.3536 3.64644L77.1716 0.464459C76.9763 0.269197 76.6597 0.269197 76.4645 0.464459C76.2692 0.659722 76.2692 0.976304 76.4645 1.17157L79.2929 3.99999L76.4645 6.82842C76.2692 7.02368 76.2692 7.34027 76.4645 7.53553C76.6597 7.73079 76.9763 7.73079 77.1716 7.53553L80.3536 4.35355ZM5.24538e-08 4.5L80 4.49999L80 3.49999L-5.24535e-08 3.5L5.24538e-08 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <img
                  src="./assets/images/best/${i + 1}.jpg"
                  alt=""
                  class="card__img"
                />
              </a>
            </li>
    `;
    bestList.insertAdjacentHTML("beforeend", html)
  });
}

setBestCards(goods)


// set options

function setOption() {
  let time = 9;
  while (time <= 18) {
    const option = `<option value="${time}" class="contacts__option">${setZero(time)}.00</option>`;
    time++;
    contactsSelect.insertAdjacentHTML("beforeend", option);
  }
}

setOption()

function setZero(num) {
  return num < 10 ? `0${num}` : `${num}`;
}

