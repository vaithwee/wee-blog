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
  getArchiveList() {
    return request({
      url: "/blog/archive"
    });
  },
  getTagList() {
    return request({
      url: "/blog/tags"
    });
  }
};

export default ArticleAPI;
