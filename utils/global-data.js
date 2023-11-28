export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Simple Home Improvements';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'It is with great disappointment and a heavy heart that we must notify all of you that the store is going to be closed as of December 2023. The closure of the business is in the wake of low profits and zero finance generating. The company is unable to generate sufficient business profit despite making so many attempts to generate revenues. Making too many attempts to generate revenues and spending too much money can result in minus profits. The company is unable to receive a sufficient income and is unable to improve its operations and repay external finances. The situation lead us to bankruptcy and potentially negative profits. It also includes the unavailability of capital.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
