import React, { Component } from "react";
import Carousel from "./Carousel";
import Header from "./Header";
class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container mt-2">
          <Carousel />
          <div className="p-3 m-3 text-center">
            <h1 className="w-70 mx-auto text-info">
            The Best Date Night Movies That Guys Will Enjoy
            </h1>
          </div>
        </div>

        {/* 3rd start */}
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-8 right-sec">
              <h3 className="text-success">
              Watching a movie is a great way to spend time with your significant other, but not all movies are created equally.
              </h3>
              <h6> Have fun and enjoy at CineMax</h6>
              <ul>
                <li className="text-blue">The Core</li>
                <li>Avengers</li>
                <li>Shaw and hawks</li>
                <li>Note Book</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <img
                src="https://th.bing.com/th/id/R.9d2ea0622d9489c72c45e536761721d5?rik=z2HM1EKWJ6terQ&riu=http%3a%2f%2fwww.familyeducation.com%2fsites%2fdefault%2ffiles%2fstyles%2fslideshow_image_802x451_%2fpublic%2fcollection-item%2fgrandparents_grandkids_movie_theater_H.jpg%3fitok%3dqENMjlIF&ehk=im%2b%2bXwlEZKsmNp9TU8w00VKRt40SacWk1D3%2fG%2bqJTYU%3d&risl=&pid=ImgRaw&r=0"
                className="group-pic"
              />
            </div>
          </div>
        </div>

        {/* 3rd end */}
        {/* 4th start */}

        <div className="container-fluid mt-3 ">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="https://www.liveforfilm.com/wp-content/uploads/2020/04/We-Summon-the-Darkness-movie-poster-550x733.jpg"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://th.bing.com/th/id/R.d535054823515dbbedc35a78a16afc55?rik=PenH5S9a%2biOsUQ&riu=http%3a%2f%2fwww.insidethemagic.net%2fwp-content%2fuploads%2f2017%2f10%2fDeathDay3.jpg&ehk=sgExQAwcDisvOUbbHFtNDQd5tWsmnCnQHtp%2bSBYi%2bZo%3d&risl=&pid=ImgRaw&r=0"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://th.bing.com/th/id/R.7f6fef4f180a4acc06ccbbe797ede17b?rik=uk8YxOOlXSStkw&riu=http%3a%2f%2fcutelovequotesforher.org%2fwp-content%2fuploads%2f2015%2f03%2flove-cartoon-movie-quotes.jpg&ehk=YRM9RbeUqbF9NCtqubrQ1kXHy78DOz2Ye6CNjtQe2qQ%3d&risl=&pid=ImgRaw&r=0"
              className="box-pic"
            />
          </div>
          <div className="col-sm-3">
            <img
              src="https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2017/02/teen-beach-movie-poster-021417.jpg"
              className="box-pic"
            />
          </div>
          </div>
        </div>
        {/* 4th end */}
        {/* 5th start */}
        <div className="container-fluid bg-danger text-center mt-3 footer">
        <div className="row">
          <div className="col-sm-4">
           Movie-club
          </div>
          <div className="col-sm-4"> @copyright 2021</div>
          <div className="col-sm-4">
            Bangalore
          </div>

        
       </div>
       </div>
      </div>
    );
  }
}
export default Home;
