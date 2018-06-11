function getJSON(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/tweets.json', true);
    xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
            }
    };
    xobj.send(null);  
}

function init() {
        this.getJSON(function(response) {

        let tweets = JSON.parse(response);
        
        //Get random integer between 0 and amount of tweets available.
        let random_integer = Math.floor(Math.random() * (tweets.length - 0) + 0);
        let tweet = tweets[random_integer].value;
        //Turn tweet into array to work with.
        let tweet_stripped = tweet.split(" ");

        //Certain types of tweets dont function as of yet, page will reload until it finds a working tweet.
        if(tweet_stripped[0].startsWith("\ndril\n@") || tweet_stripped[0].startsWith("\n\n")){
            location.reload();
        } else {
            let tweet_final = "";

            //Loop through tweet, generate finalized tweet string.
            for(let i = 0; i < tweet_stripped.length - 4; i++){
                //Remove "Dril" from the start of every tweet, add nbsp.
                if(i == 0) {
                    tweet_final += tweet_stripped[i].substr(5) + " ";
                }
                //Remove month from last word in tweet.
                else if(i == tweet_stripped.length - 5){
                    tweet_final += tweet_stripped[i].substring(0, tweet_stripped[i].length - 3);
                }
                //Else just append to tweet_final and add nbsp.
                else {
                    tweet_final += tweet_stripped[i].replace(/(\r\n\t|\n|\r\t)/gm,"") + " ";
                }
            }
            //Create month
            const month = tweet_stripped[tweet_stripped.length-5];
            const month_stripped = month.replace(/(\r\n\t|\n|\r\t)/gm,"");
            const month_final = month.slice(-3);
            //Create day
            const day = tweet_stripped[tweet_stripped.length-4];
            const day_final = day.replace(",","");
            //Create year 
            const year_final = tweet_stripped[tweet_stripped.length-3];
            //Create span with date info
            const date_final = "<span class='date'>- " + month_final + " " + day_final + " " + year_final + "</span>";
            //Append tweet and date to target div
            let tweetTarget = document.getElementById("tweet_target");
            tweetTarget.innerHTML = tweet_final + " " + date_final;
        }

    });
}

init();