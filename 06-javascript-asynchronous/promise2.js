function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= "Maaf buku di bawah 40 halaman tidak tersedia"         
          reject(reason);
        }
    });
  }

const execute1 = async () => {
   try {
    const result = await filterBooksPromise(true, 40)
    console.log(result)
   } catch (error){
    console.log(error)
   }
}
const execute2 = async () => {
   try {
    const result = await filterBooksPromise(false, 40)
    console.log(result)
   } catch (error){
    console.log(error)
   }
}

const execute3 = async () => {
    try {
     const result = await filterBooksPromise(30)
     console.log(result)
    } catch (error){
     console.log(error)
    }
 }

execute1()
execute2()
execute3()