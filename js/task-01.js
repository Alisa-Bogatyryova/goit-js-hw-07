
    const categoriesEl = document.querySelectorAll(".item");
    console.log(`В списке ${categoriesEl.length} категории.`);
    categoriesEl.forEach ( element => {
        console.log(`Категория: ${element.querySelector("h2").textContent}`);
        console.log(`В категории: ${element.querySelectorAll("li").length} элементов`);
    });
