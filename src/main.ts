import './style.css'

//ex 1
const movieTitle :string = "Frankenstein";
const movieYear :number = 1931;
const rating = 7.9;
const isReleased :boolean =true;

//ex 2
//declaring the variables; declaring the function- function signature
function add(a: number, b: number):number {
  return a + b;
}
const result = add(5, 10)
console.log(result);

//ex 3
//a fct that does not return anything has the signature void
function printMessage(message: string): void {
  console.log(message)
}

const messagePrint = "Hello, TypeScript!";
printMessage(messagePrint);

//ex 4
//type and interface; interface can only be used for objects

interface Movie {
  title: string;
  year: number;
  rating: number;
  isReleased: boolean;
  actors: string[];
  isWatched?: boolean; //optuonal parameter
}

const movieOne: Movie = {
  title: "Frankestein",
  year: 1931,
  rating: 8.8,
  isReleased: true,
  actors: ["Boris", "Colin", "John"],
  isWatched: false
}

console.log(movieOne);

//ex 5
//interface - first letter is capitalised
interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = []
//push is an array operation
books.push({title: "1984", author: "George Orwell", year: 1949});
books.push({title: "Bravr New World", author: "Aldous Huxley", year: 1932});

console.log(books);

function findBook(title: string): Book | undefined { //union type
  return books.find(book => book.title == title)
}

const foundBook = findBook("1984");
console.log(foundBook);

//ex 6
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const inventory: Product[] = [
  {id: 1, name: "Laptop", price: 99.9, inStock:true},
  {id: 2, name: "iPhone", price: 499.9, inStock:false},
  {id: 3, name: "Tablet", price: 299.9, inStock:true}
]

console.log(inventory);

function updateStockStatus(productId: number, inStock: boolean) {
  const product = inventory.find(item => item.id === productId);
  if (product) {
    product.inStock = inStock;
  }
  else {
    console.log("Product not found");
  }
}
updateStockStatus(2, true);