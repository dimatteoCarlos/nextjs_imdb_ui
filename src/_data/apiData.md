@font-face {
  font-family: 'NetflixSans'; /* Name your font family */
  src: url('public\NefflixFont\NetflixSans-Bold.otf'); /* Locate the .ttf file within your directory*/
  
}
body {
  font-family: 'CustomFont', sans-serif; /* Use the font family */
}

https://rapidapi.com/apidojo/api/online-movie-database/playground/apiendpoint_9c0df6c1-606a-4c52-bd56-3ce1684eca42

top rated movies:

const axios = require('axios');

const options = {
method: 'GET',
url: 'https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies',
headers: {
'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

# -----results----------------

[{"id":"/title/tt0111161/","chartRating":9.2},{"id":"/title/tt0068646/","chartRating":9.2},...]

# ---

TOP TRENDING
const axios = require('axios');

const options = {
method: 'GET',
url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-top-trending-video-trailers',
params: {first: '20'},
headers: {
'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

# -----results----------------

[{"id":"/title/tt0111161/","chartRating":9.2},{"id":"/title/tt0068646/","chartRating":9.2},{"id":"/title/tt0468569/",]

# ---

GET V2/search

const axios = require('axios');

const options = {
method: 'GET',
url: 'https://online-movie-database.p.rapidapi.com/v2/search',
params: {
searchTerm: 'tom cruise',
type: 'NAME',
first: '20',
country: 'US',
language: 'en-US'
},
headers: {
'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

# results in searchResults.json

---

GET AUTO-COMPLETE

const axios = require('axios');

const options = {
method: 'GET',
url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
params: {q: 'game of thr'},
headers: {
'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

#-----------------
GET title/V2/get-genres

const axios = require('axios');

const options = {
method: 'GET',
url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-genres',
params: {
tconst: 'tt0120338',
country: 'US',
language: 'en-US'
},
headers: {
'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
}
};

try {
const response = await axios.request(options);
console.log(response.data);
} catch (error) {
console.error(error);
}

********************

GET title/v2/get-t9op-trending-video-trailers

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-top-trending-video-trailers',
  params: {first: '20'},
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

******************
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-extend-details',
  params: {
    tconst: 'tt0120338',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

*****************
POPULAR


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular',
  params: {
    first: '20',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

********************
GET OVERVIEW BY id
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/title/v2/get-overview',
  params: {
    tconst: 'tt0120338',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
********************
GET-BY-CATEGORY NEWS

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/news/v2/get-by-category',
  params: {
    category: 'MOVIE',
    first: '20',
    country: 'US',
    language: 'en-US'
  },
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
********************
GET AUTO-COMPLETE
const fetch = require('node-fetch');

const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


*****************
POPULAR

const fetch = require('node-fetch');

const url = 'https://online-movie-database.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '4bdb736a00msh59f714906610b01p1fff71jsnbe4c8cee93df',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}