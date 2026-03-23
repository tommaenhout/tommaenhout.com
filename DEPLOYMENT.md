# Tom Maenhout Portfolio - Deployment Guide

## Overview
This is a Next.js portfolio website with Firebase Hosting and Cloud Functions integration for secure environment variable management.

## Environment Variables

### Local Development
Create `.env.local` file in project root:
```bash
NEXT_PUBLIC_SERVICE_ID=service_...
NEXT_PUBLIC_TEMPLATE_ID=template_...
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

### Production (Firebase Functions)
Environment variables are stored in `functions/.env` and accessed via Cloud Functions:
```bash
# functions/.env
NEXT_PUBLIC_SERVICE_ID=service_y...
NEXT_PUBLIC_TEMPLATE_ID=template_...
NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
```

## Deployment Process

### 1. Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### 2. Enable Firebase Experiments
```bash
firebase experiments:enable webframeworks
```

### 3. Build and Deploy
```bash
# Build the Next.js app
npm run build

# Deploy everything (hosting + functions)
firebase deploy

# Or deploy separately
firebase deploy --only hosting
firebase deploy --only functions
```

## Architecture

### Firebase Hosting
- Serves the Next.js static application
- URL: `https://tommaenhout-b1c18.web.app`

### Firebase Functions
- Provides secure environment variable access
- Function URL: `https://us-central1-tommaenhout-b1c18.cloudfunctions.net/getEmailConfig`
- Returns EmailJS configuration to frontend

### Frontend Integration
The ContactForm component fetches configuration from the Firebase function:
```typescript
useEffect(() => {
  fetch('https://us-central1-tommaenhout-b1c18.cloudfunctions.net/getEmailConfig')
    .then(res => res.json())
    .then(config => setEmailConfig(config))
}, []);
```

## Key Components

### Background Animation
- **Spline 3D Background**: Interactive 3D animation using `@splinetool/react-spline`
- **Typing Animation**: Text animation using `typed.js`
- **Resume Content**: Professional portfolio sections

### Contact Form
- **EmailJS Integration**: Secure email sending via EmailJS service
- **Environment Variables**: Credentials stored securely in Firebase Functions
- **Loading States**: User feedback with `react-spinners`

## File Structure
```
├── src/
│   ├── app/page.tsx              # Main homepage
│   ├── components/
│   │   ├── PresentMe.tsx         # Main portfolio component
│   │   ├── BackgroundSpline.tsx  # 3D background
│   │   └── sections/
│   │       ├── ContactForm.tsx   # Contact form with EmailJS
│   │       └── ...               # Other portfolio sections
├── functions/
│   ├── .env                      # Production environment variables
│   └── src/index.ts              # Firebase Cloud Functions
├── .env.local                    # Local environment variables
└── firebase.json                 # Firebase configuration
```

## Dependencies

### Frontend
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- EmailJS Browser SDK
- React Spinners
- Spline React

### Firebase
- Firebase Hosting
- Firebase Functions (Node.js 24)
- Firebase CLI

## Development Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd tommaenhout.com
   npm install
   ```

2. **Environment Variables**
   ```bash
   cp .env.example .env.local
   # Add your EmailJS credentials to .env.local
   ```

3. **Local Development**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Deployment Commands

### Full Deployment
```bash
firebase deploy
```

### Hosting Only
```bash
firebase deploy --only hosting
```

### Functions Only
```bash
firebase deploy --only functions
```

## Troubleshooting

### Common Issues

1. **Environment Variables Not Working**
   - Ensure `.env.local` exists for local development
   - Check `functions/.env` for production variables
   - Redeploy functions after updating environment variables

2. **Spline Animation Not Loading**
   - Update `@splinetool/runtime` to latest version
   - Check network connectivity to Spline CDN
   - Verify scene URL is accessible

3. **Firebase Deployment Errors**
   - Enable `webframeworks` experiment: `firebase experiments:enable webframeworks`
   - Check Firebase project configuration
   - Verify `firebase.json` settings

4. **Contact Form Not Working**
   - Verify EmailJS credentials are correct
   - Check Firebase function is deployed and accessible
   - Ensure CORS headers are properly set

### Environment Variable Security
- Never commit `.env.local` to version control
- Use Firebase Functions for production secrets
- Regularly rotate EmailJS API keys
- Monitor Firebase Console for unauthorized access

## URLs
- **Live Site**: https://tommaenhout-b1c18.web.app
- **Firebase Console**: https://console.firebase.google.com/project/tommaenhout-b1c18/overview
- **EmailJS Dashboard**: https://dashboard.emailjs.com/admin

## Support
For deployment issues:
1. Check Firebase CLI version: `firebase --version`
2. Verify Node.js version compatibility
3. Review Firebase deployment logs
4. Check environment variable configuration
