'https://api.github.com/users/luca-parlapiano';
'https://api.github.com/repos/luca-parlapiano/stargazersLuca';
'https://api.github.com/repos/mattiaferigutti/Backdrop-Android/stargazers';

const URL_ENDPOINT = 'https://api.github.com/repos/';

const URLS = {
  STARGAZER: '/stargazers',
  FULL: '/mattiaferigutti/Backdrop-Android/stargazers',
};

export class Api {
  private async fetch(
    url: string,
    method: string,
    contentType: string | undefined,
    headers: any,
    body?: any,
  ): Promise<any> {
    return fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': contentType,
        ...headers,
      },
      body: body,
    }).then(r => {
      console.log(r);
    });
  }

  public  function async getStar(params: {
    user: string;
    repository: string;
  }): Promise<any> {
    const url: string =
      URL_ENDPOINT +
      '/' +
      params.user +
      '/' +
      params.repository +
      URLS.STARGAZER;
    console.log(url);
    return this.fetch(url, 'GET', 'application/json', {}, '');
  }
}
