import {request} from "./request";

let ArticleAPI = {
  getArticleDetail(id) {
    return request({
      url: "/blog/article/" + id,
    });
  },
  getArticleList(page, size) {
    return request({
      url: "/blog/article",
      params: {
        page,
        size
      }
    });
  }
};

export default ArticleAPI;