import React, {Component} from "react";
class Carousel extends Component{

    render(){
        return(
<div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/R.0d44d4398f09600fabade5f41494b373?rik=wSquHfcgy2cB8w&riu=http%3a%2f%2fwww.oheys.org%2fwp-content%2fuploads%2f2015%2f01%2fMovieCl.jpg&ehk=1Ri1Nctuai5T9d81AcewpliUY%2brkpTyIAWHDgUXaxPU%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100 movie-pic" alt = ""/ >
    </div> 
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.fb78bd86a5da8f8b30e273aeec9f3f6b?rik=Aev441DzNSufRg&riu=http%3a%2f%2fsarahscoop.com%2fwp-content%2fuploads%2f2018%2f04%2fBookClubMovieScreening.jpg&ehk=Q6%2fIAsoL7a3iSgsRVZAeZDz%2fkWRnvx63rr1%2bUu01egc%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100  movie-pic"alt = ""/>
    </div> 
    <div class="carousel-item">
      <img src="https://image.tmdb.org/t/p/w1280/5FoAWx0hjAEhYePXYmzrwk8rsnI.jpg" class="d-block w-100 movie-pic" alt = ""/>
    </div> 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        )
    }
}

export default Carousel;