
# 🚛 Unloadin Orders UI – Internship Assignment

Frontend web application to manage and filter logistics orders. Built using **React.js** with **Material UI**, this project implements a login system and an order listing dashboard with filtering and pagination features.

🌐 **Live Demo**: [unloadin-orders.web.app](https://unloadin-orders.web.app)

---

## 📦 Features

### ✅ Segment 1 – Frontend Development

- 🔐 **Login Page** (Regex-based validation for email and password)
- 📋 **Orders Dashboard**
  - Search (Order ID, Product Name, Vehicle Number)
  - Status filter (Pending, Shipped, Delivered, Cancelled)
  - Price filter (Less than ₹5000 / Greater than ₹5000)
  - Clean, paginated table layout
- 🎨 Responsive, clean UI using **Material UI**
- 🔁 Reusable component structure
- 🔄 Fetches data from **Firebase Realtime Database**
- 🚀 Deployed on **Firebase Hosting**

---

## 🚀 Live Walkthrough

### 🔐 Login Page
- Email: must be in valid format (e.g. `user@example.com`)
- Password: Minimum 6 characters, with at least 1 letter and 1 number

> On successful login, you are redirected to `/orders`.

---

### 📊 Orders Page
- Displays logistics orders in a **responsive table**.
- Each row contains:
  - Order ID
  - Vehicle type (with image)
  - Vehicle number
  - Product name
  - Category
  - Price (formatted with commas)
  - Status (with colored chips)
- Includes a **filter bar** for search, status, and price range.
- **Pagination** allows viewing 5 orders per page.

---

## 🛠️ Tech Stack

| Area         | Technology             |
|--------------|------------------------|
| Frontend     | React.js               |
| UI Library   | Material UI (MUI)      |
| Database     | Firebase Realtime DB   |
| Hosting      | Firebase Hosting       |
| Styling      | CSS + Material UI      |
| Routing      | React Router v6        |

---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/unloadin-orders.git
cd unloadin-orders
