# Tic-Tac-Toe Game

A modern implementation of the classic Tic-Tac-Toe game, featuring both offline and online multiplayer modes. Built with EJS for the frontend and WebSocket for real-time online gameplay.

## Features

- 🏠 Offline mode: Play against a friend on the same device
- 🌐 Online mode: Challenge friends remotely using WebSocket technology
- 📱 Responsive design: Enjoy the game on various devices and screen sizes
- 🖥️ Server-side rendering: Fast initial load times with EJS

## Technologies Used

- Frontend: EJS (Embedded JavaScript templating)
- Backend: Node.js with Express.js
- Real-time Communication: WebSocket (ws library)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/NinadxBaruah/tic-tac-toe
   ```

2. Navigate to the project directory:
   ```
   cd tic-tac-toe
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` (or the port shown in your terminal)

## How to Play

### Offline Mode
1. Open the game in your browser
2. Select "Offline Mode"
3. Take turns with a friend to place X's and O's on the grid
4. The first player to get three in a row (horizontally, vertically, or diagonally) wins!

### Online Mode
1. Open the game in your browser
2. Select "Online Mode"
3. Share the generated game link with a friend
4. Wait for your friend to join, then start playing!

## Project Structure

```
tic-tac-toe/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── game.js
│
├── views/
│   ├── index.ejs
│   ├── game.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── server.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[, e.g., MIT License]

## Contact

[Ninad Baruah] - [ninadbaruah@gmail.com]

Project Link: [https://github.com/NinadxBaruah/tic-tac-toe]
