import axios from "axios";
  const instance = axios.create({
    baseURL: "https//localhost:8001",
  });


  export default instance;




  // [
  //         {
  //         "name":"elon Musk",
  //         "imgUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  //
  //         },
  //     {
  //         "name":"Jeff Bezos",
  //         "imgUrl":"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
  //
  //     }
  // ]
