# Calendar Component

A polished, interactive Next.js calendar component inspired by physical wall calendars. This project contains featuring a hero image, date range selection, integrated notes, and fully responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js  (App Router)
- **Frontend Library**: React 
- **Language**: TypeScript
- **Styling**: Tailwind CSS 
- **Date Handling**: date-fns 
- **Utilities**: clsx  (conditional CSS classes)
- **Development Tools**:
  - ESLint  (linting)
  - TypeScript  (type checking)
- **Deployment**:  Vercel

## ✨ Features

### Core Features
- **Wall Calendar Aesthetic**: Clean UI with a prominent hero image at the top, resembling a physical wall calendar. The image serves as a visual anchor paired with the monthly date grid.
- **Monthly Calendar View**: Displays a  grid of days for the current month, including padding days from adjacent months.
- **Month Navigation**: Intuitive [‹] and [›] buttons to navigate between months, with the current month/year displayed prominently.
- **Date Range Selection**: Click to select a start date, then an end date. Visual feedback includes:
  - Start/End dates: Black background with white text
  - Range days: Light blue highlight
  - Hover effects for interactivity
- **Integrated Notes Section**: A dedicated panel for adding personal notes to selected dates. Notes are saved automatically and persist across sessions.
- **Fully Responsive Design**:
  - **Desktop**: Side-by-side layout (notes panel left, calendar grid right)
  - **Mobile**: Stacked vertically for touch-friendly interaction

### Additional Features
- **Persistent Notes**: Notes stored in browser localStorage, keyed by date (YYYY-MM-DD format)
- **Visual Hierarchy**: Gradient background, shadows, and rounded corners for a modern look
- **Accessibility**: Clear visual states and hover feedback
- **Performance**: Optimized images with Next.js Image component, minimal re-renders via React hooks

## 🛠 Implementation Details

### Architecture
- **Component-Based**: Modular React components (`Calendar`, `Header`, `CalendarGrid`, `NotesPanel`)
- **State Management**: Custom `useCalendar` hook manages calendar state (current date, selections)
- **Data Persistence**: Client-side only notes are saved to localStorage as JSON
- **Styling**: Utility-first with Tailwind CSS, responsive breakpoints (`md:` for desktop)
- **Type Safety**: Full TypeScript interfaces for props and state

### Key Components
- **`Calendar`**: Root component combining header, grid, and notes in a responsive grid layout
- **`Header`**: Hero image with overlaid month/year and navigation buttons
- **`CalendarGrid`**: Renders the date grid with selection logic and conditional styling
- **`NotesPanel`**: Textarea for notes, with save functionality and localStorage integration

### State Logic
- **Range Selection**: Handled in `useCalendar` hook toggles between setting start/end dates
- **Notes**: `NotesPanel` uses `useState` for current note and `useEffect` for localStorage sync
- **Date Calculations**: `generateCalendarDays` utility computes the full grid array using date-fns

## 📦 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jyotikamble-creator/calendar
   cd calendar
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🎯 Usage

- **Navigate Months**: Use ‹ › buttons in the header.
- **Select Dates**: Click days to set start date, click again for end date. Range highlights automatically.
- **Add Notes**: Select a date, type in the notes panel, and click "Save Note". Notes load when revisiting the date.
- **Responsive**: Resize browser or view on mobile – layout adapts seamlessly.

# Live

## Demo Video : https://drive.google.com/file/d/1K9EA54j5yuQceQjcrFysZivw6IPM6ft8/view
## website :https://calendar-gamma-virid.vercel.app/
