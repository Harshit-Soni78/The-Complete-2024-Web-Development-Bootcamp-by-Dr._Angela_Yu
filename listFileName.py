print("\n_____________________________________\n")

import os
import fnmatch

# Get the root folder where the script resides
root_folder = os.path.dirname(os.path.abspath(__file__))

# Read ignore patterns from a custom ".fileignore" file
ignore_file = os.path.join(root_folder, '.fileignore')
ignore_patterns = []

if os.path.exists(ignore_file):
    with open(ignore_file, 'r') as f:
        ignore_patterns = [line.strip() for line in f if line.strip() and not line.startswith('#')]

def should_ignore(path):
    for pattern in ignore_patterns:
        if fnmatch.fnmatch(path, pattern) or any(fnmatch.fnmatch(part, pattern) for part in path.split(os.sep)):
            return True
    return False

# Walk through all folders and subfolders
for current_path, folders, files in os.walk(root_folder):
    relative_path = os.path.relpath(current_path, root_folder)

    if should_ignore(relative_path):
        continue

    folder_label = '.' if relative_path == '.' else relative_path
    print(f"📂 Folder: {folder_label}")

    for file in files:
        if should_ignore(file):
            continue
        print(f"   └── {file}")


print("\n_____________________________________\n")