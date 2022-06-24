let servises = {
    face: [
        makeServises("RF-лифтинг лица (тела)", "1 сеанс - 1000 грн", "4 сеанса - 3600 грн", "","","","", "img/image.png"),
        
        makeServises("Миостимуляция лица", 
        "10 сеансов - 5000 грн", "", "", 
        "7000 грн", "", "", 
        "img/image2.png"),
        makeServises("Французский скульптурно-моделирующий массаж", 
        "1.5 ч. - 1800 грн", "", "", 
        "", "", "", 
        "img/Rectangle36.png"),
        
    ],
    body: [
        makeServises("Ультрозвуковая кавитация", 
        "1 сеанс - 900 грн", "4 сеанса - 3200 грн", "8 сеансов - 5600 грн", 
        "", "4000 грн", "800 грн", 
        "img/image1.png"),
        makeServises("Прессотерапия", 
        "1 сеанс - 450 грн", "5 сеанса - 2000 грн ", "10 сеанса - 3000 грн", 
        "", "2250 грн", "4500 грн", 
        "img/Rectangle3.png"),
        makeServises("Вакуумно-баночный массаж ", 
        "1 сеанс - 450 грн", "5 сеанса - 2000 грн", "", 
        "", "", "", 
        "img/Rectangle4.png"),
        makeServises("Вакуумно-роликовый массаж", 
        "1 сеанс - 600 грн", "5 сеанса - 2750 грн ", "10 сеансов - 5000 грн", 
        "", " 3000 грн", " 6000 грн", 
        "img/Rectangle30.png"),
        makeServises("Фито-солевое обертывание", 
        "90 мин / 2200 грн (размер 42 - 48)", "90 мин / 2700 грн (размер 50 - 54)", "90 мин / 3500 грн (размер 56 - 60)", 
        "", "", "", 
        "img/Rectangle34.png"),
        makeServises("Миостимуляция", 
        "1 сеанс - 500 грн", "5 сеанса - 2250 грн", "10 сеансов - 4000 грн", 
        "", "", "", 
        "img/Rectangle11.png"),
        makeServises("Обертывание в термоодеяле", 
        "1 сеанс - 750 грн", "", "", 
        "", "", "", 
        "img/Rectangle16.png"),
        makeServises("Миостимуляция на спину", 
        "1 сеанс - 500 грн", "5 сеанса - 2250 грн", "10 сеансов - 4000 грн", 
        "", "", "", 
        "img/Rectangle10.png"),
    ],
    eyelashes: [
        makeServises("Оформление и окрашивание бровей", 
        "Художественное оформление", " и стойкое окрашивание - 700 грн", "", 
        "", "", "", 
        "img/brow.png"),
        makeServises("Ламинирование ресниц", 
        "Снятие - 200 грн", "Наращивание - 1500 грн", "Ламинирование - 1500 грн", 
        "", "", "", 
        "img/Rectangle32.png"),
        
    ],
    epilation: [
        makeServises("Лазерная эпиляция", 
        "", "", "", 
        "", "", "", 
        "img/feed.png"),
        makeServises("Лазерное лечение (лицо)", 
        "Акне (легкой и средней тяжести) - от 700 грн", "Повышенная жирность кожи - от 900 грн", "Расширенные поры - 400 от грн", 
        "", "", "", 
        "img/Rectangle14.png"),
        makeServises("Лазерное омоложение", 
        "", "", "", 
        "", "", "", 
        "img/Rectangle17.png"),
        makeServises("Лазерное удаление", 
        "Купероз на лице - от 500 грн", "Красные звездочки, сосудестая сетка - от 500 грн", "", 
        "", "", "", 
        "img/Rectangle17.png"),
    ]
}

function makeServises(name, prise1, prise2, prise3, span1, span2, span3, img) {
    return { name, prise1, prise2, prise3, span1, span2, span3, img }
}
function app(){
    const sell = (selector) => document.querySelector(selector);
    const buttons = document.querySelectorAll(".servises__btn");

    rander();

    function rander() {
      for (let i = 0; i < Object.keys(servises).length; i++) {
        servises[Object.keys(servises)[i]].forEach(content);
      }
    }
  
    buttons.forEach((button) => {

        button.addEventListener("click", () => {
    
          const currentCategory = button.dataset.filter;
          sell(".servises__wrapper").innerHTML = " ";
    
          if (currentCategory == "all") {
            rander();
          } else {
            servises[currentCategory].forEach(content);
          }
        });
    });

        function content(g) {
            let inner = `<div class="servises__box">
            <div class="servises__img-box">
                <img class="servises__img" src="${g.img}" alt="body">
            </div>
            <h2 class="servises__title">${g.name}</h2>
            <p class="servises__txt">${g.prise1}<span class="servises__txt-span">${g.span1}</span></p>
            <p class="servises__txt">${g.prise2}<span class="servises__txt-span">${g.span2}</span></p>
            <p class="servises__txt">${g.prise3}<span class="servises__txt-span">${g.span3}</span></p>
            </div>`
            sell(".servises__wrapper").innerHTML += inner;
          }
     
    
  
}
app();