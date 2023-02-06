
// THIS PAGE CONTAINS API endpoint

export default class ApiUrl {
  static readonly URL_ENDPOINT: string = 'https://api.github.com/repos/'; //github DEFAULT
  static readonly STARGAZER: string = '/stargazers'; //final url for get call
  static readonly STARGAZER_FULL: string =
    '/mattiaferigutti/Backdrop-Android/stargazers';  //Experimental url
}


//TESTING

/* 'https://api.github.com/users/luca-parlapiano';
'https://api.github.com/repos/luca-parlapiano/stargazersLuca';
'https://api.github.com/repos/mattiaferigutti/Backdrop-Android/stargazers';
 */
