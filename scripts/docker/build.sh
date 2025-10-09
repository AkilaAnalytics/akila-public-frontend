#!/bin/bash
# scripts/docker/build.sh

set -e  # Exit on error

# Get script directory and project root
IMAGE="akila-public"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

echo "Building Docker image..."
echo "Project root: $PROJECT_ROOT"

# Build from project root
docker build \
  -f "$PROJECT_ROOT/Dockerfile" \
  -t $IMAGE:latest \
  "$PROJECT_ROOT"

echo "✅ Build complete: public-frontend:latest"
