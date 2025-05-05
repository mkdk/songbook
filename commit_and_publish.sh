#!/bin/bash

# Usage: ./publish.sh "Your commit message"

set -e  # Stop on first error

COMMIT_MSG=${1:-"Update"}

echo "🛠️ Building Flutter web (PWA)..."
flutter build web --base-href /songbook/ --release

echo "🔄 Staging all changes..."
git add .

echo "✅ Committing with message: \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG"

echo "🚀 Pushing to remote..."
git push

echo "🎉 Publish complete!"

