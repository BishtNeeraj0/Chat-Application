💬 Chat Application

A real-time chat application that enables seamless one-to-one communication with an intuitive UI and efficient backend handling. Built to demonstrate full-stack development skills including authentication, real-time messaging, and responsive design.

🚀 Features:

  - User Authentication (Signup/Login)
  - Real-time messaging functionality
  - Online/Offline user status indicator
  - Instant message delivery & updates
  - User profile with avatar support
  - Responsive UI for better user experience
  - Conversation management

🛠️ Tech Stack:

  Frontend
  - React.js
  - Tailwind CSS / DaisyUI
    
  Backend
  - Node.js
  - Express.js
    
  Database
  - MongoDB
    
  Real-time Communication
  - Socket.IO

⚙️ Installation & Setup:

1. Clone the repository
   
  - git clone https://github.com/BishtNeeraj0/Chat-Application.git

  - cd Chat-Application

3. Setup Backend
   
  - cd backend
  
  - npm install
  
  - npm run dev

4. Setup Frontend
   
  - cd frontend
  
  - npm install
  
  - npm run dev

🔑 Environment Variables:

  Create a .env file in the backend directory and add:
  
    - PORT=5000
    - MONGO_URI=your_mongodb_connection_string
    - JWT_SECRET=your_secret_key

📸 Screenshots:
<img width="1919" height="938" alt="Screenshot 2026-03-23 144031" src="https://github.com/user-attachments/assets/935b809a-029a-4fe8-bd8f-73f67890df21" />
<img width="1919" height="939" alt="Screenshot 2026-03-23 142028" src="https://github.com/user-attachments/assets/9ba4c362-0248-417b-a93e-072ccb215dc7" />
<img width="1919" height="937" alt="Screenshot 2026-03-23 144052" src="https://github.com/user-attachments/assets/3ddec9ca-bcfa-47b5-a975-f11f7d4226ee" />
<img width="1919" height="939" alt="Screenshot 2026-03-23 144120" src="https://github.com/user-attachments/assets/10ee239b-d063-4d1a-a88b-5805006a6def" />

📂 Project Structure:

  Chat-Application/
  
  │
  
  ├── frontend/        # React frontend
  
  ├── backend/         # Express backend
  
  ├── socket/          # Socket.IO logic
  
  └── README.md

📌 Key Highlights:
  - Implemented real-time bidirectional communication using Socket.IO
  - Designed a scalable REST API backend
  - Integrated JWT-based authentication for secure access
  - Built a responsive and modern UI using Tailwind CSS

🧠 Learning Outcomes:
  - Real-time systems using WebSockets
  - Full-stack architecture design
  - State management and API integration
  - Debugging and handling async operations
