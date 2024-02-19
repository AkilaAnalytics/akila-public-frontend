# PURPOSE: this script ensures all folders match the title of the article.
# Except Mac's can't have a ":" in the folder so this replaces that with a "-"

import os
import shutil
import frontmatter


def rename_folders(base_path):
    # Check if the base directory exists
    if not os.path.exists(base_path):
        print(f"The directory {base_path} does not exist.")
        return

    # Iterate through all items in the base directory
    for item in os.listdir(base_path):
        item_path = os.path.join(base_path, item)

        # Continue only if the item is a directory
        if os.path.isdir(item_path):
            # Check for .md files in the subdirectory
            md_files = [f for f in os.listdir(item_path) if f.endswith(".md")]

            if md_files:
                # Assuming there's only one .md file per folder
                md_file = md_files[0]
                md_file_path = os.path.join(item_path, md_file)

                # Parse the frontmatter to get the title
                with open(md_file_path, "r") as f:
                    post = frontmatter.load(f)
                    title = post.get("title", "").replace(":", "-")

                    if title and title != item:
                        # Rename the folder to match the title in the frontmatter
                        new_folder_path = os.path.join(base_path, title)
                        shutil.move(item_path, new_folder_path)
                        print(f"Renamed '{item_path}' to '{new_folder_path}'")


base_path = "/Users/brandongoldney/Documents/Akila-Analytics/public/frontend/content"
rename_folders(f"{base_path}/blog-general")
rename_folders(f"{base_path}/blog-private-equity")
rename_folders(f"{base_path}/blog-private-equity")
