# Manual Strapi Setup for Aaitek Project

## Current Project Structure
```
d:\NProjects\aaitek\
├── fe/aaitek/           # Next.js frontend (already configured)
├── document/            # Documentation
├── html/               # Static HTML
└── (need to add backend) # Strapi CMS
```

## Step 1: Create Strapi Backend Manually

1. **Create backend directory:**
```bash
cd d:\NProjects\aaitek
mkdir backend
cd backend
```

2. **Initialize Strapi (choose "Skip" when prompted for cloud):**
```bash
npx create-strapi-app@latest . --quickstart
```
- When prompted "Please log in or sign up", choose **Skip**
- When asked about analytics, choose **No**

3. **Alternative if above doesn't work:**
```bash
# Create package.json first
npm init -y

# Install Strapi manually
npm install @strapi/strapi@latest @strapi/plugin-users-permissions@latest @strapi/plugin-i18n@latest

# Create basic Strapi structure
npx @strapi/strapi new . --quickstart --skip-cloud
```

## Step 2: Configure Your Project

### Backend (.env file):
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys-here
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

### Frontend (.env.local):
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

## Step 3: Start Both Applications

### Terminal 1 - Strapi Backend:
```bash
cd d:\NProjects\aaitek\backend
npm run develop
```
- First run will open http://localhost:1337/admin
- Create your admin account

### Terminal 2 - Next.js Frontend:
```bash
cd d:\NProjects\aaitek\fe\aaitek
npm run dev
```
- Open http://localhost:3000

## Step 4: Import Content Types

Your frontend is already configured! Just follow the instructions in:
`fe/aaitek/STRAPI_SETUP.md`

## Project Structure After Setup:
```
d:\NProjects\aaitek\
├── fe/aaitek/           # Next.js frontend ✅
├── backend/             # Strapi CMS (new)
├── document/            # Documentation
└── html/               # Static HTML
```

## If You Have Issues:
1. Make sure to choose "Skip" for Strapi Cloud
2. Use Node.js version 18 or 20
3. Check that ports 1337 and 3000 are available
4. Your frontend integration code is already complete!