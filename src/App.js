import ProfileCard from "./ProfileCard";
import AlexImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";
import "bulma/css/bulma.css"


console.log(SiriImg);

const App = ()=>{
    return (
        <div>
        <section className="hero is-success">
            <div className="hero-body">
            <p className="title" style={{color:"white"}}>
            Personal Digital Assistants
            </p>
                
            </div>
        </section>
   
                
            <div className="container">
              <section className="section">   
              <div className="columns">
                <div className="column is-4">
                  <ProfileCard 
                  title="Alexa" 
                  handle="@alexa99" 
                  image={AlexImg}
                  description="Alexa was created by Amazon and helps you buy things"
                  />
                </div>
                <div className="column is-4">
                  <ProfileCard 
                  title="Cortana" 
                  handle="@cortana32" 
                  image={CortanaImg}
                  description="Cortana was made by Microsoft. Who knows what it does"
                  />
                </div>
                <div className="column is-4">
                  <ProfileCard 
                  title="Siri" 
                  handle="@siri22" 
                  image={SiriImg}
                  description="Siri was made by Apple and is being phased out"
                  />
                </div>
              </div>
              </section>   
            
            </div>
        </div>
    )
}

export default App;