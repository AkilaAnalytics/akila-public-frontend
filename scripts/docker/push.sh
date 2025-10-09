#!/bin/bash
# scripts/docker/push.sh

set -e  # Exit on error

# Disable AWS CLI pager to prevent interactive prompts
export AWS_PAGER=""

# Configuration
IMAGE_NAME="akila-public"
LOCAL_TAG="latest"
AWS_REGION="${AWS_REGION:-us-east-1}"  # Default to us-east-1 if not set
AWS_ACCOUNT_ID="$(aws sts get-caller-identity --query Account --output text --no-paginate)"
ECR_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
ECR_REPOSITORY="${IMAGE_NAME}"
REMOTE_TAG="${ECR_REGISTRY}/${ECR_REPOSITORY}:${LOCAL_TAG}"

echo "🚀 Pushing Docker image to AWS ECR..."
echo "Local image: ${IMAGE_NAME}:${LOCAL_TAG}"
echo "Remote tag: ${REMOTE_TAG}"
echo "AWS Region: ${AWS_REGION}"
echo "AWS Account ID: ${AWS_ACCOUNT_ID}"
echo ""

# Check if local image exists
if ! docker image inspect "${IMAGE_NAME}:${LOCAL_TAG}" > /dev/null 2>&1; then
    echo "❌ Local image ${IMAGE_NAME}:${LOCAL_TAG} not found."
    echo "Please run './scripts/docker/build.sh' first to build the image."
    exit 1
fi

# Authenticate with ECR
echo "🔐 Authenticating with ECR..."
aws ecr get-login-password --region "${AWS_REGION}" --no-paginate | docker login --username AWS --password-stdin "${ECR_REGISTRY}"

# Create ECR repository if it doesn't exist
echo "📦 Ensuring ECR repository exists..."
if ! aws ecr describe-repositories --repository-names "${ECR_REPOSITORY}" --region "${AWS_REGION}" --no-paginate > /dev/null 2>&1; then
    echo "Creating ECR repository: ${ECR_REPOSITORY}"
    aws ecr create-repository --repository-name "${ECR_REPOSITORY}" --region "${AWS_REGION}" --no-paginate > /dev/null
else
    echo "ECR repository already exists: ${ECR_REPOSITORY}"
fi

# Tag the image
echo "🏷️  Tagging image..."
docker tag "${IMAGE_NAME}:${LOCAL_TAG}" "${REMOTE_TAG}"

# Push the image
echo "⬆️  Pushing image to ECR..."
docker push "${REMOTE_TAG}"

echo ""
echo "✅ Successfully pushed image to ECR!"
echo "Image URI: ${REMOTE_TAG}"
echo ""
echo "To pull this image:"
echo "  docker pull ${REMOTE_TAG}"
echo ""
echo "To run this image:"
echo "  docker run -p 1337:1337 ${REMOTE_TAG}"
