# Lio's Portfolio 🚀

Welcome to the source code of my personal portfolio! This project is a 3D interactive web application built with modern web technologies.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) alongside [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/) and [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/liotg/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd lio-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📦 Build and deployment

To create a production build locally:
```bash
npm run build
```

Every push to `main` builds the site and deploys the `dist/` folder to GitHub Pages with the workflow in `.github/workflows/deploy.yml`. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. You can monitor deployments in the **Actions** tab.
