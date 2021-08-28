import React from "react";

function WhyMeList() {
  const lists = [
    {
      header: "UI/UX Design",
      list: [
        "Design Sprints",
        "User Research",
        "Visual Design",
        "Mobile App Design",
        "Tracking & Learning",
        "Building Traction",
      ],
    },
    {
      header: "Web Development",
      list: [
        "ReactJS",
        "AngularJS",
        "ASP.NET MVC",
        "WordPress",
        "NodeJS",
        "GO",
      ],
    },
    {
      header: "Mobile App Development",
      list: [
        "iOS",
        "Android",
        "React Native",
        "Ionic & Apache Cordova",
        "NodeJS",
        "3D & VR",
      ],
    },
  ];
  return (
    <>
      {lists.map((e, i) => (
        <div key={i} className="list-wrapper">
          <h4>{e.header}</h4>
          <ul>
            {e.list.map((l, index) => (
              <li key={index}>{l}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default WhyMeList;
