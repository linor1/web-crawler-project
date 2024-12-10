// urlStorage.js

const urlQueue = new Set();

//add the URL if it is not already in the queue
function addUrl(url){
	if (!urlQueue.has(url)){
		urlQueue.add(url);
		console.log(`Added URL to queue: ${url}`);
	}else{
		console.log(`URL already exists: ${url}`);
	}
}
 
//get the next url from the queue and remove it
function getAndRemoveNextUrl(){
	const iterator = urlQueue.values();
	const nextUrl = iterator.next().value;
	if (nextUrl) {
		urlQueue.delete(nextUrl);
		return nextUrl;
	}
	return null;
}

//return all the values
function getQueue(){
	return Array.from(urlQueue);
}