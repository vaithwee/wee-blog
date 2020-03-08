import {request} from "./request";

let ArticleAPI = {
  getArticleDetail(id) {
    return request({
      url: "/article/detail/" + id,
    });
  },
  getArticleList(page, size) {
    return request({
      url: "/article/list",
      params: {
        page,
        size
      }
    });
  }
};

export default ArticleAPI;
