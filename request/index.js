export const request = (params) => {
  return new Promise((resolve, reject) => {
    const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/';
    wx.request({
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};