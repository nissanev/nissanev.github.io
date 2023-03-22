
var documents = [{
    "id": 0,
    "url": "https://www.nissanev.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://www.nissanev.com/about",
    "title": "About NissanEV.com",
    "body": " Want this domain name? "
    }, {
    "id": 2,
    "url": "https://www.nissanev.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://www.nissanev.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                             NissanEV Domain Name for sale                              :               🔌⚡️Attention all electric vehicle enthusiasts, Nissan fans, and savvy entrepreneurs! Don’t miss this exceptional opportunity to own the high-quality, highly memorable domain name NissanEV. com, now. . . :                                                                       21 Mar 2023                                                                                                                                                                                                                                                                                                                    Domain name for sale                              :               This domain name is for sale!:                                                                       20 Mar 2023                                                                                                                      All Stories:                                                                               NissanEV Domain Name for sale              :       🔌⚡️Attention all electric vehicle enthusiasts, Nissan fans, and savvy entrepreneurs! Don’t miss this exceptional opportunity to own the high-quality, highly memorable domain name NissanEV. com, now up for sale! ⚡️🔌:                               21 Mar 2023                                                                                                              Domain name for sale              :       This domain name is for sale!:                               20 Mar 2023                                            "
    }, {
    "id": 4,
    "url": "https://www.nissanev.com/About",
    "title": "",
    "body": ""
    }, {
    "id": 5,
    "url": "https://www.nissanev.com/redirects.json",
    "title": "",
    "body": "{“/About”:”https://www. nissanev. com/about”} "
    }, {
    "id": 6,
    "url": "https://www.nissanev.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "https://www.nissanev.com/nissanev-for-sale",
    "title": "NissanEV Domain Name for sale",
    "body": "2023/03/21 - 🔌⚡️Attention all electric vehicle enthusiasts, Nissan fans, and savvy entrepreneurs! Don’t miss this exceptional opportunity to own the high-quality, highly memorable domain name NissanEV. com, now up for sale! ⚡️🔌 This domain has endless potential for growth and success in the rapidly expanding electric vehicle market, specifically for the popular Nissan electric vehicle lineup. What makes NissanEV. com so valuable? 🎯 Brand Association: The domain name clearly communicates its association with Nissan’s electric vehicle line, making it an ideal choice for businesses and enthusiasts alike. 💡 Recognition: As the electric vehicle market continues to surge, a domain name like NissanEV. com will only grow in recognition and value. 🔝 SEO Potential: With the right strategy, this domain name can rank high in search engine results, driving organic traffic and increasing your online presence. 🌐 Global Reach: The . com extension is universally recognized, ensuring your website will attract visitors from around the world. Possible uses for NissanEV. com: 🚗 Electric vehicle dealerships🔧 EV service and repair centers📰 Industry news and updates📚 Educational resources and reviews🛍️ Online store for EV accessories👥 Community forums for Nissan EV owners📈 EV market analysis and consulting Don’t let this golden opportunity slip away! Grab the NissanEV. com domain name now and accelerate your online presence in the electric vehicle world. 💰Asking Price: $XXXX (negotiable)💰 Interested buyers, please contact us at [email address] or [phone number] to discuss further details and secure this valuable domain name today! Act fast – once it’s gone, it’s gone! ⚡️🚀 "
    }, {
    "id": 8,
    "url": "https://www.nissanev.com/domain-name-for-sale",
    "title": "Domain name for sale",
    "body": "2023/03/20 - This domain name is for sale! If you are an individual or business that is passionate about electric vehicles and specifically, Nissan Electric Vehicles, then owning the domain name NissanEV. com could be a game-changer for you. First and foremost, owning a domain name that clearly represents your niche can make it much easier for potential customers or readers to find you online. When people search for information about Nissan electric vehicles, they are likely to use search terms like “Nissan EV” or “Nissan electric car”. If you own the domain name NissanEV. com, it’s more likely that your website will appear at the top of search engine results pages for those keywords, helping you to attract more traffic to your site. In addition to helping with search engine optimization, owning NissanEV. com can also help you establish your brand and build credibility. By owning a domain name that is short, memorable, and directly related to your niche, you can create a strong brand identity and make it easier for people to remember and recognize your website. If you are interested in selling Nissan electric vehicles, owning NissanEV. com can be particularly valuable. When people are in the market for a new car, they are likely to search for information online before making a purchase. If you own the domain name NissanEV. com and use it to showcase your inventory and provide detailed information about the benefits of driving a Nissan electric vehicle, you are more likely to attract potential customers and make sales. Of course, owning a domain name like NissanEV. com is not a guarantee of success. You still need to put in the work to create valuable content, build a strong brand, and attract traffic to your site. However, owning a domain name that is directly related to your niche can certainly make it easier for you to achieve your goals. Overall, if you are passionate about Nissan electric vehicles and want to build a business or brand around this niche, owning NissanEV. com could be a smart investment. By using this domain name to create a strong online presence and establish yourself as an authority in the field, you can attract more traffic, build credibility, and ultimately achieve your goals. "
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