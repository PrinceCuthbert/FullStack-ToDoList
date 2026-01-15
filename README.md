# Full-Stack Task Manager

A modern, full-stack task management application built with React, Node.js, Express, and MySQL.

![Tech Stack](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)

## 🚀 Features

- ✅ Create, Read, Update, Delete tasks
- ✅ Real-time data persistence with MySQL
- ✅ Premium SaaS-style UI design
- ✅ RESTful API architecture
- ✅ Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MySQL** - Database
- **Sequelize** - ORM
- **CORS** - Cross-origin support

## 📁 Project Structure

```
CRUD-Project/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API service layer
│   │   └── App.jsx        # Main app component
│   └── package.json
│
├── backend/           # Node.js + Express API
│   ├── config/        # Database configuration
│   ├── models/        # Sequelize models
│   ├── routes/        # API endpoints
│   ├── server.js      # Main server file
│   └── package.json
│
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/task-manager.git
cd task-manager
```

### 2. Database Setup
Create a MySQL database:
```sql
CREATE DATABASE task_manager;
```

### 3. Backend Setup
```bash
cd backend
npm install

# Create .env file
# Add your MySQL credentials:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
DB_PORT=3306
PORT=5000
```

### 4. Frontend Setup
```bash
cd frontend
npm install
```

## 🚀 Running the Application

You need to run both servers simultaneously:

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:5000`

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

## 🎨 UI Features

- Modern, premium SaaS design
- Smooth animations and transitions
- Responsive layout
- Interactive hover states
- Loading states
- Error handling

## 🔐 Environment Variables

### Backend (.env)
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=task_manager
DB_PORT=3306
PORT=5000
NODE_ENV=development
```

**⚠️ Important:** Never commit `.env` files to Git!

## 🧪 Testing

Test the API using:
- Postman
- Thunder Client (VS Code extension)
- Browser DevTools

## 📝 Development Notes

- Frontend uses Vite for fast development
- Backend uses nodemon for auto-restart
- Database syncs automatically on server start
- CORS enabled for local development

## 🚧 Future Enhancements

- [ ] User authentication (JWT)
- [ ] Task categories
- [ ] Due dates
- [ ] Task completion toggle
- [ ] Search and filter
- [ ] Dark mode
- [ ] Deployment to production

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Your Name - [GitHub](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- Built as a learning project for full-stack development
- Inspired by modern SaaS applications
- Thanks to the open-source community

---

**Happy Coding!** 🚀
