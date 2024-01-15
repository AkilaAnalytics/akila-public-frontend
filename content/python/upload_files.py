import os
import sys

import boto3
import frontmatter
from botocore.exceptions import NoCredentialsError, ClientError

# AWS S3 Configuration

env = sys.argv[1]
print(env, "<<< env \n\n", flush=True)
if env == "staging":
    session = boto3.Session(profile_name="akila-staging")
    bucket_name = "staging-akila-analytics-static-assets"
elif env == "prod":
    session = boto3.Session(profile_name="akila-prod")
    bucket_name = "akila-analytics-static-assets"
else:
    raise ValueError(f"Invalid environment: ${env}")

s3 = session.client("s3")


def upload_file_to_s3(file_path, s3_path):
    try:
        s3.upload_file(file_path, bucket_name, s3_path)
        print(f"Uploaded {file_path} to s3://{bucket_name}/{s3_path}")
    except (NoCredentialsError, ClientError) as e:
        print(f"Error uploading {file_path}: {e}")


def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            print(file, "<<< file", flush=True)
            if file.endswith(".md"):
                md_file_path = os.path.join(root, file)
                with open(md_file_path, "r") as f:
                    post = frontmatter.load(f)
                    title = post.get("title", "untitled")

                # S3 Paths
                s3_md_path = f"_blog/{title}/{file}"
                s3_image_path = f"_blog/{title}/image.jpg"

                # Upload Markdown file
                upload_file_to_s3(md_file_path, s3_md_path)

                # Check and Upload Image file
                image_file_path = os.path.join(root, f"image.jpg")
                if os.path.exists(image_file_path):
                    upload_file_to_s3(image_file_path, s3_image_path)


base_path = "/Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content"
folders = [f"{base_path}/general", f"{base_path}/private-equity"]
for folder in folders:
    process_folder(folder)
