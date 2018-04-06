import React, { Component } from 'react';
import Slider from 'react-slick'
import './MobileStudentListSlider.css';
import './MobileStudentList.css';

class MobileStudentList extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      
    var students = [
     {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }, {
         name: "Monika",
         title: "Club President",
         mugshot: "Assets/monika.png"
     }
    ]
      
    return (
        <div className="MobileStudentList">
        <h3 className="MobileStudentList_top_title">Network with</h3>
        <h2 className="MobileStudentList_bottom_title">Innovators</h2>
        
        
            <Slider {...settings} className="MobileStudentList_slider">
                {students.map(function(student, index){
                    if ((index % 4) === 0) {
                        return <div className="MobileStudentList_slider_wrapper">
                            <div className="MobileStudentList_slider_first_shapes">
                                <img className="MobileStudentList_slider_first_triangle1" src="Assets/triangle7.svg"></img>
                                <img className="MobileStudentList_slider_first_triangle2" src="Assets/triangle1.svg"></img>
                                <img className="MobileStudentList_slider_first_circle1" src="Assets/circle2.svg"></img>
                                <img className="MobileStudentList_slider_first_circle2" src="Assets/circle.svg"></img>
                            </div>
                            <div className="MobileStudentList_slider_first_content">
                                <div className="MobileStudentList_slider_mugshot_cropper">
                                    <img alt={student.name} src={student.mugshot} className="MobileStudentList_slider_mugshot"></img>
                                </div>
                                <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                                <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                            </div>
                        </div>;
                    } else if ((index % 4) === 1) {
                        return <div className="MobileStudentList_slider_wrapper">
                            <div className="MobileStudentList_slider_second_shapes">
                                <img className="MobileStudentList_slider_second_circle1" src="Assets/circle2.svg"></img>
                                <img className="MobileStudentList_slider_second_circle2" src="Assets/circle.svg"></img>
                                <img className="MobileStudentList_slider_second_triangle1" src="Assets/triangle7.svg"></img>
                                <img className="MobileStudentList_slider_second_triangle2" src="Assets/triangle1.svg"></img>
                            </div>
                            <div className="MobileStudentList_slider_second_content">
                                <div className="MobileStudentList_slider_mugshot_cropper">
                                    <img alt={student.name} src={student.mugshot} className="MobileStudentList_slider_mugshot"></img>
                                </div>
                                <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                                <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                            </div>
                        </div>;
                    } else if ((index % 4) === 2) {
                        return <div className="MobileStudentList_slider_wrapper">
                            <div className="MobileStudentList_slider_third_shapes">
                                <img className="MobileStudentList_slider_third_circle1" src="Assets/circle2.svg"></img>
                                <img className="MobileStudentList_slider_third_circle2" src="Assets/circle.svg"></img>
                                <img className="MobileStudentList_slider_third_triangle1" src="Assets/triangle7.svg"></img>
                                <img className="MobileStudentList_slider_third_triangle2" src="Assets/triangle1.svg"></img>
                            </div>
                            <div className="MobileStudentList_slider_third_content">
                                <div className="MobileStudentList_slider_mugshot_cropper">
                                    <img alt={student.name} src={student.mugshot} className="MobileStudentList_slider_mugshot"></img>
                                </div>
                                <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                                <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                            </div>
                        </div>;
                    } else if ((index % 4) === 3)  {
                        return <div className="MobileStudentList_slider_wrapper">
                            <div className="MobileStudentList_slider_fourth_shapes">
                                <img className="MobileStudentList_slider_fourth_circle1" src="Assets/circle2.svg"></img>
                                <img className="MobileStudentList_slider_fourth_circle2" src="Assets/circle.svg"></img>
                                <img className="MobileStudentList_slider_fourth_triangle1" src="Assets/triangle7.svg"></img>
                                <img className="MobileStudentList_slider_fourth_triangle2" src="Assets/triangle1.svg"></img>
                            </div>
                            <div className="MobileStudentList_slider_fourth_content">
                                <div className="MobileStudentList_slider_mugshot_cropper">
                                    <img alt={student.name} src={student.mugshot} className="MobileStudentList_slider_mugshot"></img>
                                </div>
                                <h3 className="MobileStudentList_slider_name">{student.name}</h3>
                                <h3 className="MobileStudentList_slider_title">{student.title}</h3>
                            </div>
                        </div>;
                    }  
                })}
            </Slider>
        </div>
    );
  }
}

export default MobileStudentList;