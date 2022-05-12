export function selectPostsAndComments(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}
