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
  },
  getAllCategory() {
    return request({
      url: "/blog/category",
    });
  },
  getRecentArticleList() {
    return request({
      url: "/blog/recent"
    });
  },

  searchBlog(keyword, page, size) {
    return request({
      url: "/blog/search",
      params: {
        keyword,
        page,
        size,
      }
    });
  },
};

export default ArticleAPI;
