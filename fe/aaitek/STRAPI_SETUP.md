# 🚀 Strapi Integration Setup Guide

This guide will help you set up Strapi as a headless CMS for your Aaitek project, enabling dynamic content management with a powerful admin interface.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Strapi Backend Setup](#strapi-backend-setup)
3. [Environment Configuration](#environment-configuration)
4. [Content Type Setup](#content-type-setup)
5. [Frontend Integration](#frontend-integration)
6. [API Usage Examples](#api-usage-examples)
7. [Deployment](#deployment)
8. [Troubleshooting](#troubleshooting)

## 🛠 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of React/Next.js
- Understanding of headless CMS concepts

## 🎯 Strapi Backend Setup

### 1. Create a New Strapi Project

```bash
# Navigate to your project root
cd d:\NProjects\aaitek

# Create Strapi backend
npx create-strapi-app@latest backend --quickstart

# Or with custom database
npx create-strapi-app@latest backend --template @strapi/template-corporate
```

### 2. Start Strapi Development Server

```bash
cd backend
npm run develop
```

This will open the Strapi admin panel at `http://localhost:1337/admin`

### 3. Create Admin User

- First time running Strapi, you'll be prompted to create an admin user
- Fill in your details and remember the credentials

## ⚙️ Environment Configuration

### 1. Copy Environment File

```bash
# In your Next.js frontend directory
cp .env.local.example .env.local
```

### 2. Configure Environment Variables

Update `.env.local` with your settings:

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_api_token_here

# Optional: Database Configuration (if using external DB)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=aaitek_strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your_password
```

### 3. Generate API Token (Optional)

For authenticated requests:
1. Go to Settings → API Tokens in Strapi admin
2. Create a new token with appropriate permissions
3. Copy the token to your `.env.local` file

## 📝 Content Type Setup

### 1. Services Content Type

Create a "Services" collection type with the following fields:

```json
{
  "title": "Text (required)",
  "slug": "UID (required, target field: title)",
  "description": "Rich text (required)",
  "shortDescription": "Text",
  "icon": "Media (single)",
  "image": "Media (single)",
  "content": "Rich text",
  "features": "Component (repeatable)",
  "technologies": "Component (repeatable)",
  "pricing": "Component (single)",
  "seo": "Component (single)",
  "featured": "Boolean (default: false)",
  "order": "Number"
}
```

#### Features Component Fields:
- `title` (Text, required)
- `description` (Text)
- `icon` (Text)

#### Technologies Component Fields:
- `name` (Text, required)
- `description` (Text)
- `logo` (Media, single)

#### Pricing Component Fields:
- `startingPrice` (Number)
- `currency` (Text, default: "USD")
- `priceType` (Enumeration: fixed, hourly, project)

### 2. Technologies Content Type

```json
{
  "name": "Text (required)",
  "slug": "UID (required, target field: name)",
  "description": "Text (required)",
  "logo": "Media (single)",
  "website": "Text",
  "category": "Enumeration (CMS, Framework, Database, Cloud, DevOps, Analytics)",
  "expertise_level": "Enumeration (Beginner, Intermediate, Advanced, Expert)",
  "years_experience": "Number",
  "projects_count": "Number",
  "featured": "Boolean (default: false)",
  "order": "Number"
}
```

### 3. Testimonials Content Type

```json
{
  "name": "Text (required)",
  "position": "Text (required)",
  "company": "Text (required)",
  "content": "Rich text (required)",
  "rating": "Number (min: 1, max: 5)",
  "avatar": "Media (single)",
  "company_logo": "Media (single)",
  "project_link": "Text",
  "featured": "Boolean (default: false)",
  "order": "Number"
}
```

### 4. Team Members Content Type

```json
{
  "name": "Text (required)",
  "position": "Text (required)",
  "bio": "Rich text (required)",
  "avatar": "Media (single)",
  "email": "Email",
  "social_links": "Component (single)",
  "skills": "Text (repeatable)",
  "years_experience": "Number",
  "featured": "Boolean (default: false)",
  "order": "Number"
}
```

#### Social Links Component Fields:
- `linkedin` (Text)
- `twitter` (Text)
- `github` (Text)
- `website` (Text)

### 5. Projects Content Type

```json
{
  "title": "Text (required)",
  "slug": "UID (required, target field: title)",
  "description": "Text (required)",
  "content": "Rich text (required)",
  "featured_image": "Media (single)",
  "gallery": "Media (multiple)",
  "client": "Text (required)",
  "client_logo": "Media (single)",
  "project_url": "Text",
  "github_url": "Text",
  "technologies": "Component (repeatable)",
  "duration": "Text",
  "team_size": "Number",
  "project_type": "Enumeration (Web Development, Mobile App, CMS Implementation, E-commerce, Custom Software)",
  "results": "Component (single)",
  "seo": "Component (single)",
  "featured": "Boolean (default: false)",
  "order": "Number"
}
```

### 6. SEO Component (Shared)

```json
{
  "metaTitle": "Text",
  "metaDescription": "Text",
  "keywords": "Text",
  "metaRobots": "Text",
  "structuredData": "JSON",
  "metaViewport": "Text",
  "canonicalURL": "Text",
  "metaImage": "Media (single)",
  "metaSocial": "Component (repeatable)"
}
```

### 7. Global Settings (Single Type)

```json
{
  "site_name": "Text (required)",
  "site_description": "Text (required)",
  "logo": "Media (single)",
  "favicon": "Media (single)",
  "default_seo": "Component (single)",
  "contact_info": "Component (single)",
  "social_links": "Component (single)",
  "analytics": "Component (single)"
}
```

## 🔗 Frontend Integration

### 1. Install Dependencies

Dependencies are already added to your `package.json`:

```bash
npm install
```

### 2. Use Strapi Hooks in Components

```tsx
import { useServices, useFeaturedTechnologies } from '@/lib/strapi'

export const MyComponent = () => {
  const { items: services, isLoading, error } = useServices({
    pagination: { pageSize: 6 },
    sort: ['order:asc']
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading services</div>

  return (
    <div>
      {services?.map(service => (
        <div key={service.id}>
          <h3>{service.attributes.title}</h3>
          <p>{service.attributes.description}</p>
        </div>
      ))}
    </div>
  )
}
```

### 3. API Examples

```tsx
// Get all services
const services = await strapiAPI.getServices()

// Get service by slug
const service = await strapiAPI.getServiceBySlug('contentful-excellence')

// Get featured technologies
const technologies = await strapiAPI.getFeaturedTechnologies()

// Search across content types
const results = await strapiAPI.search('CMS', ['services', 'technologies'])
```

## 🎨 Content Management

### 1. Adding Content

1. Go to Content Manager in Strapi admin
2. Click on your content type (e.g., Services)
3. Click "Add New Services"
4. Fill in the fields
5. Set publication status to "Published"
6. Save

### 2. Media Management

1. Go to Media Library
2. Upload images for services, technologies, etc.
3. Add alt text for accessibility
4. Organize in folders

### 3. SEO Setup

For each content item:
1. Fill in SEO component fields
2. Add meta title and description
3. Upload meta image (1200x630px recommended)
4. Set up Open Graph data

## 🚀 Deployment

### 1. Strapi Backend Deployment

**Option A: Railway (Recommended)**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway add postgresql
railway up
```

**Option B: Heroku**

```bash
# Install Heroku CLI and deploy
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
```

**Option C: DigitalOcean App Platform**

1. Connect your Git repository
2. Set environment variables
3. Deploy with one click

### 2. Frontend Deployment

Update your `.env.local` with production URLs:

```env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.railway.app
STRAPI_API_TOKEN=your_production_token
```

Deploy to Vercel:

```bash
vercel --prod
```

### 3. Environment Variables

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_STRAPI_URL`
- `STRAPI_API_TOKEN` (if using authenticated requests)

## 📊 API Usage Examples

### Services Management

```tsx
// Get all services with pagination
const { items: services } = useServices({
  pagination: { pageSize: 10, page: 1 },
  sort: ['order:asc', 'createdAt:desc']
})

// Get featured services only
const { items: featuredServices } = useFeaturedServices()

// Get service by slug for detail page
const { item: service } = useService('contentful-excellence')
```

### Image Optimization

```tsx
import { getStrapiMedia, getStrapiMediaAlt } from '@/lib/strapi'

const ServiceCard = ({ service }) => {
  const imageUrl = getStrapiMedia(service.attributes.image, 'medium')
  const imageAlt = getStrapiMediaAlt(service.attributes.image)

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={300}
        />
      )}
      <h3>{service.attributes.title}</h3>
    </div>
  )
}
```

### Search Functionality

```tsx
import { useSearch } from '@/lib/strapi'

const SearchComponent = () => {
  const [query, setQuery] = useState('')
  const { data: results, isLoading } = useSearch(query, ['services', 'technologies'])

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {results && (
        <div>
          <h3>Services ({results.services.data.length})</h3>
          {results.services.data.map(service => (
            <div key={service.id}>{service.attributes.title}</div>
          ))}
        </div>
      )}
    </div>
  )
}
```

## 🔧 Troubleshooting

### Common Issues

**1. CORS Errors**

Update your Strapi `config/middlewares.js`:

```js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'https://your-frontend-domain.com']
    }
  },
  // ... other middlewares
]
```

**2. API Token Issues**

- Make sure the token has the right permissions
- Check that the token is correctly set in environment variables
- Verify the Authorization header format

**3. Image Loading Issues**

- Check media permissions in Strapi
- Verify image URLs are absolute
- Ensure proper image formats are uploaded

**4. Build Errors**

Make sure all environment variables are set in your deployment platform.

### Performance Tips

1. **Use pagination** for large datasets
2. **Implement caching** with SWR's built-in cache
3. **Optimize images** using Next.js Image component
4. **Lazy load** content below the fold
5. **Use ISR** (Incremental Static Regeneration) for better performance

## 📚 Additional Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [SWR Documentation](https://swr.vercel.app/)
- [Aaitek Design System](/src/design-system/README.md)

## 🎯 Next Steps

1. Set up your Strapi backend
2. Create the content types
3. Add some sample content
4. Test the API integration
5. Deploy to production
6. Set up automated backups
7. Configure CDN for media files

---

**Happy coding! 🚀**

For questions or support, please refer to the project documentation or contact the development team.