# 🧮 Normal Calculator

A simple and responsive calculator built using **HTML, CSS, and JavaScript**.  
This project performs basic arithmetic operations with a clean UI and interactive button-based input.

---

## 🚀 Features

- Basic arithmetic operations (+, −, ×, ÷)
- Clear (AC) and Delete (DEL) functionality
- Supports decimal numbers
- Handles invalid input safely
- Clean dark-themed UI with button effects
- Responsive centered layout

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📸 Preview

(Add your screenshot here)



---

## ⚙️ How It Works

- Buttons update the display using JavaScript functions
- `appendvalue()` adds numbers/operators
- `clearDisplay()` resets the calculator
- `deletevalue()` removes last character
- `calculate()` evaluates expression using `eval()`
- Input is validated to avoid invalid characters

---

## 📂 Project Structure


calculator/
│── index.html
│── style.css
│── script.js
│── README.md


---

## 🔒 Safety Feature

The calculator checks input using regex:

```js
/[^0-9+\-*/.]/.test(display.value)