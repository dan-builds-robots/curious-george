// variable to save the index of the last picture turned into curious george to 
// make sure that no two consecutive pictures are the same
let lastRandImg = -1;

// database of curious george pictures
let georgeImgs = [
    
    "https://yt3.ggpht.com/ytc/AKedOLSV68W0ACvPvMDZNj9SY9pZXyyo5hO_5cesMO5-=s900-c-k-c0x00ffffff-no-rj",
    "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/CuriousGeorge_180392000-CUG._V392939162_SX1080_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPe0_BwBJ_eUYtgPERjz1MN6D8VlAopC7NR2oKUjaeh7nutk30sViz20dm4p2BUXrPNI&usqp=CAU",
    "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/review_gallery_carousel_slide_thumbnail/public/screenshots/csm-movie/curious-george-2006-ss3.jpg?itok=cCtLTUFT",
    "https://images.saymedia-content.com/.image/t_share/MTc0NTk0ODAzNTk2NjAxMzM0/why-your-kids-shouldnt-watch-curious-george.jpg",
    "https://i.ytimg.com/vi/jmzRlOyHNIM/maxresdefault.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GB/nbc-225224-Full-Image_GalleryBackground-en-GB-1502752053778._SX1080_.jpg",
    "https://simkl.in/episodes/35/3551649441a2f174_w.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9T3AwYrqTVLtHn2g0bh1QEn0eZAyyHq80hvKUl7YV9izaY7LB8-yZK-Ewr0SSLQ4kmg&usqp=CAU",
    "https://i.ytimg.com/vi/SU2OweUzZ7k/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bl5iNeKkagU/maxresdefault.jpg",
    "https://kpbs.media.clients.ellingtoncms.com/img/photos/2015/10/29/Curious_George_Halloween_Boo_Fest_2_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
    "https://images.moviesanywhere.com/7b16dc8e64a8bccb82ed71f85158f40b/e4a31c7c-e37c-46bc-8702-8a282e965c22.jpg?w=2560&r=16x9",
    "https://s3.drafthouse.com/images/made/curious_george_758_427_81_s.jpg",
    "https://kpbs.media.clients.ellingtoncms.com/img/photos/2015/10/29/Curious_George_Halloween_Boo_Fest_2_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
    "https://images.moviesanywhere.com/248544a7fcc5fa96d126a2389a075155/9a66c108-41ed-4d14-b70e-d0ed8741f1ae.jpg?w=2560&r=16x9",
    "https://play-lh.googleusercontent.com/proxy/xuHq8TBDfHLBNP_hk2BKcfGJtFI_G7s8aWyf_PSjBHxTLs6_oHU9yfyA-vkWofJ0OmZmWnWV59pfPUtuWIdX6rjVCWjiG9UT8V1ecuzWeMevhwIA64R8tdE8=w720-h405-rw",
    "https://www.thetoyinsider.com/wp-content/uploads/2020/12/Peacock_CuriousGeorge-1024x576.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9T3AwYrqTVLtHn2g0bh1QEn0eZAyyHq80hvKUl7YV9izaY7LB8-yZK-Ewr0SSLQ4kmg&usqp=CAU",
    "https://i.ytimg.com/vi/SU2OweUzZ7k/maxresdefault.jpg",
    "https://decider.com/wp-content/uploads/2016/11/curious-george-swings-into-spring-1156e28086c397e28086600.jpg?quality=80&strip=all&w=646&h=335&crop=1",
    "https://img-fs-0.wnlimg.com/p/8bb/ef8/1c8/ca39b14f63a842e61e19ba5/full_size.jpg",
    "https://i.ytimg.com/vi/LHLFpQAr0bg/maxresdefault.jpg",
    "https://i.ytimg.com/vi/GLRu4ETwKVQ/maxresdefault.jpg",
    "https://i.ytimg.com/vi/h4pGDNrBiV4/maxresdefault.jpg",
    "https://i.dailymail.co.uk/i/pix/2015/09/01/15/2BE0A68D00000578-0-image-m-8_1441119276646.jpg",
    "https://d2lv662meabn0u.cloudfront.net/cartoonito/dynamic/video/00000001/1079/7aff89a1985bffe04f4383779545086fed0d4e04_1593682545.jpg",
    "https://www.looper.com/img/gallery/this-is-who-narrates-curious-george/l-intro-1622604401.jpg",
    "https://www.guyhepner.com/wp-content/uploads/2016/05/the-curious-copy.jpg",
    "https://i.ytimg.com/vi/LK-aIW23oUU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/u2mVN4ug6Qg/maxresdefault.jpg",
    "https://i.ytimg.com/vi/HlhMayx8f7c/maxresdefault.jpg",
    "https://i.ytimg.com/vi/NsdqHcw0rBY/maxresdefault.jpg",
    "https://cms-tc.pbskids.org/parents/crafts-experiments/_pbsKidsForParentsSixteenNineRatioSmall/Curious-George-Make-Pancakes-With-Science-On-the-Side-Content.jpg?mtime=20190405025356",
    "https://www.witf.io/wp-content/uploads/2021/02/CuriousGeorge_XAD02_T14169-1.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa9T3AwYrqTVLtHn2g0bh1QEn0eZAyyHq80hvKUl7YV9izaY7LB8-yZK-Ewr0SSLQ4kmg&usqp=CAU",
    "https://i.ytimg.com/vi/Kqe_cYj7MZE/maxresdefault.jpg",

    //funny monkeys below lol
    "https://i.ytimg.com/vi/DWDqQzpAWHA/maxresdefault.jpg",
    "https://t3.ftcdn.net/jpg/01/95/84/98/360_F_195849805_Fb1RlG8zC65tEpp0727cwfZCYg2fKIsP.jpg","https://wifeafterdeath.files.wordpress.com/2013/08/01-monkey-giving-the-finger.jpg",
    "https://i.pinimg.com/originals/81/33/35/81333559d485cc8e6df6686ec9fe45f6.jpg",
    "https://m.media-amazon.com/images/I/71qwhdcetrL._SS500_.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2015/07/gorilla-middle-finger-bob-pitchford-bristol-zoo-1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51ZErZaNZqL._RI_.jpg",


    //"https://www.teahub.io/photos/full/161-1612679_z938z24-monkey-funny-wallpaper-funny-monkey.jpg",
    // "https://t3.ftcdn.net/jpg/03/23/35/18/360_F_323351871_R7i4Zy7xt0jKHfg4CeZ4nwkw2Nk5UNLm.jpg",
    // "https://lh3.googleusercontent.com/proxy/18QGJ5qKssttf5CFkQMr10MEt1ywA_bUlEDFzPqH7z8GDJqkkesu8R4mGY4F7-V37Miqg_Cz3rR1zMt-B60V7gd7Cqxcf87u7fKqf5OJgLnB7yjd88XhvclJm7CJPXWXWGPPM9JnJoH2RS8V1athmUNO49U5ZDXS9X3c",
    
];

let monkeyPicsOn = true;

let nonmonkeyPics = [];
let nonmonkeyPicsSrc = [];

let nonMonkeyBgPics = [];

// change the pics to curious george after checking that extension is on
chrome.storage.sync.get({extensionIsOn: true}, function(status) {
    if(status.extensionIsOn) {
        changePics();
    }
})

// check for pics that don't have george every 500ms
var intervalId = setInterval(function() {

    chrome.storage.sync.get({extensionIsOn: true}, function(status) {
        if(status.extensionIsOn) {
            changePics();
        }
    })

}, 500);


// event listener to see if the extension has been toggled on or off
chrome.storage.onChanged.addListener(function(changes) {

    // if (changes['extensionIsOn'] !== undefined) {
    
    if ('extensionIsOn' in changes) {

        chrome.storage.sync.get({extensionIsOn: true}, function(status){

            if (status.extensionIsOn) {
                changePics()
            } else {
                // location.reload()
                changePicsBack()
            }

        })

    }

})

function changePicsBack() {
    
    const imgs = document.getElementsByTagName("img")

    for (let i = 0; i < imgs.length; i++) {
        

        if(isAGeorgePic(imgs[i])) {
            imgs[i].src = nonmonkeyPics[i];
            
            // imgs[i].src = "https://yt3.ggpht.com/ytc/AKedOLTQB0GaDwNa3WSI2beZo6wxrjB10fM8Q2Ei8HZ8WA=s900-c-k-c0x00ffffff-no-rj";
        }
    }

    for (let i = 0; i < imgs.length; i++) {

        if(isAGeorgePic(imgs[i])) {
            imgs[i].srcset = nonmonkeyPicsSrc[i];
            // imgs[i].srcset = "https://yt3.ggpht.com/ytc/AKedOLTQB0GaDwNa3WSI2beZo6wxrjB10fM8Q2Ei8HZ8WA=s900-c-k-c0x00ffffff-no-rj";
        }
    }

    // const divs = document.getElementsByTagName("div")
    // for (let i = 0; i < divs.length; i++) {

    //     //check if background image exists and is not already curious george before changing
    //     if (divs[i].style.backgroundImage != '') {

    //         nonmonkeyBgPics.push(divs[i].style.backgroundImage)

    //         divs[i].style.backgroundImage = nonmonkeyBgPics[i];
    //     }
    // }
}

// this function changes all the pictures on the website to curious george
function changePics() {

    // get array of all images on the website
    const imgs = document.getElementsByTagName("img")

    for (let i = 0; i < imgs.length; i++) {
        let randImg = Math.floor(Math.random() * georgeImgs.length)

        // make sure that no 2 consecutive pictures are the same picture of curious george
        if (randImg == lastRandImg) {
            randImg = Math.floor(Math.random() * georgeImgs.length)
        }

        // if a picture is not a curious george picture, turn it into a picture of curious george
        if(!isAGeorgePic(imgs[i])) {
            
            /* store pic to array of original pics to revert back to normal 
            when extension is toggled off
            */
            
            // nonmonkeyPics.push(imgs[i].src)
            nonmonkeyPics.splice(i, 0, imgs[i].src)
            nonmonkeyPicsSrc.splice(i, 0, imgs[i].srcset)

            imgs[i].src = georgeImgs[randImg];
            imgs[i].srcset = georgeImgs[randImg];
        }

        lastRandImg = randImg;
    }
    
    //changing background pics on website to curious george
    const divs = document.getElementsByTagName("div")
    for (let i = 0; i < divs.length; i++) {
        let randImg = Math.floor(Math.random() * georgeImgs.length)
        if (randImg == lastRandImg) {
            randImg = Math.floor(Math.random() * georgeImgs.length)
        }

        //check if background image exists and is not already curious george before changing
        if (divs[i].style.backgroundImage != '' && !isAGeorgeBgPic(divs[i])) {

            
            /* store background pics to array of original pics to revert back to normal 
            when extension is toggled off
            */
            // nonmonkeyBgPics.push(divs[i].style.backgroundImage)

            divs[i].style.backgroundImage = "url(" + georgeImgs[randImg] + ")";
        }
        lastRandImg = randImg;
    }
}

// check if the picture is already a curious george pic
function isAGeorgePic(pic) {
    for (let i = 0; i < georgeImgs.length; i++) {
        if (pic.src == georgeImgs[i]) {
            return true;
        }

        if (pic.srcset == georgeImgs[i]) {
            return true;
        }

        // if (pic.src.includes(georgeImgs[i])) {

        //     return true;
        // }

    }
    return false;
}

// check if the picture is already a curious george background pic
function isAGeorgeBgPic(div) {
    for (let i = 0; i < georgeImgs.length; i++) {
        // if (div.style.backgroundImage == "url(" + georgeImgs[i] + ")") {
        if (div.style.backgroundImage.includes(georgeImgs[i])) {

            return true;
        }
    }
    return false;
}