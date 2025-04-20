# KhaanaKhazana

A food donation management system to connect donors with NGOs and handle food donations efficiently.

## Features

- User authentication (Donor, NGO, Volunteer)
- Food donation creation and management
- NGO listing and assignment
- Donation tracking with real-time location updates
- Admin dashboard for monitoring and management

## Recent Updates

- Removed volunteer map from bottom tab navigation
- Integrated tracking functionality directly into the donation history screen
- Each donation in history now has a "Track Donation" button when the donation is trackable
- Tracking screen shows donation status, location of volunteers, and delivery progress
- Real-time location updates for donations in-progress

## Tech Stack

- React Native with Expo
- GraphQL for API communication
- Firebase for authentication
- React Native Maps for location tracking
- PostgreSQL database

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Configure environment variables in `.env`
4. Run `npm start` to start the Expo development server

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

## Development

- Use `npm run lint` to check for linting issues
