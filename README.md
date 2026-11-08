# Kick Pulse ⚽

**A responsive football statistics and match-tracking web application inspired by FotMob.**

Kick Pulse is a football-focused web application designed to provide an organized and accessible experience for following matches, exploring leagues, discovering teams, and viewing player statistics.

Inspired by platforms such as **FotMob**, the project focuses on presenting football information through a clean interface, structured data, intuitive navigation, and a responsive design that adapts to different screen sizes.

The project was built with React and modern frontend technologies, with particular attention to component architecture, reusable UI elements, data handling, and the challenges of working with a limited external API.

---

## 📸 Screenshots

### Home
<img width="1900" height="2615" alt="localhost_5173_" src="https://github.com/user-attachments/assets/4e2669b2-bfe3-4a06-bbed-d2ac9ab6a988" />

### Match Page
<img width="1900" height="16384" alt="localhost_5173_matches" src="https://github.com/user-attachments/assets/16727fb8-6cb1-4712-9474-3e31c33d3222" />
<img width="1900" height="16384" alt="localhost_5173_leagues (1)" src="https://github.com/user-attachments/assets/633abf18-8381-4d42-819f-de105b649093" />

### Match Details
<img width="1900" height="1900" alt="localhost_5173_matches_1557464" src="https://github.com/user-attachments/assets/66fc4651-5dcc-4304-bbcc-2581ae965300" />
<img width="1900" height="2599" alt="localhost_5173_matches_1557464 (1)" src="https://github.com/user-attachments/assets/efbd7450-7e6c-48d3-9ede-274571fcde53" />
<img width="1900" height="1299" alt="localhost_5173_matches_1557464 (2)" src="https://github.com/user-attachments/assets/77dc03b1-c60b-4246-a2fd-3e4254c0b621" />

### League page
<img width="1900" height="16384" alt="localhost_5173_leagues (1)" src="https://github.com/user-attachments/assets/39769b9c-03ca-49e2-b07c-c1ce0d232e3e" />

###League detail
<img width="1900" height="3600" alt="localhost_5173_leagues_39 (2)" src="https://github.com/user-attachments/assets/7d50cb3b-e8a4-458f-bd72-f264d916fcea" />
<img width="1900" height="16384" alt="localhost_5173_leagues_39 (1)" src="https://github.com/user-attachments/assets/7b68c981-d724-4e54-8f3e-631cd3d0e3f2" />
<img width="1900" height="2606" alt="localhost_5173_leagues_39" src="https://github.com/user-attachments/assets/85dd43c4-1b5d-4e11-9dd3-97a1962a1ae8" />

### Team page
<img width="1900" height="751" alt="localhost_5173_teams (1)" src="https://github.com/user-attachments/assets/d67de3ee-2519-4d95-bdb8-400d9ccd6513" />

### Team detail
<img width="1900" height="1489" alt="localhost_5173_teams (5)" src="https://github.com/user-attachments/assets/ba7b67af-5840-4b41-afee-31a6cdb0453b" />
<img width="1900" height="2320" alt="localhost_5173_teams (4)" src="https://github.com/user-attachments/assets/425178dd-76ea-48dc-b8bd-14f4d245ece2" />
<img width="1900" height="7581" alt="localhost_5173_teams (3)" src="https://github.com/user-attachments/assets/7caf85ee-c5c9-4354-b2be-83c8b14f8f23" />
<img width="1900" height="1831" alt="localhost_5173_teams (2)" src="https://github.com/user-attachments/assets/a4be0500-7164-4c1e-9f19-35b3777718cb" />

### Player page
<img width="1900" height="1015" alt="localhost_5173_players (1)" src="https://github.com/user-attachments/assets/830375f9-3a2e-4f46-8e67-d918490b10bf" />
<img width="1900" height="1015" alt="localhost_5173_players" src="https://github.com/user-attachments/assets/0ba10487-ecbd-4ac4-8514-93c1905e1716" />

### Player Details
<img width="1900" height="1883" alt="localhost_5173_players (2)" src="https://github.com/user-attachments/assets/8bbe3955-5be7-4529-b03a-c271727d39fa" />

### Responsive Design
| Desktop | Tablet | Mobile |

---

## ✨ Features

- Football matches overview and match tracking.
- Live matches and match status information.
- Match details, timelines, and statistics.
- League exploration and standings.
- Team profiles and team-related information.
- Player profiles and performance statistics.
- Top scorers section.
- Search functionality for discovering football information.
- Responsive layouts for desktop, tablet, and mobile devices.
- Reusable components and structured page architecture.
- Dynamic navigation between matches, leagues, teams, and players.
- Loading states and data-dependent UI rendering.

---

## 📄 Pages & Functionality

### 1. Home Page

The Home page acts as the main dashboard, bringing together important football information in one place.

It includes:

- **Featured Matches:** A match carousel displaying selected fixtures, team information, scores, and match status.
- **Live Matches:** A dedicated section for currently live fixtures.
- **Top Scorers:** A section highlighting leading goal scorers.
- **League Standings:** An overview of league rankings and team positions.
- **Match Navigation:** Direct access to individual match pages.

The layout is designed to provide a quick overview without overwhelming the user with unnecessary information.

### 2. Match Details

The Match Details page provides a more detailed view of an individual football match.

It includes:

- **Match Overview:** Match information, participating teams, score, competition, and venue.
- **Timeline:** Important match events presented chronologically.
- **Match Information:** Additional fixture details.
- **Lineups:** Starting lineups and team formations.
- **Substitutions:** Information about substitute players.
- **Team Statistics:** A comparison of available match statistics.

The page uses a tab-based navigation structure to keep different categories of match information organized.

### 3. League Details

The League Details page focuses on a specific football competition.

It provides:

- League information and competition identity.
- League standings and team rankings.
- Points, matches played, wins, draws, and losses.
- Goal-related statistics and other available competition data.

League listings are also organized by country, making it easier to explore different competitions.

### 4. Team Details

The Team Details page provides an overview of an individual football club.

It is designed to bring team-related information together, including:

- Team identity, logo, and competition context.
- Squad and player information.
- Team-related match data.
- Available team statistics and performance information.

It also provides navigation between relevant football entities, allowing users to move between teams, players, and competitions.

### 5. Player Details

The Player Details page focuses on individual football players.

Depending on the data available through the API, it presents information such as:

- Player profile and identity.
- Team and competition information.
- Player statistics and performance data.
- Available season-related statistics.

The page provides a dedicated space for exploring individual player information.

### 6. Search

The Search page provides a way to find football-related entities and navigate to their corresponding pages.

It supports the overall navigation experience by connecting different sections of the application.

### 7. Not Found

A dedicated fallback page handles invalid or unavailable routes, providing a consistent experience when a requested page cannot be found.

---

## 📱 Responsive Design

Kick Pulse was designed to work across different screen sizes, including:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

Responsive design was considered throughout the development process rather than being added as a final adjustment.

The interface adapts its layout, spacing, component dimensions, and content organization to different viewport sizes.

Particular attention was given to:

- Responsive navigation and page layouts.
- Flexible grids and component sizing.
- Match cards and statistics sections.
- Tables and information-heavy components.
- Team formations and lineup presentation.
- Typography and spacing consistency.
- Maintaining usability on smaller screens.

The goal was to preserve the overall visual identity and usability of the application across devices.

---

## 🎨 Design & Inspiration

The visual direction of Kick Pulse is inspired by football platforms such as **FotMob**.

Rather than presenting football information as a game or fantasy experience, the project follows a statistics-oriented dashboard approach.

The design focuses on:

- A dark interface with carefully selected accent colors.
- Clear visual hierarchy.
- Information-dense but organized layouts.
- Consistent spacing and component styling.
- Football-focused visual elements.
- Intuitive navigation between related content.

FotMob served as a reference for the overall product direction and information presentation, while Kick Pulse was independently implemented with its own component structure and interface decisions.

---

## ⚙️ API Integration & Development Constraints

Kick Pulse uses **API-Football** as its external football data provider.

One of the most important challenges during development was the limited request allowance of the free API plan, which provides approximately **100 requests per day**.

This limitation had a significant impact on the development process and resulted in fundamental changes to the application's architecture, functionality, and design decisions.

The available request quota made it impractical to treat every page and component as an independent source of continuously refreshed data.

As a result, several design and implementation decisions had to be reconsidered to work within the API restrictions.

These constraints affected areas such as:

- How football data is requested and distributed across pages.
- The amount of information that can be fetched for different sections.
- Which features can be displayed simultaneously.
- The availability and depth of certain statistics.
- How frequently match information can be refreshed.
- The overall organization of data-dependent components.
- Design decisions that originally depended on having access to more extensive data.

In other words, the API limitation was not simply a technical inconvenience. It became a major factor in shaping the final product.

Some features and visual possibilities had to be simplified, adjusted, or approached differently because of the restricted data access.

**This project demonstrates the practical challenges of designing and developing a data-driven frontend application when external API resources are limited.**

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development environment and build tooling |
| JavaScript | Application logic and data handling |
| Tailwind CSS v4 | Styling and responsive layouts |
| React Router | Client-side routing and navigation |
| Axios | HTTP requests and API communication |
| Recharts | Data visualization |
| Swiper | Interactive match carousel |
| API-Football | Football data provider |

---

## 🏗️ Project Structure

The application follows a component-based architecture, with pages and reusable UI components organized into dedicated directories.

The project separates major responsibilities such as:

- **Pages:** Main application routes and page-level components.
- **Components:** Reusable interface elements and feature-specific components.
- **Services:** API communication and data-fetching logic.
- **Utils:** Shared helper functions and data-processing utilities.
- **Assets:** Images, icons, fonts, and other static resources.

This structure helps keep the codebase organized, maintainable, and easier to extend.

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- An API-Football API key

### Installation

Clone the repository:

```bash
git clone https://github.com/AmirAliTorkashvand-web/kick-pulse.git
```

Navigate to the project directory:

```bash
cd kick-pulse
```

Install dependencies:

```bash
npm install
```

Configure your API key using the environment variable expected by the project's Axios configuration.

For example, if the project uses `VITE_API_KEY`:

```env
VITE_API_KEY=your_api_key
```

Make sure your environment file is included in `.gitignore` and never commit your private API key.

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

---

## 🔮 Future Improvements

Potential areas for further development include:

- More efficient API request management.
- Improved data caching and refresh strategies.
- Additional football competitions and statistics.
- More detailed player and team analytics.
- Enhanced match tracking and live updates.
- Further UI and accessibility improvements.

---

## 👨‍💻 Author

**AmirAli Torkashvand**

Frontend Developer

GitHub: [@AmirAliTorkashvand-web](https://github.com/AmirAliTorkashvand-web)

---

## 📄 License

This project was developed for educational and portfolio purposes.
