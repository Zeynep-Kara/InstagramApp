import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./actions";

const [timeline, setTimeline] = useState([]);
  
  var a;
  var b;
  var line; 
  const Inventory = [];

  class Data {
    constructor(id, username, location, description) {
      this.id = id;
      this.username = username;
      this.location = location;
      this.likes = []
      this.description = description;
      this.images = [];
    }
  }  


export const MainHandler = (async() => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var raw = JSON.stringify({
      "username": username,
      "password": password
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: null,
      redirect: 'follow'
    };    

    await fetch("https://stormy-forest-35855.herokuapp.com/timeline", requestOptions)
      .then(response => response.text())
      .then(result => {
        a=result;
        console.log(result);
      })
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch(error =>{ 
        dispatch(fetchDataError(error))
      });    
    
    b= JSON.parse(a);  
    line = b.data.timeline;
  
  for (var i = 0; i < (line.length); i++) {
    var newPost = new Data(line[i].id, line[i].username, line[i].location, line[i].description);
    for (var j = 0; j < line[i].images.length; j++){
      newPost.images.push(line[i].images[j].url);
      newPost.likes = line[i].likes;
    }
    Inventory.push(newPost);
    }
    setTimeline(Inventory);

    console.log(timeline);
  }); 
