# Getting Started 
> How do I edit this website?

1. Create a Github account. [Get Started](https://github.com/signup)
2. Download Visual Studio Code (VSC) [Download](https://code.visualstudio.com/download)
3. DM me your Github username.

### Once I have given you perms to this repo 
1. Add the following extensions to VSC
> [Github Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions)
> [Github Codespace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)
> [Github Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub)
2. Link your Github to VSC
3. Restart your VSC
4. Copy 'https://github.com/athenarebeldev/sxn-website.git'
5. On the main screen select 'Clone Git Repository' and paste that above link
6. Once it has loaded open the terminal
7. Type 'git remote set-url origin https://github.com/athenarebeldev/sxn-website.git'
8. Type 'git push --force'

### If everything works as intented 
1. Edit your files
> 
> Open 'about.html' and make edits
> 
> Open 'art.html' and make edits
> 
> Open 'commision.html' and make edits
> 
> Open 'edits.html' and make edits
> 
> Open 'graphics.html' and make edits
> 
> Open 'index.html' and make edits
> 
*Quick Tip - 'index.html' is your main file. This is the main page that will appear when your page is loaded.*

### Adding Images 
1. Download your image
2. Upload your image by dragging it, copy and pasting it, or selecting the "new file" option
3. Move the image to the 'img' folder
4. Copy your image into the './preview' folder, you should have 2 of the same images
5. Copy the code below to add it into a file
```
 <div class="preview">
    <a href="[IMAGE PREVIEW URL]" target="_blank"><img src="[IMAGE URL]" alt="Title"></a>
 </div>
```

### Adding a new page
1. Select the '+' icon at the top of the file explorer
2. Type `<your title>.html` (i.e. `music.html`)
3. Copy the code below and paste it onto the new page, edit it to your liking
    ```
    <head>
    <title>[PAGE TITLE]</title>
    <link href="main.css" style="text/css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta name="description" content="[DESCRIPTION]">
    <meta name="keywords" content="san,sxn,commission,artist,music">
    <meta name="author" content="Sxn Development">
    <html lang="en-US">
    <link rel="shortcut icon" href="img/favicon/favicon.ico" />
    <script type="text/javascript" src="script.js"></script>
    </head>
    
    <body>
    <nav>
    <a href="index.html" style="padding: 20px;">
    <img src="img/logo.png" height="50" width="50">
    </a>
    <div id="myLinks">
    <a href="[PAGE LINK 1]"><strong>[PAGE TITLE]</strong></a>
    <a href="[PAGE LINK 2]"><strong>[PAGE TITLE]</strong></a>
    <a href="[PAGE LINK 3]"><strong>[PAGE TITLE]</strong></a>
    <a href="[PAGE LINK 4]"><strong>[PAGE TITLE]</strong></a>
    <a href="[PAGE LINK 5]"><strong>[PAGE TITLE]</strong></a>
    <a class="shop" href="[EXTERNAL LINK]" target="_blank" rel="noreferrer"><strong>[EXTERNAL TITLE]</strong></a>
    </div>
    </nav>

    <div class="maincontainer2">

    </div>
    </body>
    ```


### Premade containers 
> `<div class="writeup">` - Container for text (H1, H2, H3, P, and images)
> 
> `<div id="leftside-main">` - Left side container for text (H1, H2, H3, P, and images)
> 
> `<div id="rightside-main">` - Right side container for text (H1, H2, H3, P, and images)
> 
> `<div id="links">` - Container for links
> 
> `<div class="art-container">` - Container for Images

### Tips 
1. Close all `<div>` containers with `</div>`
2. Do not use uppercase for code `<DIV>`, `<Div>`, etc. ❌
