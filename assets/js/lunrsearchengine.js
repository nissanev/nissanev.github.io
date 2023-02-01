
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
    "body": "      Featured:                                                                                                                                                                                                             Getting started with Jekyll                              :               So you want to get started with Jekyll?:                                                                       31 Jan 2023                                                                                                                                                                                                                                                                                                                          First Blog Post                              :               This is the first blog post using JekyllExample. com. :                                                                       10 Jul 2022                                                                                                                      All Stories:                                                                               Getting started with Jekyll              :       So you want to get started with Jekyll?:                               31 Jan 2023                                                                                                              Non-featured Blog Post              :       This is the second blog post, the difference is that this one is not featured. :                               01 Nov 2022                                                                                                              First Blog Post              :       This is the first blog post using JekyllExample. com. :                               10 Jul 2022                                            "
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
    "url": "https://www.JekyllExample.com/getting-started-with-jekyll",
    "title": "Getting started with Jekyll",
    "body": "2023/01/31 - So you want to get started with Jekyll? Well, you’ve come to the right place. This post will walk you through the steps to get you going if you’re new to Jekyll and want to get it up and running with a clean instance. We recommend if you’re brand new to Jekyll though you use our other instructions that utilize this site as a template for you to build your own site, complete with theme and sample content. Get Started: First, you’ll need to install Jekyll. You can do this by running the following command: 1gem install jekyllCreate a New Site: Now that you have Jekyll installed, you can create a new site. To do this, run the following command: 1jekyll new my-awesome-siteServe Your Site: Now that you have a site, you can serve it locally. To do this, run the following command: 12cd my-awesome-sitejekyll serveMake Some Changes: Now that you have a site, you can make some changes. To do this, open the _config. yml file in your favorite text editor and make some changes. Commit Your Changes: Now that you have made some changes, you can commit them. To do this, run the following command: 12git add . git commit -m  Made some changes Push Your Changes: Now that you have committed your changes, you can push them. To do this, run the following command: 1git push origin masterConclusion: And that’s it! You’ve now got a Jekyll site up and running. You can now make some changes and push them to GitHub Pages. "
    }, {
    "id": 8,
    "url": "https://www.JekyllExample.com/second-blog-post",
    "title": "Non-featured Blog Post",
    "body": "2022/11/01 - This is the second blog post, the difference is that this one is not featured.  This is a quote inside that first blog post  This is a list item This is a second list itemHeader 1Some text under header 1 Header 2: Some text under header 2 Header 3: Some text under header 3 This is a link "
    }, {
    "id": 9,
    "url": "https://www.JekyllExample.com/first-blog-post",
    "title": "First Blog Post",
    "body": "2022/07/10 - This is the first blog post using JekyllExample. com.  This is a quote inside that first blog post  This is a list item This is a second list itemHeader 1Some text under header 1 Header 2: Some text under header 2 Header 3: Some text under header 3 This is a link "
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