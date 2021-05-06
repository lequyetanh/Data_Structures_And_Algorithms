let max = 10000;
let n = 1000;
let khoangcach = [
  [max, 5, 6, 9, max],
  [5, max, 10, 2, 7],
  [6, 10, max, max, 15],
  [9, 2, max, max, 1],
  [max, 7, 15, 1, max]
];
let nghiem = [];
let thichnghi = [];

// khởi tạo
function khoitao() {
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < 5; j++) {
      row.push(Math.floor(Math.random() * 5))
    }
    nghiem.push(row);
  }
}

//đánh giá
function danhgia() {
  for (let i = 0; i < n; i++) {
    thichnghi[i] = 0;
    for (let j = 0; j < 4; j++) {
      thichnghi[i] += khoangcach[nghiem[i][j]][nghiem[i][j + 1]];
    }
    for (let j = 0; j < 4; j++) {
      for (let t = j + 1; t < 5; t++) {
        if (nghiem[i][j] == nghiem[i][t]) {
          thichnghi[i] += 100000;
        }
      }
    }
  }
}

//chọn lọc
function chonloc() {
  let temp = [...thichnghi];
  temp.sort((a, b) => {
    return a - b;
  })
  // console.log(temp)
  let nguong = temp[n * 50 / 100];
  for (let i = 0; i < n; i++) {
    if (thichnghi[i] > nguong) {
      nghiem[i] = [...nghiem[Math.floor(Math.random() * 5)]];
    }
  }
}

function laighep() {
  for (let i = 0; i < 20; i++) {
    let cha = Math.floor(Math.random() * n);
    let me = Math.floor(Math.random() * n);
    for (let j = 0; j < nghiem[cha].length; j++)
      if (Math.floor(Math.random() * 2) == 1) {
        let temp = nghiem[cha][j];
        nghiem[cha][j] = nghiem[me][j];
        nghiem[me][j] = temp;
      }
  }
}

function dotbien() {
  let index = Math.floor(Math.random() * n);
  let bit = Math.floor(Math.random() * 5);
  nghiem[index][bit] = Math.floor(Math.random() * 5);
}

function Print() {
  let temp = [...thichnghi]
  temp.sort((a, b) => {
    return a - b;
  })
  let best = temp[0];
  // console.log(best + ": ");
  for (let i = 0; i < n; i++) {
    if (thichnghi[i] == best) {
      for (let j = 0; j < nghiem[i].length; j++)
        // console.log(nghiem[i][j] + " ,");
      break;
    }
  }
}

function main() {
  khoitao();
  for (let i = 0; i < 1000; i++) {
    danhgia();
    // Print();
    chonloc();
    laighep();
    dotbien();
  }
}

main();
let temp = [...thichnghi]
temp.sort((a, b) => {
  return a - b;
})
console.log(temp);
// console.log(nghiem)
// console.log(thichnghi);
