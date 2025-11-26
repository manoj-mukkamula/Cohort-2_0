# DOM 3: Dynamic Quote Generator – Aesthetic Floating Quotes

A creative **Document Object Model (DOM)** project that generates random motivational quotes with an aesthetic, anime-style visual effect. Each click creates a new `<h1>` element featuring a random quote, soft pastel color, random position, rotation, and opacity—resulting in a scattered, floating layout.

---

## 🚀 Demo

Experience the aesthetic effect live:

[**Open Live Demo**](https://manoj-mukkamula.github.io/Cohort-2_0/DOM%203/Task-Quotes/)

---

## ✨ Features

* **Dynamic Element Creation:** Generates quote elements on the fly using `document.createElement()`.
* **Randomized Visuals:**
    * **Text:** Randomly selects motivational quotes from an array.
    * **Color:** Applies random soft pastel colors.
    * **Position:** Places text anywhere within the viewport.
    * **Rotation & Scale:** Adds random tilt and size variations.
    * **Opacity:** varies transparency for a depth effect.
* **Aesthetic UI:** Features a soft dark radial background theme.
* **Floating Effect:** Creates a scattered, "floating" look for the quotes.

---

## 📂 Project Structure

| File | Description |
| :--- | :--- |
| `index.html` | Defines the main layout and structure of the application. |
| `style.css` | Handles the dark radial gradient background, button UI, and quote styling. |
| `script.js` | Contains the logic for the quote array, randomization (math), and DOM manipulation. |

---

## ⚙️ How to Run Locally

Follow these steps to set up the project on your machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/manoj-mukkamula/Cohort-2_0.git](https://github.com/manoj-mukkamula/Cohort-2_0.git)
    ```

2.  **Navigate to the Project Folder:**
    ```bash
    cd "DOM 3/Task-Quotes"
    ```
    *(Note: Folder name may vary based on your local structure).*

3.  **Open the Project:**
    * **Method 1:** Double-click `index.html`.
    * **Method 2:** Open the folder in VS Code and use the **Live Server** extension.

---

## 📚 Technical Notes

This project demonstrates proficiency in the following **JavaScript DOM concepts**:

* **DOM Selectors & Creation:** `document.querySelector`, `document.createElement`.
* **CSS Manipulation via JS:** Dynamic styling (`style.top`, `style.left`, `style.transform`, `style.color`).
* **Data Structures:** Using **Arrays** to store quotes and color palettes.
* **Logic & Math:** Utilizing `Math.random()` and `Math.floor()` for randomization logic.
* **UI/UX:** Designing for aesthetic appeal using gradients and varying opacities.

---

## 👤 Author

**manoj-mukkamula**

---

## 📄 License

This project is provided under the **MIT License**. Feel free to learn from it, reuse, or modify.
