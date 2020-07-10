import {request} from "./request";

let AppAPI = {
  getFootnote: function () {
    return request({
      url: "/blog/footnote"
    });
  },
};

export default AppAPI;