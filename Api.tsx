/* 'https://api.github.com/users/luca-parlapiano';
'https://api.github.com/repos/luca-parlapiano/stargazersLuca';
'https://api.github.com/repos/mattiaferigutti/Backdrop-Android/stargazers';
 */
export default class ApiUrl {
  static readonly URL_ENDPOINT: string = 'https://api.github.com/repos/';
  static readonly STARGAZER: string = '/stargazers';
  static readonly STARGAZER_FULL: string =
    '/mattiaferigutti/Backdrop-Android/stargazers';
}

/*
import {useState} from 'react';

const URL_ENDPOINT = 'https://api.github.com/repos/';

const URLS = {
  STARGAZER: '/stargazers',
  FULL: '/mattiaferigutti/Backdrop-Android/stargazers',
};

export async function getStar(user: string, repository: string) {
  const url: string = URL_ENDPOINT +'mattiaferigutti' +'/' +'Backdrop-Android' +URLS.STARGAZER;

   // URL_ENDPOINT + '/' + user + '/' + repository + URLS.STARGAZER;
    //const [list,setList]= useState([]);

    const [list, setList] = useState<any>();

  console.log(url);
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(res => {
        setList(res)
    })
    .catch(err => {
      console.log('Connection Error' + err);
    });
    return list;
}
/* export class Api {
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

  public async getStar(params: {
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
}*/
