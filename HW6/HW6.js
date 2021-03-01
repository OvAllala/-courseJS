//class PostScreen extends Component {
  componentDidMount(){
      
      axios.get('http://localhost:8080/zoo/api/animals')
      .then(res => this.setState({animals: res.data.filter(animal => !animal.owner)}))
      console.log(animals) // logs empty array
      console.log('mounted') 
       const animals= []; }
}

console.log(animals)