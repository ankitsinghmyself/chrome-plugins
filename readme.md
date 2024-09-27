# Chrome Extension Installation Instructions

This document provides instructions on how to use the **My Chrome Extension** in development mode.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Loading the Extension](#loading-the-extension)


## Prerequisites

- Google Chrome or Chromium browser installed on your computer.
- Basic understanding of how Chrome extensions work.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ankitsinghmyself/chrome-plugins.git
   cd <my-chrome-extension>
2. **Directory Structure: Ensure your directory has the following structure:**:
    ```my-chrome-extension/
    ├── manifest.json
    ├── popup.html
    ├── popup.js
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
3. **Install Dependencies (if applicable): If your extension has any dependencies, make sure to install them.**

## Loading The Extension
**Loading the Extension**
To load the extension in Chrome in development mode, follow these steps:

1. Open Chrome and navigate to chrome://extensions/.

2. Enable Developer Mode:

    1. Toggle the switch at the top right corner to enable Developer Mode.
    2. Load Unpacked Extension:

3. Click on the Load unpacked button.
    1. Select the directory where your extension files are located (e.g., my-chrome-extension).
4. Check the Extension:

    1. Your extension should now appear in the list of extensions. You can enable or disable it as needed.
