"use client";
import React, { useState } from "react";
import styles from "../page.module.css";

export default function page() {
  return (
    <main className={styles.main}>
      {/* <Counter /> */}
      {/* <Text /> */}
      {/* <Boolean /> */}
      {/* <Student name="Micheal" surname="Scott" age="15" /> */}
      {/* <Tasks /> */}
      {/* <ShoppingCart /> */}
      {/* <Login /> */}
      <Color />
    </main>
  );
}

//Başlangıç Değeri Olmayan Durum (Initial State Olmadan): İlk durumu belirtmeksizin basit bir sayacı uygulaması.

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.box_col}>
      <p>Count: {count}</p>
      <button className={styles.btn} onClick={increase}>
        Arttır
      </button>
    </div>
  );
}

//String Durum (String State): Bir metin girişi kutusunu yöneten ve başlangıç değeri olarak boş bir dize kullanılan bir örnek.

function Text() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const stringToArray = text.split("");

  return (
    <div className={styles.box_col}>
      <input type="text" value={text} onChange={handleChange} />
      <p>{stringToArray.reverse()}</p>
    </div>
  );
}

//Boolean Durum (Boolean State): Bir onay kutusunu (checkbox) kontrol eden ve başlangıç değeri olarak false kullanan bir örnek.
function Boolean() {
  const [check, setCheck] = useState(false);

  return (
    <div className={styles.box_col}>
      <input type="checkbox" value={check} onChange={(e) => setCheck(!check)} />
      <p>{check ? "Checked" : "not checked"}</p>
    </div>
  );
}

//Objeleri Durum Olarak Kullanma: Durumu bir obje olarak kullanarak öğrenci bilgilerini güncelleyen bir örnek.

function Student(props) {
  const intialState = {
    name: props.name,
    surname: props.surname,
    age: props.age,
  };

  const [student, setStudent] = useState(intialState);
  const [newName, setName] = useState("");

  return (
    <div className={styles.box_col}>
      <p>Name: {student.name}</p>
      <p>Surname: {student.surname}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() =>
          setStudent({
            ...student,
            name: newName,
          })
        }
      >
        Update
      </button>
    </div>
  );
}

//Dizileri Durum Olarak Kullanma: Bir dizi durumu kullanarak bir görev listesi yöneten bir örnek.

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Ekle</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

//ShoppingCart
//Kullanıcılar ürünleri sepete ekleyebilir ve sepeti temizleyebilirler.
//Sepetin güncel durumu ve toplam fiyat, useState kullanılarak yönetilir.

function ShoppingCart() {
  const initalProducts = [
    { id: 1, name: "TV", price: 10 },
    { id: 2, name: "Mouse", price: 15 },
    { id: 3, name: "PC", price: 20 },
  ];

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updated = [...cart, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCart(updated);
    setTotalPrice(updatedTotalPrice);
  };

  const clearBasket = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const removeItem = (product) => {
    const updatedCart = [...cart];
    const updatedTotalPrice = totalPrice - product.price;
    const index = updatedCart.findIndex((item) => item.id === product.id);
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {initalProducts.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
            <button className={styles.btn} onClick={() => addToCart(product)}>
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2>Basket</h2>
      <ul>
        {cart.map((prod, index) => (
          <li key={index}>
            {prod.name} - {prod.price}
            <button onClick={() => removeItem(prod)}>X</button>
          </li>
        ))}
      </ul>
      <p>Total Price :{totalPrice}</p>
      <button onClick={clearBasket}>Clear All</button>
    </div>
  );
}

// eğer doğru ise başarılı değilse hatalı giriş yapmıştır dönüşünü üreten biri login sayfası yapalım

function Login() {
  const credentials = {
    username: "admin",
    password: "admin",
  };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      alert("Login Başarılı");
      return;
    }

    alert("Login Failed");
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Color Picker uygulaması

function Color() {
  const [selectedColor, setSelectedColor] = useState("#000");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
        }}
      ></div>

      <p>Selected Color : {selectedColor}</p>
    </div>
  );
}
