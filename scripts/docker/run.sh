#!/bin/bash
# scripts/docker/run-test.sh

set -e  # Exit on error

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "🚀 Testing Docker container with proper environment..."
echo "Project root: $PROJECT_ROOT"
echo ""

# Check if .env exists
if [[ ! -f "$PROJECT_ROOT/.env" ]]; then
    echo "❌ .env file not found at $PROJECT_ROOT/.env"
    echo "Please create a .env file with your environment variables"
    exit 1
fi

echo "✅ Found .env file, loading environment variables..."
echo "Starting container on port 3000..."
echo "Visit http://localhost:3000 to test"
echo ""
echo "Press Ctrl+C to stop the container"
echo ""

# Run the container with environment variables from .env file
docker run --rm \
  -p 3000:3000 \
  --env-file "$PROJECT_ROOT/.env" \
  public-frontend:latest


#docker run -it --rm -p 3000:3000 \
#  --env-file ".env" \
#  public-frontend:latest
