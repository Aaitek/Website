# Aaitek Technology Specialists

A comprehensive digital platform built with Next.js 15 and Strapi 5, featuring a headless CMS architecture for dynamic content management.

## 🏗️ Project Architecture

```
aaitek/
├── fe/aaitek/          # Next.js 15 Frontend Application
├── be/aaitek-cms/      # Strapi 5 CMS Backend
├── html/               # Static HTML Templates (Reference)
└── README.md           # This file
```

## 🚀 Technologies Used

### Frontend (Next.js 15)
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Bootstrap 5.3.3** - UI components and responsive grid
- **Framer Motion** - Animation library
- **Embla Carousel** - Carousel component
- **Swiper** - Touch slider
- **Marked** - Markdown parser for content rendering

### Backend (Strapi 5)
- **Strapi 5.27.0** - Headless CMS
- **Better SQLite3** - Database
- **React 18** - Admin panel interface
- **TypeScript** - Type-safe backend development

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18.0.0 - v22.x.x)
- **npm** (v6.0.0 or higher)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd aaitek
```

### 2. Backend Setup (Strapi CMS)

Navigate to the backend directory:
```bash
cd be/aaitek-cms
```

Install dependencies:
```bash
npm install
```

Create environment file:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="your-app-key-1,your-app-key-2"
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
ENCRYPTION_KEY=your-encryption-key
```

> **⚠️ Security Note**: Generate strong, unique values for all secrets in production.

Build and start the Strapi server:
```bash
npm run build
npm run dev
```

The Strapi admin panel will be available at: `http://localhost:1337/admin`

### 3. Frontend Setup (Next.js)

Navigate to the frontend directory:
```bash
cd fe/aaitek
```

Install dependencies:
```bash
npm install
```

Create environment file:
```bash
touch .env.local
```

Configure the `.env.local` file:
```env
STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Start the development server:
```bash
npm run dev:next
```

The Next.js application will be available at: `http://localhost:3000`

### 4. Running Both Applications Concurrently

From the frontend directory (`fe/aaitek`), you can run both applications simultaneously:
```bash
npm run dev
```

This will start:
- Strapi CMS at `http://localhost:1337`
- Next.js frontend at `http://localhost:3000`

## 📁 Content Management

### Setting Up Content Types in Strapi

1. **Access Strapi Admin**: Navigate to `http://localhost:1337/admin`
2. **Create Admin User**: Follow the setup wizard to create your admin account
3. **Create Content Types**: Set up the following content types:

#### Events Collection
- **Title** (Text, Required)
- **Description** (Text, Long text)
- **Content** (Rich text)
- **Image** (Media, Multiple)
- **Slug** (UID, from Title)
- **publishedAt** (DateTime)

#### Blogs Collection
- **Title** (Text, Required)
- **Description** (Text, Long text)
- **Content** (Rich text)
- **Image** (Media, Multiple)
- **Slug** (UID, from Title)
- **publishedAt** (DateTime)

### API Permissions

Configure API permissions in Strapi:
1. Go to **Settings > Roles > Public**
2. Enable the following permissions:
   - **Events**: `find`, `findOne`
   - **Blogs**: `find`, `findOne`
   - **Upload**: `find`, `findOne`

## 🎨 Frontend Features

### Pages & Routes
- **Home** (`/`) - Landing page with hero section and featured content
- **Services** (`/services`) - Service offerings and capabilities
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Events** (`/events`) - Events listing and individual event pages
- **Blogs** (`/blogs`) - Blog listing and individual blog posts

### Dynamic Content
- Events fetched from Strapi CMS
- Blog posts with rich content rendering
- Image optimization with Next.js Image component
- Responsive design with Bootstrap grid system

### SEO & Performance
- Server-side rendering (SSR) with Next.js App Router
- Image optimization and lazy loading
- Meta tag management
- Fast page loads with static generation where possible

## 🔧 Development Scripts

### Frontend Scripts
```bash
# Development
npm run dev              # Run both frontend and backend
npm run dev:next         # Run only Next.js frontend
npm run dev:strapi       # Run only Strapi backend

# Production
npm run build            # Build Next.js application
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Backend Scripts
```bash
# Development
npm run dev              # Start Strapi in development mode
npm run develop          # Alternative development command

# Production
npm run build            # Build Strapi application
npm run start            # Start production server

# Utilities
npm run console          # Access Strapi console
npm run deploy           # Deploy Strapi application
npm run upgrade          # Upgrade Strapi to latest version
```

## 🌐 Deployment

### Frontend Deployment (Vercel)

1. **Connect to Vercel**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Environment Variables**: Set in Vercel dashboard:
   ```
   STRAPI_URL=https://your-strapi-domain.com
   NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com
   ```

3. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Backend Deployment (Strapi Cloud/Railway/DigitalOcean)

1. **Database**: Configure production database (PostgreSQL recommended)
2. **Environment Variables**: Set all required environment variables
3. **File Storage**: Configure cloud storage for media files
4. **Domain**: Set up custom domain and SSL

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use strong, unique secrets for all JWT tokens
- Rotate secrets regularly in production

### Content Security
- Sanitize all user inputs
- Configure CORS properly for production
- Enable rate limiting on API endpoints
- Validate file uploads for security

## 🧪 Testing

### Frontend Testing
```bash
# Run TypeScript type checking
npx tsc --noEmit

# Run ESLint
npm run lint

# Build test
npm run build
```

### Backend Testing
```bash
# Check Strapi configuration
npm run strapi configuration:dump

# Validate content types
npm run strapi generate
```

## 📚 Documentation

### Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

### API Documentation
- **Strapi API**: `http://localhost:1337/documentation` (when enabled)
- **Content API**: `http://localhost:1337/api/`

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes with proper commit messages
3. Test locally with both frontend and backend
4. Submit pull request for review

### Code Standards
- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write descriptive commit messages

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000 (Next.js)
npx kill-port 3000

# Kill process on port 1337 (Strapi)
npx kill-port 1337
```

#### Database Issues
```bash
# Reset Strapi database (development only)
rm -rf be/aaitek-cms/.tmp/data.db
npm run dev
```

#### Node Modules Issues
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Getting Help
- Check the GitHub Issues page
- Review Strapi and Next.js documentation
- Contact the development team

## 📄 License

This project is proprietary software. All rights reserved.

---

**Developed by**: Aaitek Technology Specialists
**Contact**: info@aaitek.com
**Phone**: +61 435 987 212
**Location**: Sydney, Australia