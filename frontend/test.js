const imgs = [
  {
    id: "cb15c398-ce1a-499d-b1fb-24732bb3a303",
    primaryImg: "/media/flower-bouquet1.jpeg",
    img_1: "/media/flower-bouquet4.jpeg",
    img_2: "/media/flower-bouquet7.jpeg",
    img_3: "/media/flower-bouquet7_oxhpHiZ.jpeg",
    img_4: "/media/flower-bouquet6_vItFxdr.jpeg",
  },
];
const imgsArry = [];
for (let key in imgs[0]) {
  if (imgs[0][key] !== undefined && imgs[0][key] !== null && key !== "id") {
      imgsArry.push(imgs[0][key])
    if (key === "img_4") {
      break;
    }
  }
}

console.log("IMG ARRAY", imgsArry)