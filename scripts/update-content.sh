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

aws s3 sync ./content/private-equity s3://$BUCKET_NAME/blog --profile $PROFILE_NAME
