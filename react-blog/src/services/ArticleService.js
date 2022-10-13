
export async function getAllArticles() {

}

/**
 * Fetches and returns a list of the (count) most recent articles
 * 
 * @param {number} count Number of articles to get
 * @return {Promise} array of articles
 */
export async function getRecentArticles(count = 5) {

    let response = new Promise((res, rej) => {
        fetch(`/api/recent/${count}`)
        .then(res => res.json())
        .catch(err => {
            console.log('======failure=======');
            console.log(err);
            rej('Failure to communicate with proxy server...');
        })
        .then(json => { 
            res(json);
         })
    
    });
    
    return response

}