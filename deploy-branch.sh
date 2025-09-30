#!/bin/bash

# Deploy to gh-pages branch script
echo "🚀 Starting CalcuLite deployment to gh-pages branch..."

# Build the project
echo "📦 Building project..."
npm run build

# Create or switch to gh-pages branch
echo "🌿 Switching to gh-pages branch..."
git checkout -B gh-pages

# Remove all files except dist, node_modules, and git
echo "🧹 Cleaning branch..."
find . -maxdepth 1 ! -name 'dist' ! -name 'node_modules' ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Move dist contents to root
echo "📁 Moving built files to root..."
mv dist/* .
rmdir dist

# Add .nojekyll file
touch .nojekyll

# Commit and push
echo "📤 Committing and pushing..."
git add -A
git commit -m "Deploy to gh-pages - $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin gh-pages

# Switch back to master
echo "🔄 Switching back to master..."
git checkout master

echo "✅ Deployment complete!"
echo "🔗 Configure GitHub Pages to use 'gh-pages' branch"
echo "📍 Go to: https://github.com/FatoomRe/CalcuLite/settings/pages"
echo "📋 Set Source to 'Deploy from a branch' and select 'gh-pages' branch"