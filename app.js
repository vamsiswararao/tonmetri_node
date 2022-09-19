const express = require("express");
const app = express();

data = {
  title: "Akhil Chakravarthy",
  profileImg:
    "https://res.cloudinary.com/dmswymrzt/image/upload/v1663482642/tonmetri/profile_h92tcv.png",
  about: [
    {
      id: 1,
      text:
        "Lorem Ipsum is simply dummy text of the parinting and typesettig industry.Lorem Ipsum has been the industry's standard dummyte ever since the 1500s,when an unknown printer took a galley of ty and scrambled it to make a type specimen book.It has survived n only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      text:
        "It was popularised in the 1960s with the release of Letraset sheets containing.",
    },
    {
      id: 3,
      text:
        "LoremIpsum passages,and more recently with desk top publishied software like Aldus Page Maker including versions of Lorem Ipsu.",
    },
  ],
  service: {
    text:
      "Lorem Ipsum is simply dummy text of the parinting and typesettig industry.Lorem Ipsum has been the industry's standard dummyte ever since the1500s.",
    service_image: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Websites Development",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Digital Marketing",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Application Development",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Websites Development",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Digital Marketing",
      },
      {
        id: 6,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663586423/tonmetri/24icon_skmrdh.png",
        title: "Application Development",
      },
    ],
  },
  portfolio: {
    text:
      "Lorem Ipsum is simply dummy text of the parinting and typesettig industry.Lorem Ipsum has been the industry's standard dummyte ever since the1500s.",
    images: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663488392/tonmetri/portfolio1_pu9cs1.png",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663488411/tonmetri/portfolio2_dzdhl4.png",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663488427/tonmetri/portfolio3_wpbx5i.png",
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663492454/tonmetri/portfolio4_ayzb0m.png",
      },
      {
        id: 5,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663492466/tonmetri/portfolio5_adkp70.png",
      },
    ],
  },
  videos: {
    text:
      "Lorem Ipsum is simply dummy text of the parinting and typesettig industry.Lorem Ipsum has been the industry's standard dummyte ever since the1500s.",
    videos: [
      {
        id: 1,
        video:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
      {
        id: 2,
        video:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
      {
        id: 3,
        video:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
    ],
  },
  clients: {
    text:
      "Lorem Ipsum is simply dummy text of the parinting and typesettig industry.Lorem Ipsum has been the industry's standard dummyte ever since the1500s.",
    logos: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/dmswymrzt/image/upload/v1663588254/tonmetri/client_yoodgy.png",
      },
    ],
  },
  reviews: [
    {
      id: 1,
      review: "truly a professional people to get your service done with them.",
      image: "https://www.youtube.com/watch?v=i85fxmDj8dg",
    },
    {
      id: 2,
      review: "the quality of work is impeccable and simply amazing! ",
      image: "https://www.youtube.com/watch?v=iptXqcCimaw",
    },
    {
      id: 3,
      review: "Grate ambience, fully equipped superb professionals...",
      image: "https://www.youtube.com/watch?v=ZwnXW_7fzk0",
    },
    {
      id: 3,
      review: "Grate ambience, fully equipped superb professionals...",
      image: "https://www.youtube.com/watch?v=nlyPlIHXgOE",
    },
  ],
};

app.get("/", (request, response) => {
  response.send(data);
});

app.listen(process.env.PORT || 3000);
