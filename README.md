# KhaanaKhazana Mobile App

A React Native mobile application for KhaanaKhazana platform.

## Project Structure

```
KhaanaKhazana/
├── app/                    # App directory (screens using directory-based routing)
│   ├── (auth)/            # Authentication related screens
│   ├── (tabs)/            # Main tab navigation screens
│   └── _layout.tsx        # Root layout configuration
├── assets/                 # Static assets (images, fonts, etc.)
├── components/            # Reusable components
│   ├── common/           # Shared components
│   ├── forms/            # Form-related components
│   └── ui/              # UI components (buttons, inputs, etc.)
├── constants/            # App-wide constants
│   ├── Colors.ts        # Color definitions
│   └── Layout.ts        # Layout constants
├── context/             # React Context definitions
├── hooks/               # Custom React hooks
├── models/             # TypeScript interfaces/types
├── utils/              # Utility functions
├── services/           # Service layer (API calls, etc.)
├── config/             # Configuration files
└── scripts/            # Build and utility scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- iOS: XCode (Mac only)
- Android: Android Studio

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harshaldulera/KhaanaKhazana.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Run on iOS (Mac only):

   ```bash
   npm run ios
   # or
   yarn ios
   ```

5. Run on Android:
   ```bash
   npm run android
   # or
   yarn android
   ```

## Development

- Use `npm run lint` to check for linting issues
