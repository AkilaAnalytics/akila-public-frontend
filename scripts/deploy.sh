# update the server code
STAGE="$1"

export AWS_PAGER=""

if [[ -z "$STAGE" ]]; then
	echo "Please provide a stage: staging or prod"
	exit 1
fi

# set shared variables
if [[ "$STAGE" == "staging" ]]; then
	BUCKET_NAME="staging-akila-analytics-static-assets"
	PROFILE_NAME="akila-staging"
elif [[ "$STAGE" == "prod" ]]; then
	BUCKET_NAME="akila-analytics-static-assets"
	PROFILE_NAME="akila-prod"
else
	echo "Invalid stage. Use 'staging' or 'prod'."
	exit 1
fi

# update the server code
zip -j build/index.zip build/index.js
aws s3 cp ./build/index.zip s3://$BUCKET_NAME/public-pages/server/index.zip --profile $PROFILE_NAME
aws lambda update-function-code --function-name analytics-public-web-app-server --s3-bucket $BUCKET_NAME --s3-key public-pages/server/index.zip --profile $PROFILE_NAME

# update the static assets
# NOTE: the favicons need to be in the "_static" folder because the request for the
# favicons goes to "_static"
aws s3 rm s3://$BUCKET_NAME/public-pages/_static/ --recursive --profile $PROFILE_NAME
aws s3 sync ./public/build s3://$BUCKET_NAME/public-pages/_static/build/ --profile $PROFILE_NAME --delete
aws s3 sync ./public/favicons s3://$BUCKET_NAME/public-pages/_static/favicons --profile $PROFILE_NAME --delete
#aws s3 cp --recursive ./public/build s3://$BUCKET_NAME/public-pages/static/build --profile $PROFILE_NAME
#aws s3 cp --recursive ./public/favicons s3://$BUCKET_NAME/public-pages/static/favicons --profile $PROFILE_NAME

# clear the cloudfront cache
distribution_id=$(aws ssm get-parameter --name "/analytics-public-stateless-${STAGE}/cloudfront-distribution-id" --query "Parameter.Value" --output text --profile $PROFILE_NAME)
echo -e "Invalidating the cloudfront cache. The cloudfront distribution id is: $distribution_id"
aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*" --profile $PROFILE_NAME
