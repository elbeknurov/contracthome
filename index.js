alert(`Assalomy alaykum dtm javobini korish uchun arizani to'ldiring`);
var nameSurname = prompt("ismingizni va familyangizni kiriting");
alert(`${nameSurname} Pasport seriyangizni kiriting `);
var pasport = prompt("PASPORT SERIYAS");
alert(`${nameSurname} Pasport raqamingizni kiriting`);
var pasportNum = prompt("PASPORT RAQAMI");
alert(`${nameSurname} arizadan o'tdingiz\nEndi bot emasligingizni tekshiramiz`);
var bot = +prompt("misolni yeching 2 * 2 ");
alert(`misol to'g'ri yechildi`);

// / 1 va 2 misol
var test = +prompt("To'plagan balingizni kiriting");
if (test >= 80 && test <= 100) {
  alert(`Siz super kontrakda o'qiy olasiz`);
} else {
  alert(`Afsus super kontrakda  ham o'qiy olmaysiz`);
}
var money = +prompt("Super Kontrakt narxi 3000$. Sizda qancha pul bor?");
if (money >= 3000) {
  alert(`Pulingiz yetarli `);
} else {
  alert(
    `Afsuski pulingiz yetarli emas. Sizga yanam ${3000 - money} kerak bo'ladi`
  );
}

// 3 misol
// var contract = +prompt("To'plagan balingizni kiriting");
// if (contract >= 100 && contract <= 150) {
//   alert(`Siz kontrakda o'qiy olasiz`);
// } else {
//   alert(`Siz faqat super kontrakda  ham o'qiy olasiz`);
// }
// var contractMoney = +prompt("Kontrakt narxi 2000$. Sizda qancha pul bor?");
// if (contractMoney >= 2000) {
//   alert(`Pulingiz yetarli `);
// } else {
//   alert(
//     `Afsuski pulingiz yetarli emas. Sizga yanam ${
//       2000 - contractMoney
//     } kerak bo'ladi`
//   );
// }

// 4 misol
// var test = +prompt("To'plagan balingizni kiriting");
// if (test >= 150 && test <= 180) {
//   alert(`Tabriklaymiz siz GRANT asosida o'qishga kirdingiz!!`);
// } else {
//   alert(`Afsus super kontrakda o'qiy olasiz`);
// }
