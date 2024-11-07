
---

# LendEase

**LendEase** is a streamlined Borrow Management System designed to make borrowing and lending items easier, more efficient, and organized. Built with Laravel and Next.js, it supports smooth user interactions, real-time notifications, and role-based access for administrators and users. LendEase provides tools for managing item inventories, tracking borrowed items, setting due dates, and notifying users about upcoming or overdue returns.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Secure login and registration with role-based access (admin, user).
- **Item Catalog**: Browse and search items available for borrowing, with categories and filters.
- **Borrow and Return Management**: Track borrowed items, set due dates, and manage return processes.
- **Notifications**: Automatic reminders for due dates via email.
- **Admin Dashboard**: For adding new items, managing borrowed items, and viewing analytics.
- **Overdue Tracking**: Keep track of overdue items and apply late fees as needed.

## Installation

### Backend Setup (Laravel)
1. Clone the repository and navigate to the backend directory:
    ```bash
    git clone https://github.com/yourusername/LendEase.git
    cd LendEase/backend
    ```

2. Install PHP dependencies:
    ```bash
    composer install
    ```

3. Set up environment variables:
    - Copy `.env.example` to `.env` and set your database credentials.
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Run migrations and seed the database (optional):
    ```bash
    php artisan migrate --seed
    ```

5. Start the Laravel development server:
    ```bash
    php artisan serve
    ```

### Frontend Setup (Next.js)
1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install Node.js dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Copy `.env.example` to `.env.local` and configure your API endpoint.

4. Start the Next.js development server:
    ```bash
    npm run dev
    ```

## Usage
1. Access the application on `http://localhost:3000`.
2. Register as a user or log in as an administrator to explore all features.
3. Browse available items, borrow items, and track due dates from your dashboard.

## Technologies Used
- **Frontend**: [Next.js](https://nextjs.org/), Tailwind CSS
- **Backend**: [Laravel](https://laravel.com/)
- **Database**: MySQL or PostgreSQL
- **Real-Time Notifications**: Laravel WebSockets (optional)
- **Email Notifications**: Laravel Mail (for overdue reminders)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for improvements or new features.

---

