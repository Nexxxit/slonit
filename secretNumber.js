function secretNumber () {
    let min = 1;
    let max = 100;
    hiddenNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(hiddenNum);

    while(min <= max) {
        num = Math.floor((min + max) / 2);
        console.log(`Компьютер 2: Пробую число ${num}`);

        if (hiddenNum == num) {
            return console.log("Компьютер 1: Угадал!");
        }
        else if (hiddenNum > num) {
            console.log("Компьютер 1: Больше");
            min = num + 1;
        }
        else {
            console.log("Компьютер 1: Меньше");
            max = num - 1;
        }
    }
}

secretNumber();