import {request} from "./request";

let ArticleAPI = {
  getArticleDetail(id) {
    return request({
      url: "/article/detail/" + id,
    });
  }
};

export default ArticleAPI;