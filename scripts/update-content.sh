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


echo "-------------------- organize_and_update_articles.py -------------------- \n\n\n"
python /Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content/python/organize_and_update_articles.py
echo "-------------------- update_files.py -------------------- \n\n\n"
python /Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content/python/upload_files.py $STAGE
echo "-------------------- meta.py -------------------- \n\n\n"
python /Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content/python/create_meta.py
echo "-------------------- AWS CP & SYNC -------------------- \n\n\n"
aws s3 cp ./content/json/meta.json s3://$BUCKET_NAME/_blog/ --profile $PROFILE_NAME

# clear the cache if specified
# Check if the second argument is True
if [[ "$2" == "True" ]]; then
    distribution_id=$(aws ssm get-parameter --name "/analytics-public-stateless-${STAGE}/cloudfront-distribution-id" --query "Parameter.Value" --output text --profile $PROFILE_NAME)
    aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*" --profile $PROFILE_NAME
fi
#distribution_id=$(aws ssm get-parameter --name "/analytics-public-stateless-${STAGE}/cloudfront-distribution-id" --query "Parameter.Value" --output text --profile $PROFILE_NAME)
#aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*" --profile $PROFILE_NAME
#aws s3 sync ./content/general s3://$BUCKET_NAME/_blog --profile $PROFILE_NAME --exclude "*.DS_Store" --exclude "*/.DS_Store"
#aws s3 sync ./content/private-equity s3://$BUCKET_NAME/_blog --profile $PROFILE_NAME --exclude "*.DS_Store" --exclude "*/.DS_Store"
