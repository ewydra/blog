import $ from 'jquery';

// export default class JQueryRequest {
//   get(url) {
//     return new Promise((resolve) => {
//       $.get(url, function (data) {
//         resolve(data);
//       })
//     })
//   }
// }

export class FetchRequest {
  fetch(url) {
    return fetch(url).then(response => response.json())
  }
}

export default class FetchAdapter {
  constructor() {
    this.request = new FetchRequest();
  }

  get(url) {
    return this.request.fetch(url)
  }
}
