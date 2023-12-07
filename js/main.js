// if1
// var son = parseFloat(prompt("Iltimos, son kiriting:"));
// var z = son > 0 ? son + 1 : son;
// console.log("Hosil bo'lgan son: " + z);

// if2
// var son = parseFloat(prompt("Iltimos, son kiriting:"));
// var k;
// if (son > 0) {
//     k = son + 1;
// } else if (son < 0) {
//     k = son - 2;
// } else {
//     k = 10;
// }
// console.log("Hosil bo'lgan son: " + k);

// if3
// var a = parseInt(prompt("Birinchi sonni kiriting:"));
// var b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// var c = parseInt(prompt("Uchinchi sonni kiriting:"));
// var musbatsonalar = 0;
// if (a > 0) {
//     musbatsonalar++;
// }
// if (b > 0) {
//     musbatsonalar++;
// }
// if (c > 0) {
//     musbatsonalar++;
// }
// console.log("Musbat sonlar soni: " + musbatsonalar);

// if4
// var a = parseInt(prompt("Birinchi sonni kiriting:"));
// var b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// var kattaSon;
// if (a > b) {
//     kattaSon = a;
// } else {
//     kattaSon = b;
// }
// console.log("Katta son: " + kattaSon);

// if5
// var a = parseInt(prompt("Birinchi sonni kiriting:"));
// var b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// var kichikSon;
// if (a < b) {
//     kichikSon = a;
// } else {
//     kichikSon = b;
// }
// console.log("Kichik son: " + kichikSon);

// if6
// var a = parseInt(prompt("Birinchi sonni kiriting:"));
// var b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// var kattaSon, kichikSon;
// if (a > b) {
//     kattaSon = a;
//     kichikSon = b;
// } else {
//     kattaSon = b;
//     kichikSon = a;
// }
// console.log("katta son",  + kattaSon + ", ", "kichik son: "   + kichikSon);

// if7
// var A = parseFloat(prompt("A sonni kiriting:"));
// var B = parseFloat(prompt("B sonni kiriting:"));
// if (A >= B) {
//     var x = A;
//     A = B;
//     B = x;
// }
// console.log("Yangi A ning  qiymati: " + A);
// console.log("Yangi B  ning qiymati: " + B);

// if8
// var A = parseInt(prompt("A sonni kiriting:"));
// var B = parseInt(prompt("B sonni kiriting:"));
// if (A !== B) {
//     A = A + B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }
// console.log("Yangi A ning qiymati: " + A);
// console.log("Yangi B  ning qiymati: " + B);

// if9
// var A = parseInt(prompt("A sonni kiriting:"));
// var B = parseInt(prompt("B sonni kiriting:"));
// if (A !== B) {
//     if (A > B) {
//         B = A;
//     } else {
//         A = B;
//     }
// } else {
//     A = 0;
//     B = 0;
// }
// console.log("Yangi A qiymati: " + A);
// console.log("Yangi B qiymati: " + B);

// if10
// var a = parseFloat(prompt("Birinchi sonni kiriting:"));
// var b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// var c= parseFloat(prompt("Uchinchi sonni kiriting:"));
// var kichikson = a; 
// if (b < kichikson) {
//     kichikson = b;
// }

// if (c < kichikson) {
//     kichikson = c;
// }
// console.log("Kichigini topgan son: " + kichikson);

// if11
// var a = parseFloat(prompt("Birinchi sonni kiriting:"));
// var b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// var c = parseFloat(prompt("Uchinchi sonni kiriting:"));
// var ortasidagison;
// if ((a >= b && a <= c) || (a <= b && a >= c)) {
//     ortasidagison = a;
// } else if ((b >= a && b <= c) || (b <= a && b >= c)) {
//     ortasidagison = b;
// } else {
//     ortasidagison = c;
// }
// console.log("O'rtasidagi son: " + ortasidagison);

// if12
// var a = parseFloat(prompt("Birinchi sonni kiriting:"));
// var b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// var c = parseFloat(prompt("Uchinchi sonni kiriting:"));
// var yigindi1 = a + b;
// var yigindi2 = b + c;
// var yigindi3 = a + c;

// var yigindiengkatta;
// if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
//     yigindiengkatta = [a, b];
// } else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
//     yigindiengkatta = [b, c];
// } else {
//     yigindiengkatta = [a, c];
// }
// console.log("Yig'indisi eng katta bo'ladigan ikkita son: " + yigindiengkatta);

// if13
// var A = parseFloat(prompt("A sonni kiriting:"));
// var B = parseFloat(prompt("B sonni kiriting:"));
// var C = parseFloat(prompt("C sonni kiriting:"));
// if (A <= B && B <= C) {
//     console.log("O'sish tartibida: A = " + A + ", B = " + B + ", C = " + C);
// } else {
//     var x;
//     if (A > B) {
//         x = A;
//         A = B;
//         B = x;
//     }
//     if (B > C) {
//         x = B;
//         B = C;
//         C = x;
//     }
//     if (A > B) {
//         x = A;
//         A = B;
//         B = x;
//     }
//     console.log("O'zgartirilgan tartibida: A = " + A + ", B = " + B + ", C = " + C);
// }

// if14
// var A = parseFloat(prompt("A sonni kiriting:"));
// var B = parseFloat(prompt("B sonni kiriting:"));
// var C = parseFloat(prompt("C sonni kiriting:"));
// if ((A <= B && B <= C) || (A >= B && B >= C)) {
//     console.log("O'sish yoki kamayish tartibida: A = " + A + ", B = " + B + ", C = " + C);
// } else {
//     if (A > B) {
//         x = A;
//         A = B;
//         B = x;
//     }    if (B > C) {
//         x = B;
//         B = C;
//         C = x;
//     }    if (A > B) {
//         x = A;
//         A = B;
//         B = x;
//     }    console.log("O'zgartirilgan tartibida: A = " + A + ", B = " + B + ", C = " + C);
// }

// if15
// var a = parseInt(prompt("Birinchi sonni kiriting:"));
// var b = parseInt(prompt("Ikkinchi sonni kiriting:"));
// var c = parseInt(prompt("Uchinchi sonni kiriting:"));
// var d = parseInt(prompt("To'rtinchi sonni kiriting:"));
// if (a === b && b === c) {
//     console.log("Tartib raqami: " + d);
// } else if (a === b && b === d) {
//     console.log("Tartib raqami: " + c);
// } else if (a === c && c === d) {
//     console.log("Tartib raqami: " + b);
// } else if (b === c && c === d) {
//     console.log("Tartib raqami: " + a);
// } else {
//     console.log("Uchtasi o'zaro teng emas");
// }

// if15
// var x = parseFloat(prompt("x qiymatini kiriting:"));
// var natija;

// if (x <= 0) {
//     natija = -x;
// } else if (0 < x && x < 2) {
//     natija = Math.pow(x, 2);
// } else {
//     natija = 4;
// }
// console.log("Natija:", natija);

// if17
// var yil = parseInt(prompt("Yilni kiriting:"));
// if ((yil % 4 == 0 && yil % 100 != 0) || (yil % 400 == 0)) {
//     console.log(yil + " kabisa yil: 366 kun bor");
// } else {
//     console.log(yil + " kabisa emas, 365 kun bor");
// }

// if18
// var son = parseInt(prompt("1-999 oraliqdagi son kiriting:"));
// var birlik = son % 10;
// var onlik = Math.floor((son % 100) / 10);
// var yuzlik = Math.floor(son / 100);
// var juftToq;
// if (son % 2 == 0) {
//     juftToq = "juft";
// } else {
//     juftToq = "toq";
// }
// var xonalarSoni;
// if (son < 10) {
//     xonalarSoni = "ikki xonali";
// } else if (son < 100) {
//     xonalarSoni = "uch xonali";
// } else {
//     xonalarSoni = "to'rt xonali yoki undan katta";
// }
// console.log(son + " - " + xonalarSoni + " " + juftToq + " son");

// case1
// var k = parseInt(prompt("Baho kiriting (1-5):"));
// switch (k) {
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yahshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Xato");
// }

// case2
// var oyRaqami = parseInt(prompt("Oy raqamini kiriting (1-12):"));
// switch (oyRaqami) {
//     case 1:
//     case 2:
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;
//     default:
//         console.log("Noto'g'ri oy raqami");
// }

// case3
// var oyRaqami = parseInt(prompt("Oy raqamini kiriting (1-12):"));
// switch (oyRaqami) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("31 kun bor");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("30 kun bor");
//         break;
//     case 2:
//         console.log("28 yoki 29 kun bor (kabisa yiliga qarab)");
//         break;
//     default:
//         console.log("Noto'g'ri oy raqami");
// }

// case4
// var birlikRaqam = parseInt(prompt("Uzunlik birliklarini tanlang (1-5):\n1-desimetr, 2-kilometr, 3-metr, 4-millimetr, 5-santimetr"));
// var kesmaUzunligi = parseFloat(prompt("Kesma uzunligini kiriting:"));
// switch (birlikRaqam) {
//     case 1:
//         console.log("Kesma uzunligi metrda: " + kesmaUzunligi / 10 + " metr");
//         break;
//     case 2:
//         console.log("Kesma uzunligi metrda: " + kesmaUzunligi * 1000 + " metr");
//         break;
//     case 3:
//         console.log("Kesma uzunligi metrda: " + kesmaUzunligi + " metr");
//         break;
//     case 4:
//         console.log("Kesma uzunligi metrda: " + kesmaUzunligi / 1000 + " metr");
//         break;
//     case 5:
//         console.log("Kesma uzunligi metrda: " + kesmaUzunligi / 100 + " metr");
//         break;
//     default:
//         console.log("Noto'g'ri uzunlik birlik raqami");
// }

// case5
// var birlikRaqam = parseInt(prompt("Og'irlik birliklarini tanlang (1-5):\n1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-sentner"));
// var ogirlikQiymati = parseFloat(prompt("Og'irlikni kiriting:"));
// switch (birlikRaqam) {
//     case 1:
//         console.log("Og'irlik kilogramda: " + ogirlikQiymati + " kilogramm");
//         break;
//     case 2:
//         console.log("Og'irlik kilogramda: " + ogirlikQiymati / 1000000 + " kilogramm");
//         break;
//     case 3:
//         console.log("Og'irlik kilogramda: " + ogirlikQiymati / 1000 + " kilogramm");
//         break;
//     case 4:
//         console.log("Og'irlik kilogramda: " + ogirlikQiymati * 1000 + " kilogramm");
//         break;
//     case 5:
//         console.log("Og'irlik kilogramda: " + ogirlikQiymati * 100 + " kilogramm");
//         break;
//     default:
//         console.log("Noto'g'ri og'irlik birlik raqami");
// }

// case6
// var kun = parseInt(prompt("Kuningizni kiriting (1-31):"));
// var oy = parseInt(prompt("Oyingizni kiriting (1-12):"));
// if ((oy >= 1 && oy <= 12) && (kun >= 1 && kun <= 31)) {
//     var kunlar;
//     switch (oy) {
//         case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//             kunlar = 31;
//             break;
//         case 4: case 6: case 9: case 11:
//             kunlar = 30;
//             break;
//         case 2:
//             kunlar = 28;
//             break;
//         default:
//             console.log("Noto'g'ri oy qiymati kiritildi.");
//             break;
//     }
//     if (oy == 2 && (oy % 4 == 0 && (oy % 100 != 0 || oy % 400 == 0))) {
//         kunlar = 29;
//     }
//     console.log("Kiritilgan sana: " + kun + " kun, " + oy + " oy. Kabisa yilida " + kunlar + " kun bor.");
// } else {
//     console.log("Noto'g'ri kun yoki oy qiymati kiritildi.");
// }

// case7
// var kun = parseInt(prompt("Kuningizni kiriting (1-31):"));
// var oy = parseInt(prompt("Oyingizni kiriting (1-12):"));
// if ((oy >= 1 && oy <= 12) && (kun >= 1 && kun <= 31)) {
//     var keyingiKun = kun + 1;
//     var keyingiOy = oy;
//     switch (oy) {
//         case 1: case 3: case 5: case 7: case 8: case 10:
//             if (kun == 31) {
//                 keyingiKun = 1;
//                 keyingiOy++;
//             }
//             break;
//         case 4: case 6: case 9: case 11:
//             if (kun == 30) {
//                 keyingiKun = 1;
//                 keyingiOy++;
//             }
//             break;
//         case 12:
//             if (kun == 31) {
//                 keyingiKun = 1;
//                 keyingiOy = 1;
//             }
//             break;
//         case 2:
//             var kunlar = (oy % 4 == 0 && (oy % 100 != 0 || oy % 400 == 0)) ? 29 : 28;

//             if (kun == kunlar) {
//                 keyingiKun = 1;
//                 keyingiOy++;
//             }
//             break;
//         default:
//             console.log("Noto'g'ri oy qiymati kiritildi.");
//             break;
//     }
//     console.log("Kiritilgan sana: " + kun + " kun, " + oy + " oy. Keyingi sana: " + keyingiKun + " kun, " + keyingiOy + " oy.");
// } else {
//     console.log("Noto'g'ri kun yoki oy qiymati kiritildi.");
// }

// case8

// case9
// var kartaQiymati = parseInt(prompt("O'yin kartasi qiymatini kiriting (6-14):"));
// var kartaTur = parseInt(prompt("O'yin kartasi turini tanlang (1-4):\n1-g`isht, 2-olma, 3-chillak, 4-qarg`a"));
// var kartaNomi = "";
// switch (kartaQiymati) {
//     case 6:
//         kartaNomi = "olti";
//         break;
//     case 7:
//         kartaNomi = "yetti";
//         break;
//     case 8:
//         kartaNomi = "sakkiz";
//         break;
//     case 9:
//         kartaNomi = "to'qqiz";
//         break;
//     case 10:
//         kartaNomi = "o'n";
//         break;
//     case 11:
//         kartaNomi = "valet";
//         break;
//     case 12:
//         kartaNomi = "dama";
//         break;
//     case 13:
//         kartaNomi = "qirol";
//         break;
//     case 14:
//         kartaNomi = "tuz";
//         break;
//     default:
//         console.log("Noto'g'ri kartaning qiymati kiritildi.");
//         break;
// }
// switch (kartaTur) {
//     case 1:
//         kartaNomi += " g'isht";
//         break;
//     case 2:
//         kartaNomi += " olma";
//         break;
//     case 3:
//         kartaNomi += " chillak";
//         break;
//     case 4:
//         kartaNomi += " qarg'a";
//         break;
//     default:
//         console.log("Noto'g'ri kartaning turini kiritildi.");
//         break;
// }
// console.log("Karta nomi: " + kartaNomi);


// case10
// var son = parseInt(prompt("O'quv masalasini kiriting (10-40):"));
// var second = son % 10;
// var first = (son - second)  / 10;
// var res;
// switch (first) {
//     case 1:
//         res = "O'n";
//         break
//     case 2:
//         res = "Yigirma" ;
//         break
//     case 3:
//         res = "O'ttiz";
//         break
//     case 4 :
//         res = "Qirq"      
//         break
// }
// res += " ";
// switch (second) {
//     case 1:
//         res += "bir";
//         break
//     case 2:
//         res += "ikki";
//         break
//     case 3:
//         res += "uch";
//         break
//     case 4:
//         res += "to'rt";
//         break
//     case 5:
//         res += "besh";
//         break
//     case 6:
//         res += "olti";
//         break
//     case 7:
//         res += "yetti";
//         break
//     case 8:
//         res += "sakkiz";
//         break
//     case 9:
//         res += "to'qqiz";
//         break
//     }
// console.log(res);


//case11
// var son = parseInt(prompt("O'quv masalasini kiriting (100-999):"));
// var x = son % 100 ;
// var three = x % 10 ;
// var second = (x - three) / 10;
// var first = (son -x) / 100;
// var res;
// switch (first) {
//     case 1:
//         res = "Yuz";
//         break
//     case 2:
//         res = "Ikki yuz" ;
//         break
//     case 3:
//         res = "Uch yuz";
//         break
//     case 4 :
//         res = "To'rt yuz"      
//         break
//     case 5 :
//         res = "Besh yuz"      
//         break
//     case 6 :
//         res = "Olti yuz"      
//         break
//     case 7 :
//         res = "Yetti yuz"      
//         break
//     case 8 :
//         res = "Sakkiz yuz"      
//         break
//     case 9 :
//         res = "To'qqiz yuz"      
//         break
// }
// res += " ";
// switch (second) {
//     case 1:
//         res += "O'n";
//         break
//     case 2:
//         res += "Yigirma" ;
//         break
//     case 3:
//         res += "O'ttiz";
//         break
//     case 4 :
//         res += "Qirq"      
//         break
//     case 5 :
//         res += "Ellik"      
//         break
//     case 6 :
//         res += "Oltmish"      
//         break
//     case 7 :
//         res += "Yetmish "      
//         break
//     case 8 :
//         res += "Sakson"      
//         break
//     case 9:
//         res += "To'qson"      
//         break
// }
// res += " ";
// switch (three) {
//     case 1:
//         res += "bir";
//         break
//     case 2:
//         res += "ikki";
//         break
//     case 3:
//         res += "uch";
//         break
//     case 4:
//         res += "to'rt";
//         break
//     case 5:
//         res += "besh";
//         break
//     case 6:
//         res += "olti";
//         break
//     case 7:
//         res += "yetti";
//         break
//     case 8:
//         res += "sakkiz";
//         break
//     case 9:
//         res += "to'qqiz";
//         break
//     }
// console.log(res);

// case12
// var yil = parseInt(prompt("Yilni kiriting:"));
// var muchal = (yil % 60);
// var muchalNomi = "";
// var rangNomi = "";
// var hayvonNomi = "";
// switch (muchal % 5) {
//     case 0:
//         muchalNomi = "yashil";
//         break;
//     case 1:
//         muchalNomi = "qizil";
//         break;
//     case 2:
//         muchalNomi = "sariq";
//         break;
//     case 3:
//         muchalNomi = "oq";
//         break;
//     case 4:
//         muchalNomi = "qora";
//         break;
// }
// switch (muchal % 12) {
//     case 0:
//         hayvonNomi = "sichqon";
//         break;
//     case 1:
//         hayvonNomi = "sigir";
//         break;
//     case 2:
//         hayvonNomi = "yo'lbars";
//         break;
//     case 3:
//         hayvonNomi = "quyon";
//         break;
//     case 4:
//         hayvonNomi = "ajdar";
//         break;
//     case 5:
//         hayvonNomi = "ilon";
//         break;
//     case 6:
//         hayvonNomi = "ot";
//         break;
//     case 7:
//         hayvonNomi = "qo`y";
//         break;
//     case 8:
//         hayvonNomi = "maymun";
//         break;
//     case 9:
//         hayvonNomi = "tovuq";
//         break;
//     case 10:
//         hayvonNomi = "it";
//         break;
//     case 11:
//         hayvonNomi = "to’ngizlar";
//         break;
// }
// console.log(yil + "-davr boshi: \"" + muchalNomi + " " + hayvonNomi + " yili\".");


