import os
import json
import frontmatter
from urllib import parse


def parse_md_files(base_path):
    articles = []
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:
                    post = frontmatter.load(f)
                    title = post.get("title")
                    subTitle = post.get("subTitle")
                    category = post.get("category")
                    recommended = post.get("recommended")
                    # NOTE: need to encode the object the same way S3 does.
                    image_link = post.get("title")
                    link = parse.quote_plus(image_link)
                    preview = (
                        post.content.split("\n")[0] if post.content else ""
                    )  # First line as preview

                    if title and subTitle and category:
                        articles.append(
                            {
                                "title": title,
                                "subTitle": subTitle,
                                "category": category,
                                "preview": preview,
                                "recommended": recommended,
                                "image_link": link + "/image.jpg",
                                "article_link": f"{link}/{link}.md",
                            }
                        )
    return articles


def create_meta_json(folders, videos_file):
    all_articles = []
    for folder in folders:
        all_articles.extend(parse_md_files(folder))

    # Read and parse videos.json
    try:
        with open(videos_file, "r") as f:
            videos = json.load(f)
    except FileNotFoundError:
        print(f"File not found: {videos_file}")
        videos = []

    # Combine articles and videos
    combined_content = {"articles": all_articles, "videos": videos["videos"]}

    # Write combined content to meta.json
    with open(f"{base_path}/json/meta.json", "w") as outfile:
        json.dump(combined_content, outfile, indent=4)


base_path = "/Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content"
folders = [f"{base_path}/general", f"{base_path}/private-equity"]
videos_file = (
    f"{base_path}/json/videos.json"  # Update with the correct path if necessary
)

try:
    create_meta_json(folders, videos_file)
except Exception as e:
    print(f"ERROR: {e}")
