
var documents = [{
    "id": 0,
    "url": "https://www.JekyllExample.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://www.JekyllExample.com/about",
    "title": "About JekyllExample.com",
    "body": " This is an about page that you can configure for your website. JekyllExample. com is a sample blog template from Chris Hammond To learn how to use JekyllExample visit the Jekyll Tutorials page on Christoc. com "
    }, {
    "id": 2,
    "url": "https://www.JekyllExample.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://www.JekyllExample.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                             Easy instructions for installing Jekyll                              :               This post is still a work in progress as of 2/1/2023:                                                                       01 Feb 2023                                                                                                                                                                                                                                                                                                                    Getting started with Jekyll                              :               So you want to get started with Jekyll?:                                                                       31 Jan 2023                                                                                                                                                                                                                                                                                                                          First Blog Post                              :               This is the first blog post using JekyllExample. com. :                                                                       10 Jul 2022                                                                                                                      All Stories:                                                                               Easy instructions for installing Jekyll              :       This post is still a work in progress as of 2/1/2023:                               01 Feb 2023                                                                                                              Getting started with Jekyll              :       So you want to get started with Jekyll?:                               31 Jan 2023                                                                                                              Non-featured Blog Post              :       This is the second blog post, the difference is that this one is not featured. :                               01 Nov 2022                                                                                                              First Blog Post              :       This is the first blog post using JekyllExample. com. :                               10 Jul 2022                                            "
    }, {
    "id": 4,
    "url": "https://www.JekyllExample.com/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://www.JekyllExample.com/redirects.json",
    "title": "",
    "body": "{“/About”:”https://www. jekyllexample. com/about”} "
    }, {
    "id": 6,
    "url": "https://www.JekyllExample.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "https://www.JekyllExample.com/easy-installation-instructions-for-jekyll",
    "title": "Easy instructions for installing Jekyll",
    "body": "2023/02/01 - This post is still a work in progress as of 2/1/2023The goal for this blog post is to provide easy instructions for installing Jekyll. If you follow these steps, you should be able to create a new Jekyll web site utilizing GitHub and GitHub Pages to host your repository and web site. We will walk you through the process of cloning the repository, making some changes to the site to configure it to be your own, and then ultimately getting your website published using your own custom domain name. A couple of assumptions to start:  You have a GitHub account created.  You have already purchased a custom domain name to use (you can bypass this and create a site using SITENAME. github. io) You have Git tools installed (if you’re using Windows, use Git For Windows) You have Visual Studio Code installed, or some other text editor that you’re comfortable with. Precursor: This page is a work in progress, if you find something missing or wrong, let me know! You can create an issue on the GitHub repo! Instructions:  Create a new Organization on GitHub     A free organization account will be sufficient. For our example organization, we will used JekyllExampleWeb (JekyllExample was already taken).    Creating a new organization for each custom domain name you are going to use makes it easier to setup and manage multiple sites. You theoretically could get by with one Organization or just multiple projects under your user account, but I find it easier to manage multiple sites this way.     Create a new repository based off the JekyllExample repository     While logged into GitHub, you should see a button that says “Use this template” next to the Code button in the JekyllExample repo, creating on the Use this template button will allow you to create a fork that is disconnected from the original repo and doesn’t bring over all the change history.    Be sure to check the “Include all branches” option when doing this, otherwise MAIN won’t come over and the workflow won’t work.     Rename the repository to match the domain name that you want to use for GitHub Pages     As soon as you fork the repository, you can rename it. You will want to rename it to match the domain name that you want to use for GitHub Pages, for example we use jekyllexample. com, so the repository is jekyllexample. github. io.     Clone the repository to your local machine for editing     You can clone the repository to your local machine using the following command, (assuming you have Git installed, start up Git Bash and then navigate to the folder where you want to clone the repository to)    1 git clone https://github. com/ORGANIZATION/SITENAME. github. io. git          Where SITENAME is the name of your repository that you modified in Step 3.     Open the repository in Visual Studio Code     You can open the repository in Visual Studio Code using the following command:    1 code SITENAME. github. io          Where SITENAME is the name of your repository that you modified in Step 3.     Change the _config. yml file     This file has a number of variables for options for your site, such as Title, Description, Author, etc. You will want to customize these to start to brand and name your site.    If you’re using Google Analytics you can configure the MEASUREMENT ID here as well.     Edit the CNAME file in the root of the repository to match your custom domain name     If you’re not using a custom domain name, you can delete this file.     Commit your changes to the GitHub repository and push them.   123 git add . git commit -m  Some updated comment about the commit here  git push       You may be prompted to configure your GitHub credentials at this point, here’s an approach on how to do that.     Configure the repository settings for GitHub Pages and Workflow to allow for deployment     In the GitHub Repository Settings, you will want to configure the following:         Under the GitHub Settings find the GitHub Pages section     Under Source choose “Deploy from a branch”     Under Branch choose “main” and “/(root)”           Configure your DNS for your domain to point to GitHub pages     You will need to do this before step 10 so that GitHub can verify and find your custom domain name configured properly.    You basically need to setup A records for your domain name that point to the following IP addresses:         185. 199. 108. 153     185. 199. 109. 153     185. 199. 110. 153     185. 199. 111. 153              I use CloudFlare for my domains, so the DNS entries are configured as follows:       You would replace jekyllexample. com with your domain in your DNS settings.     Configure your custom Domain Name     Under the GitHub Settings find the GitHub Pages section   Under Custom Domain, enter your custom domain name (ex: jekyllexample. com)    Navigate to the Actions tab in the GitHub interface     You should see your commit that you pushed in step 8, and you should see a workflow that is running (or has ran).    After that you should see a second action that is running (or has ran) something like “pages build and deployment”   If both of those actions have completed successfully, you should be able to navigate to your custom domain name and see your site.     Next steps! Edit the blog posts in the _posts folder, or delete them and create your own posts.      The easiest way to create a new post is to simply copy and paste one of the existing posts         Rename the file to match the date and title of your post     Edit the file to change the content/title and importantly be sure to update the published date to the dat you want the post to be.      Commit and push your changes to GitHub and you should see your new post on your site after the workflow completes.           "
    }, {
    "id": 8,
    "url": "https://www.JekyllExample.com/getting-started-with-jekyll",
    "title": "Getting started with Jekyll",
    "body": "2023/01/31 - So you want to get started with Jekyll? Well, you’ve come to the right place. This post will walk you through the steps to get you going if you’re new to Jekyll and want to get it up and running with a clean instance. We recommend if you’re brand new to Jekyll though you use our other instructions that utilize this site as a template for you to build your own site, complete with theme and sample content. Get Started: First, you’ll need to install Jekyll. You can do this by running the following command: 1gem install jekyllCreate a New Site: Now that you have Jekyll installed, you can create a new site. To do this, run the following command: 1jekyll new my-awesome-siteServe Your Site: Now that you have a site, you can serve it locally. To do this, run the following command: 12cd my-awesome-sitejekyll serveMake Some Changes: Now that you have a site, you can make some changes. To do this, open the _config. yml file in your favorite text editor and make some changes. Commit Your Changes: Now that you have made some changes, you can commit them. To do this, run the following command: 12git add . git commit -m  Made some changes Push Your Changes: Now that you have committed your changes, you can push them. To do this, run the following command: 1git push origin masterConclusion: And that’s it! You’ve now got a Jekyll site up and running. You can now make some changes and push them to GitHub Pages. "
    }, {
    "id": 9,
    "url": "https://www.JekyllExample.com/second-blog-post",
    "title": "Non-featured Blog Post",
    "body": "2022/11/01 - This is the second blog post, the difference is that this one is not featured.  This is a quote inside that first blog post  This is a list item This is a second list itemHeader 1Some text under header 1 Header 2: Some text under header 2 Header 3: Some text under header 3 This is a link "
    }, {
    "id": 10,
    "url": "https://www.JekyllExample.com/first-blog-post",
    "title": "First Blog Post",
    "body": "2022/07/10 - This is the first blog post using JekyllExample. com.  This is a quote inside that first blog post  This is a list item     This is a nested list item    This is a second list item     This is a nested list item         This is a nested-nested list item          Header 1Some text under header 1 Header 2: Some text under header 2 Header 3: Some text under header 3 This is a link "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});