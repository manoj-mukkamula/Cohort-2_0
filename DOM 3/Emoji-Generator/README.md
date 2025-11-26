# DOM 3: Random Emoji Generator – Aesthetic Floating Emojis

A fun **Document Object Model (DOM)** project that dynamically scatters random emojis across the screen. Each click generates a new emoji with a unique position, size, rotation, and opacity, creating a playful and aesthetic visual effect against a dark radial gradient background.

---

## 🚀 Demo

Experience the fun live:

[**Open Live Demo**](https://manoj-mukkamula.github.io/Cohort-2_0/DOM%203/Emoji-Generator/)

---

## ✨ Features

* **Dynamic Element Creation:** Generates `<h1>` elements containing emojis using `document.createElement()`.
* **Randomized Visuals:**
    * **Emoji Selection:** Randomly picks from a curated list of 30+ popular emojis (👍, 😂, 🔥, 💀, etc.).
    * **Position:** Randomly places the emoji anywhere within the viewport (5%–95%).
    * **Scale:** Randomly sizes emojis between **1.5x and 5x** for depth.
    * **Rotation:** Applies a random tilt (-40 to +50 degrees).
    * **Opacity:** Adds slight transparency variations for a polished look.
* **Aesthetic UI:** Features a deep, dark radial gradient background (`#2a1d17` to `#070605`).
* **Interactive Button:** A centered, responsive button with hover effects.

---

## 📂 Project Structure

| File | Description |
| :--- | :--- |
| `index.html` | **Main structure** containing the button and script linkage. |
| `style.css` | **Styling** for the radial background, specific font ("Inter"), and button animations. |
| `script.js` | **Logic** for the emoji array, `Math.random()` calculations, and DOM manipulation. |

---

## ⚙️ How to Run Locally

Follow these steps to set up the project on your machine:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/manoj-mukkamula/Cohort-2_0.git](https://github.com/manoj-mukkamula/Cohort-2_0.git)
    ```

2.  **Navigate to the Project Folder:**
    ```bash
    cd "DOM 3/Emoji-Generator"
    ```
    *(Note: Ensure the folder name matches your local structure).*

3.  **Open the Project:**
    * **Method 1:** Double-click `index.html`.
    * **Method 2:** Open the folder in VS Code and use the **Live Server** extension.

---

## 📚 Technical Notes

This project demonstrates proficiency in the following **JavaScript DOM concepts**:

* **DOM Manipulation:** Using `appendChild` to add new elements to the `main` container.
* **CSS via JavaScript:** Dynamically updating `style.top`, `style.left`, `style.rotate`, and `style.scale`.
* **Randomization Logic:**
    * `Math.floor(Math.random() * length)` for array indexing.
    * Mathematical formulas to constrain positions within a specific percentage range (e.g., `Math.random() * 90 + 5`).
* **Event Listeners:** Handling user interaction via `click` events.

---

## 👤 Author

**manoj-mukkamula**
*Part of the Cohort 2.0 Syllabus: Complete Web Development + DSA + Aptitude & Reasoning course.*

---

## 📄 License

This project is provided under the **MIT License**. Feel free to learn from it, reuse, or modify.
