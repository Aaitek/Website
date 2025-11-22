@echo off
echo Restarting Next.js development server with fresh configuration...

REM Kill any existing npm processes
taskkill /f /im node.exe 2>nul

REM Clear Next.js cache
rmdir /s /q .next 2>nul

echo Starting development server...
npm run dev