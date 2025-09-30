#!/bin/bash

# Deploy to docs branch script
echo "🚀 Starting CalcuLite deployment to docs branch..."

# Build the project
echo "📦 Building project..."
npm run build

# Create or switch to docs branch
echo "🌿 Creating/switching to docs branch..."
git checkout -B docs

# Remove old docs folder and create new one
echo "🧹 Cleaning docs folder..."
rm -rf docs
mkdir docs

# Copy built files to docs folder
echo "📁 Copying files to docs folder..."
cp -r dist/* docs/

# Add .nojekyll file to docs
touch docs/.nojekyll

# Commit and push
echo "📤 Committing and pushing..."
git add docs/
git commit -m "Deploy docs - $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin docs

# Switch back to master
echo "🔄 Switching back to master..."
git checkout master

echo "✅ Deployment complete!"
echo "🔗 Configure GitHub Pages to use 'docs' branch"
echo "📍 Go to: https://github.com/FatoomRe/CalcuLite/settings/pages"
echo "📋 Set Source to 'Deploy from a branch' and select 'docs' branch, '/docs' folder"