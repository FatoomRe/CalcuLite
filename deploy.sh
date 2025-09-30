#!/bin/bash

# Manual deployment script for CalcuLite to GitHub Pages
echo "🚀 Starting CalcuLite deployment..."

# Build the project
echo "📦 Building project..."
npm run build

# Remove old docs folder
echo "🧹 Cleaning old deployment..."
rm -rf docs

# Create new docs folder and copy files
echo "📁 Copying files to docs folder..."
mkdir -p docs
cp -r dist/* docs/

# Add to git and commit
echo "📤 Committing to git..."
git add docs/
git add -A
git commit -m "Deploy CalcuLite - $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin master

echo "✅ Deployment complete!"
echo "🔗 Your site will be available at: https://fatoomre.github.io/CalcuLite/"
echo "⏰ It may take a few minutes for changes to appear."