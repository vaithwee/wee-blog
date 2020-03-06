import {request} from "./request";

let HomeAPI = {
  getHomeInfo: function () {
    return request({
      url: "/home/info"
    });
  },
  
};

export default HomeAPI;