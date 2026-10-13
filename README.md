# FreshBites

A responsive, multi-page website for a fictional food and beverage store in Port Said, Egypt. Built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## Pages

- **Home** (`index.html`): hero section, featured products, customer testimonials
- **Products** (`products.html`): full product grid with prices and Add to Cart buttons
- **About Us** (`about.html`): company story, values and team
- **Contact** (`contact.html`): contact form

## Features

- Responsive layout that works on desktop, tablet and mobile
- Sticky header with an active-page highlight
- Cart counter in the header that updates when you click Add to Cart and carries across pages
- Contact form with a success message after submitting
- Font Awesome icons and Poppins font (loaded from CDNs)

## Project Structure

```
freshbites/
├── index.html
├── products.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## How to Run

No installation needed. Unzip the project and open `index.html` in any modern browser.

An internet connection is needed to load the product images (Unsplash), icons (Font Awesome) and fonts (Google Fonts).

## Customizing

- **Products:** edit the product cards in `index.html` and `products.html`. Keep names, images and prices the same on both pages.
- **Colors:** the main green is `#2e7d32` and the accent yellow is `#ffd54f`. Change them in `css/style.css`.
- **Contact details:** update the footer in each HTML file.

## Demo Notice

**This project is a demo.** It is for presentation purposes only and is not a real business or a working online store.

- The business name, address, phone number, email and testimonials are placeholders.
- The cart is a front-end counter only. There is no checkout, payment or order processing.
- The contact form does not send messages. It only shows a success message.
- Social media links are placeholders.
- Product images are from [Unsplash](https://unsplash.com) and are used for demonstration only.
