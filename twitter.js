var rate = 100

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// defines spam-posts
function is_spam(postText){
    var isSpam = false

    isSpam = postText.includes('bilibilicomics')

    return isSpam
}

function clearSpam() {
    const postsRoot = document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > div > section > div > div")
    
    // foreach post check if it is spam and clear spam content
    for (let index = 0; index < postsRoot.childElementCount; index++) {
        const post = postsRoot.childNodes[index];
        const postText = post.innerText

        if (is_spam(postText)) {
            post.childNodes.forEach(element => {
                post.removeChild(element)
            });
        }
    }
}

async function clearSpam_Continuous() {
    while (true) {
        clearSpam()
        await sleep(rate)
    }
}

clearSpam_Continuous()


