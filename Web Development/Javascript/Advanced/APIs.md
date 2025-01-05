### Testing API Requests
- Hoppscotch
- Postman

### HTTP Verbs
- Get
- Post
- Delete

### Status Codes
- 200 : All OK
- 404 : Not Found
- 400 : Bad Request
- 500 : Internal Server Error

### Add Information in URLs

- Query Strings
- https://www.google.com/search?q=harry+potter
- query string part is `q=harry+potter` . Here `q` is the key and `harry+potter` is the value

# Axios

- Using it we can get the data in JSON format. (In case of fetch we need to parse it to get the data)
```
let url = "enter a valid url of api";

async function getFacts() {
	try {
		let res = await axios.get(url);
		console.log(res.data.fact);
	} catch (e) {
		console.log("error :", e);
	}
}
```

# To make a Dog Pic Generator

```
# HTML

<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

    <h1> Fresh your Mood with cute Puppy Pics </h1>
    <img src="" alt="" id="result">
    <button>Show</button>
```

```
# JAVASCRIPT

let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=> {
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
        console.log("error :", e);
        return "/";
    }
}
```