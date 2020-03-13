import {request} from "./request";

let HomeAPI = {
  getHomeInfo: function () {
    return request({
      url: "/blog/info"
    });
  },
  
};

export default HomeAPI;