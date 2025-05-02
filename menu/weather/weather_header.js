let count = 0;
function menu_extends(){
    count ++;
    let menus = document.querySelector(".menu_extend");
    if((count%2)!=0){
        menus.innerHTML = `
                <a class = "link" href="weather.html">Цаг агаар харах</a>
                <a class = "link" href="../weathergm/weather_gm.html">Цаг агаар авах</a>
                <a class = "link" href="../programm/progamm.html">Keep going</a>
                <a class = "link" href="../../error/404.html">Бусад</a>`;

        menus.style.animation="0.2s menu_out ease-out "
        menus.style.display="flex";
        menus.style.flexDirection="column";
        menus.style.padding="10px";
        menus.style.marginLeft="auto";
        menus.style.zIndex="1";
        menus.style.width="200px";
        menus.style.height="700px";
        menus.style.right="0px";
        menus.style.top="88px";
        menus.style.position="absolute";
        menus.style.borderLeft = "1px solid black";
        menus.style.borderBottom = "1px solid black";
        menus.style.backgroundColor="White";

        let links = document.querySelectorAll(".link");
        links.forEach(link => {
            link.style.textDecoration = "none"; // Доогуур зураасыг арилгах
            link.style.color = "black"; // Линкний өнгийг хар болгох
            link.style.padding="10px";
            link.style.margin= "5px"; // Линкүүдийн хооронд зай
            link.style.fontSize ="18px";
            link.style.width ="200px";
        });
    }
    else{
        menus.style.animation="0.2s menu_in linear "
        setTimeout(() => {
            menus.style.display = "none"; // Анимацын дараа далдлах
        }, 200);
     }   
}
